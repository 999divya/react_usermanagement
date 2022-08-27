import React, { useState } from 'react';
import './AdminLogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './AHeader';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';



const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const [loading, setLoading] = useState(false);

let handleLogin=async(e)=>{

    e.preventDefault();
    try{
        const config = {
            headers: {
              "Content-type": "application/json",
            },
          }
          let logDetails={
            email,
            password
          }
          setLoading(true);
          const {data}=await axios.post('/api/admin/adminlogin',logDetails,config);
          localStorage.setItem("admininfo", JSON.stringify(data))
          if (localStorage.admininfo) {
            setLoading(false)
            navigate('/admin')
          }
    }catch(err){
        seterror(error.response.data)
        setLoading(false)
    }

}



  return (
    <React.Fragment>
   <Header/>
    <div className="container">
     
<div className="row">

  <div style={{paddingTop:"7em"}} className="col-lg-10 col-xl-9 mx-auto ">
    <div  className="card flex-row  border-0 overflow-hidden">
      <div className="card-img-left d-none d-md-flex"></div>
      <div className="card-body p-4 p-sm-5">
     
      {error && <ErrorMessage variant='danger' >{error}</ErrorMessage>}
    {loading && <Loading/>}
        <h5 className="card-title text-center mb-5 fw-light fs-3">
          Admin Login
        </h5>
        <form onSubmit={handleLogin} method='post'>
        <label >Email address</label>
          <div className="form-floating mb-3">
         
            <input
              type="emai"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
            //   className={classname('form-control',{
            //     'is-invalid': error.email
            //     })}
              id="floatingInputEmail"
              placeholder="name@example.com"
              name='email'
              autoFocus
              className="form-control"
            />


             {/* {error.email && (<div className="invalid-feedback">{error.email}</div>)} */}
          
          </div>

          <label htmlFor="floatingPassword">Password</label>
          <div className="form-floating mb-3">
            <input
              type="password"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
            //   className={classname('form-control',{
            //     'is-invalid': error.password
            //     })}
              id="floatingPassword"
              placeholder="Password"
              name='password'
              className="form-control"
            />
            {/* {error.password && (<div className="invalid-feedback">{error.password}</div>)} */}
           
          </div>
          <div className="d-grid mb-2">
            <button
              className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>

</React.Fragment>


  )
}

export default AdminLogin