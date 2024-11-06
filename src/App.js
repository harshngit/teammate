
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { loadUser } from './actions/userActions';
import Login from "./pages/Login"
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';
import PastPaper from './pages/PastPaper';
import TopicalPaper from './pages/TopicalPaper';
import MCQPaper from './pages/MCQPaper';
import Pricing from './pages/Pricing';
// import CreateUser from "./pages/CreateUser"
function App() {
  const { error, loading, isAuthenticated, users, userProfile } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated && !userProfile) {
      dispatch(loadUser(users));
    }
    if (!isAuthenticated) {
      navigate("/login")

    }

  }, [isAuthenticated])
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/create-user" element={<CreateUser />} />
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route exact path="/" element={<PastPaper />} />
        <Route exact path="/topicalpaper" element={<TopicalPaper />} />
        <Route exact path="/mcqpaper" element={<MCQPaper />} />
        <Route exact path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
