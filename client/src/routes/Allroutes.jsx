import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignUp from '../pages/Signup/signup';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Network from '../pages/Network/Network';
import SearchAppBar from '../components/Navbar/Navbar';
import Messaging from '../pages/Messaging/Messaging';
import Invitation from '../pages/Invitation/Invitation';
import Notification from '../pages/Notification/Notification';
import { useSelector } from 'react-redux';
import NetworkDetector from '../pages/Navigator/Navigator';

function AllRoutes() {
  const Protected = ({ children }) => {
    const user = useSelector((state)=> state.user.user);
    return Object.keys(user).length === 0 ? <Navigate to="/Login" /> : <>{children}</>;
  };
  return (
    <>
      <BrowserRouter> 
      <NetworkDetector>
        <SearchAppBar/> 
        <Routes>
          <Route path='/' element={<Navigate to ='/Home' replace={true} />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Home' element={<Protected><Home /></Protected>} />
          <Route path='/Profile' element={<Protected><Profile /></Protected>}></Route>
          <Route path='/Network' element={<Protected><Network /></Protected>}></Route>
          <Route path='/Messaging' element={<Protected><Messaging /></Protected>}></Route>
          <Route path='/Invitation' element={<Protected><Invitation /></Protected>}></Route>
          <Route path='/Notification' element={<Protected><Notification/></Protected>}></Route>
        </Routes>
        </NetworkDetector>
      </BrowserRouter>
    </>
  )
}

export default AllRoutes;