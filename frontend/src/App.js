import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import Header from './components/Header/Header';
import RegisterPage from './pages/RegisterPage';
import ALoginPage from './pages/ALoginPage';
import AHome from './pages/AHome';
import AHeader from './components/Admin/AHeader';
import Edituser from './components/Admin/Edituser';

function App() {
 
  return (
    <div>


  
  
  
  <Routes>
  <Route element={<Header/>} > </Route>
  <Route element={<AHeader/>} ></Route>
<Route path='/' element={   <Home/>} >  </Route>
<Route path='/login' element={<LoginPage/>} >  </Route>
<Route path='/register' element={<RegisterPage/>} >  </Route>
<Route path='/admin' element={<AHome/>} ></Route>
<Route path='/adminlogin' element={<ALoginPage/>} > </Route>
<Route path="/edituser/:userId" element={<Edituser/>} />
{/* <Route  path='/admin' element={ adminDetails ? <AHome/> : <ALoginPage/>} > </Route> */}



  </Routes>

 
  
   </div>
  );
}

export default App;