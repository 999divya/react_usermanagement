import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';




const Register = () => {
    const {register,handleSubmit, formState: {errors},reset,trigger } = useForm()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
   const [error, setError] = useState("")
    const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const onSubmit= (data)=>{
    console.log(data);
    }
    const navigate= useNavigate()
    const submitHandler= async (e)=>{
        e.preventDefault()
        console.log(email);
        try {
          const config={
            headers: {
              "Content-type":"application/json",
            }
          }
          setLoading(true)
          const {data}= await axios.post("/api/user",{
            name,email,password
          },config)
    
          setLoading(false)
          // localStorage.setItem("userInfo", JSON.stringify(data))
              navigate('/login')
           
        } catch (error) {
          setError(error.response.data.message)
          setLoading(false)
        }
      }
      console.log(errors);

  return (
    <div className="container">
    <div className="row">
      <div style={{paddingTop:"7em"}} className="col-lg-10 col-xl-9 mx-auto ">
        <div  className="card flex-row  border-0 shadow rounded-3 overflow-hidden">
          <div className="card-img-leftt1 d-none d-md-flex"></div>
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-3">
              Register
            </h5>
            {error && <ErrorMessage variant='danger' >{error}</ErrorMessage>}
    {loading && <Loading/>}
            <form onSubmit={handleSubmit(onSubmit) && submitHandler} method="post">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  ref={register} 
                     {...register("name",{required:"Name is Required" ,
                     
                    }
                     )}
                     onKeyUp={() => {
                      trigger("name");
                    }}
                  value={name}
                  onChange={(e)=>{setName(e.target.value,{ shouldValidate: true })}}
               
                  id="floatingInputUsername"
                  placeholder="myusername"
                  
                  autoFocus
                />
          { errors.name &&   ( <small className='text-danger' >{errors.name.message}</small> )}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  {...register("email",{required:"Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                  }
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                  name="email"
                />
            { errors.email &&  <small className='text-danger' >{errors.email.message}</small> }
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  {...register("password",{required:"Password is Required",
                  pattern: {
                    value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message: "password should contain atleast one number and one special character"
                  }
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                />
            { errors.password &&   <small className='text-danger' > {errors.password.message}</small> }
              </div>
              <div className="d-grid mb-2">
                <button
                  className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                  type="submit"
                >
                  Register
                </button>
                <Link className="d-block text-center mt-2 small" to="/login">Have an account? Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register