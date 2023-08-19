import React, { useState } from 'react'
import './style.css'
import axios from 'axios'

const SignIn  = () => {
  const [contact, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword , setConfirmPassword] = useState("")
 const signIn = (e) => {
  e.preventDefault()
  axios.post("https://server-api1-li2k.onrender.com/api/user/add", {
    contact, password
  }).then(res => {console.log(res.data)}).catch(err => {console.log(err.message)}).finally(()=>{
    console.log("finally is working")
  })
 }
  return (
    <div>
      <form action="">
        <h2>Sign In</h2>
        <input
            type = "text"
            placeholder = 'Contact'
            onChange={(e) => setUserName(e.target.value)}
        />
        <input
            type="password"
            placeholder = 'Password'
            onChange={(e) => setPassword(e.target.value)}
        />
        <input
            type="password" 
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
      
        <input
            type="button" onClick={signIn}
            value="SignIn"
        />
      </form>
    </div>
  )
}

export default SignIn
