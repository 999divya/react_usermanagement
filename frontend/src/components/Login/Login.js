import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import Loading from '../Loading'
import ErrorMessage from '../ErrorMessage'
import Header from '../Header/Header'

function Login() {
  const navigate=useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    
  
  
  }, [])
  

  const submitHandler= async (e)=>{
   e.preventDefault()
   console.log(email,password);
   try {
    const config={
      headers: {
        "Content-type": "application/json",
      }
    }
            setLoading(true)
            const {data} = await axios.post('/api/user/login',{
              email,
              password
            },config)
             
              console.log(data);
            localStorage.setItem("userInfo",JSON.stringify(data))
            setLoading(false)
           
              navigate('/')
            

   } catch (error) {
    setError(error.response.data.message)
    setLoading(false)
    
   }
  }

  return (
    <React.Fragment>
<Header/>
    <Container className='mt-5'>
       
  
    <div className="loginContainer">
    {error && <ErrorMessage variant='danger' >{error}</ErrorMessage>}
    {loading && <Loading/>}
    
    <Form onSubmit={submitHandler}  >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
        //   placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </Form.Group>

      <Button  className='mt-3'  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Row className="py-3">
      <Col>
        New Customer ? <Link to="/register">Register Here</Link>
      </Col>
    </Row>
  </div>
  </Container>
  </React.Fragment>
  )
}

export default Login