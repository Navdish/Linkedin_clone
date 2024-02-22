import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignUp from '../pages/Signup/signup';
import Login from '../pages/Login/Login';


function AllRoutes() {
  return(
    <>
      <BrowserRouter>  
        <Routes>
          <Route path='/' element={<Navigate to ='/SignUp' replace={true} />}></Route>
          <Route path='/Home' element={<Home />} />
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AllRoutes;