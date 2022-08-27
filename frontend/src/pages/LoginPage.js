import Login from '../components/Login/Login'
import Home from './Home'

function LoginPage() {
  const userDetails=  localStorage.getItem('userInfo')
  return (
    <div>
       
        {userDetails ? <Home/> :  <Login/> }
        
        

    </div>
  )
}

export default LoginPage