import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './Login.css'
import {useNavigate} from "react-router-dom"


function Login() {

  const navi =useNavigate()
  return (
    <div id='login'>
      <Container>
        <div className='Login-Model' >
          <h1 className='LName'>Login Here </h1>
          <Form>
            <Form.Label className='Flable'>Enter Username</Form.Label>
            <Form.Control className='Fcontrol' type="email" placeholder="Enter Username" />
            <Form.Label className='Flable'>Password</Form.Label>
            <Form.Control className='Fcontrol' type="password" placeholder="Enter Password" />
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Remember me" />
            <Button className='Lbutton' onClick={()=>navi("/")}>Login</Button>
            <Button className='Lbutton' onClick={()=>navi("/register")}>Sign Up</Button>
            {/* <Button className='Lbutton'>Sign Up</Button> */}

          </Form>
          <div>
            <Button className='Canl-But'>Cancel</Button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>

        </div>
      </Container>

    </div>
  )
}

export default Login