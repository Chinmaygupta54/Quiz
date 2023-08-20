import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import "./style.css"
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
  axios.post("https://server-api1-li2k.onrender.com/api/user/login", {
    contact, password 
  }).then(res => {console.log(res.data)}).catch(err => {console.log(err.message)}).finally(()=>{
    console.log("LOgin Successful")
  })
 }
  return (
      <form action = "">
        <h2>Login</h2>
        <div className='input-box'>
        <input
            type = "text" 
            placeholder='Contact'
            required
            value={contact}
            onChange={(e) => setContact(e.target.value) }
        />
        </div>
        <div className='input-box'>
        <input
            type='password'
            placeholder = 'Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <input
            type = "submit"
            id = 'userSubmitButton'
            value = "Login" 
            onClick={LoginForm}
        />
        <p>
          Are you a new user?<span onClick={signIn}>SignIn</span>
        </p>
      </form>
   )
}

export default LoginForm
