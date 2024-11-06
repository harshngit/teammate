import {
  LOGIN_REQUEST,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  GOOGLE_REQUEST,
  GOOGLE_SUCCESS,
  GOOGLE_FAIL,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS
}
  from "../constants/userConstants"
import { auth, db, googleProvider } from "../firebase.config"

import {
  doc,
  setDoc,
  addDoc,
  collection,
  where,
  query,
  getDoc,
  getDocs,
  onSnapshot
} from "firebase/firestore";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth"




export const loadUser = (uid) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const userRef = doc(db, "users", uid);
    // const userSnap = await getDoc(userRef);

    const userData = await onSnapshot(doc(db, "users", uid), (doc) => {
      console.log("Current data: ", doc.data());
      dispatch({ type: LOAD_USER_SUCCESS, payload: doc.data() });
    });
    console.log(userData)

  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.message });
  }
}
export const signUpUsingGoogle = () => async (dispatch) => {
  try {
    dispatch({ type: GOOGLE_REQUEST });
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const users = result.user;
        console.log(users)
        const userRef = collection(db, "users");
        const q = query(userRef, where("email", "==", users.email));
        const getUserInfo = await getDocs(q);
        if (getUserInfo.docs.length === 0) {
          await setDoc(doc(db, "users", users.uid), {

            uid: users.uid,
            role: "user",
            name: users.displayName,
            email: users.email,
            profile_image: users?.photoURL
          });
        }
        localStorage.setItem("loginType", "google");
        dispatch({ type: GOOGLE_SUCCESS, payload: users.uid });
      }).catch((error) => {
        // Handle Errors here.
        console.log(error.message)
        // ...
      });
  } catch (error) {
    dispatch({ type: GOOGLE_FAIL, payload: error.message });
  }
}



export const signUpUsingEmail = (data) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", data.email));
    const getUserInfo = await getDocs(q);
    if (getUserInfo.docs.length === 0) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async (userCredential) => {
          // Signed in 
          const user = userCredential.user;

          console.log("hii")
          console.log({
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.designation,
            subscription: null,
            uid: user.uid,
          })
          await setDoc(doc(db, "users", user.uid), {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.designation,
            subscription: null,
            uid: user.uid,
          });


          dispatch({ type: REGISTER_USER_SUCCESS, payload: user.uid });
        }).catch((err) => {
          console.log(err)
        })


    }
    else {
      console.log("user exists")
    }
  } catch (err) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: err,
    });
  }
}

export const loginUsingEmail = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({ type: LOGIN_SUCCESS, payload: user.uid });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Login Credentials are not correct")
        dispatch({
          type: LOGIN_FAIL,
          payload: error.message,
        });

      });
  }
  catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message,
    });
  }
}


export const logout = () => async (dispatch) => {
  try {
    signOut(auth).then(() => {
      console.log("user logged out")
    }).catch((error) => {
      console.log(error.message)
    });

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.message });

  }
}

export const updateProfile = (uid, name, email, phone, role) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    await setDoc(doc(db, "user", uid), {
      name: name,
      email: email,
      uid: uid,
      phone: phone,
      role: role
    }).then(() => {
      console.log("User Updated")
    }).catch((error) => {
      console.log(error.message)
    });

    dispatch({ type: UPDATE_PROFILE_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.message });

  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
