import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Wrapper from './style'
import axios from 'axios'

const LoginForm = () => {
  const[contact, setContact] = useState("")
  const[password, setPassword] = useState("")
  const navigate = useNavigate()

  const signIn = () => {
    navigate("/signin")
}
const LoginForm = (e) => {
  e.preventDefault()
  axios.post("https://quizattendace.onrender.com/api/user/login", {
    contact, password 
  }).then(res => {console.log(res.data) 
  if(res.data){
    // alert('Welcome ${res.data.user.role}')
    if (res.data.user.role === "faculty"){
      alert("welcome faculty")
      navigate("/questionForm")
    }
    else if(res.data.user.role ==="student"){
      alert("welcome Student")
      navigate("/attemptquiz")
    }
    // alert("WELCOME FACULTY")
  }
  }).catch(err => {console.log(err.message)}).finally(()=>{
    // console.log("LOgin Successful")
    // alert("Invalid user")
   
  })
  
}


  return (
      <Wrapper>
        <div className='loginContainer'>
        <form>
        <h2>Login</h2>
          <input
              type = "text" 
              placeholder='Contact'   
              value={contact}
              onChange={(e) => setContact(e.target.value) }
          />
          <div className='input-field'>
          <input
              type='password'
              placeholder = 'Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          </div>
        <input
            type = "submit"
            className='Button'
            id = 'userSubmitButton'
            onClick={LoginForm} 
        />
        <p>
          Are you a new user? <span onClick={signIn}><div>SignIn</div></span>
        </p>
        </form>
        </div>
      </Wrapper>
   )
}

export default LoginForm
