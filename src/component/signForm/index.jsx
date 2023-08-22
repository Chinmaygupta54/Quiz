import React, { useState } from 'react'
import axios from 'axios'
import './App.css';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const[userName,setUserName] = useState("")
  const [contact, setContact] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  const[role, setRole] = useState("")
 const signIn = (e) => {
  e.preventDefault()
  axios.post("https://server-api1-li2k.onrender.com/api/user/add", {
    userName, contact, password ,role
  }).then(res => {
    console.log(res.data)
    alert("Account is created")
    navigate("/login")
  }).catch(err => {console.log(err.message)}).finally(()=>{
    console.log("finally is working")

  })
 }
  return (
    <div>
      <form action="">
        <h2>Sign In</h2>
        <input
          type="text"
          placeholder='UserName'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
         />
        <input
            type = "text"
            placeholder = 'Contact'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
        />
        <input
            type="password"
            placeholder = 'Password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
        />
         <select value={role}
            onChange={(e) => setRole(e.target.value)}>
            <option value disabled selected>Select Any</option>
            <option value = "faculty">Faculty</option>
            <option value = "student">Student</option> 
        </select>
        <input
            type="button" onClick={signIn} 
            value="SignIn"
        />
      </form>
    </div>
  )
}

export default SignIn
