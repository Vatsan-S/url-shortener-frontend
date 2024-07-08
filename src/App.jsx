import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Activation from '../Pages/Activation';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Landingpage from '../Pages/Landingpage';
import Forgotpassword from '../Pages/Forgotpassword';
import Resetpassword from '../Pages/Resetpassword';
import Privateroute from '../Components/Privateroute';
import Home from '../Pages/Home';


const App = () => {
  
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reset_password/:username/:id' element={<Resetpassword/>}/>
        <Route path='/forgotpassword' element={<Forgotpassword/>}/>

        <Route element={<Privateroute/>}>
        <Route path='/landingpage' element={<Landingpage/>}/>
        </Route>
        
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/activate_account/:id/:username' element={<Activation/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;