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

function AllRoutes() {
  return(
    <>
      <BrowserRouter> 
        <SearchAppBar/> 
        <Routes>
          <Route path='/' element={<Navigate to ='/SignUp' replace={true} />}></Route>
          <Route path='/Home' element={<Home />} />
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/Network' element={<Network />}></Route>
          <Route path='/Messaging' element={<Messaging />}></Route>
          <Route path='/Invitation' element={<Invitation />}></Route>
          <Route path='/Notification' element={<Notification/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AllRoutes;