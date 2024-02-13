
import './App.css';
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/Signup/signup';
import Login from './Components/Login/Login';


function App() {
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

export default App;
