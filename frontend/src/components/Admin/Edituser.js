import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../Register/Register.css'
import Header from './AHeader';

function Edituser() {

    const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState({});
  const userId = useParams();

  useEffect(() => {
    try {
      (async function () {
        const { data } = await axios.get(
          `/api/admin/getuser/${userId.userId}`
        );
        console.log(data);
        setname(data.name);
        setemail(data.email);
      })();
    } catch (error) {
      throw new error(error.response.data.message);
    }
  }, []);
  
//   user details edit button
  let handleLogin = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log("jjjjiiiiiiiiii"+userId)
      console.log(name, email);
      await axios.patch(
        `/api/admin/edituser/${userId.userId}`,
        {
          name,
          email,
        },
        config
      );

      // localStorage.setItem("userinfo", JSON.stringify(data))
      navigate("/admin");
    } catch (error) {
      seterror(error.response.data);
    }
  };
  
  return (
    <React.Fragment>
        <Header/>
    <div className="container">
      <div className="row">
        <div
          style={{ paddingTop: "7em" }}
          className="col-lg-10 col-xl-9 mx-auto "
        >
          <div className="card flex-row  border-0 shadow rounded-3 overflow-hidden">
            <div className="card-img-leftt1 d-none d-md-flex"></div>
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-3">
                User Details
              </h5>
              <form>
              <label htmlFor="floatingInputUsername">Username</label>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    // className={classname("form-control", {
                    //   "is-invalid": error.name,
                    // })}
                    id="floatingInputUsername"
                    placeholder="myusername"
                    name="name"
                    autoFocus
                  />
                  {/* {error.name && (
                    <div className="invalid-feedback">{error.name}</div>
                  )} */}
                
                </div>
                <label htmlFor="floatingInputEmail">Email address</label>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    // className={classname("form-control", {
                    //   "is-invalid": error.email,
                    // })}
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                    name="email"
                  />
                  {/* {error.email && (
                    <div className="invalid-feedback">{error.email} </div>
                  )} */}
                
                </div>
                <div className="d-grid mb-2">
                  <button
                    onClick={(e) => {
                      handleLogin(e);
                    }}
                    className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                    type="submit"
                  >
                    edit
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

export default Edituser