import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import Wrapper from './style';
const SignIn = () => {
  const[userName,setUserName] = useState("")
  const [contact, setContact] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  const[role, setRole] = useState("")
 const signIn = (e) => {
  e.preventDefault()
  axios.post("https://quizattendace.onrender.com/api/user/add", {
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
    <Wrapper>
    <div className='signinContainer'>
      <form>
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
         <select onChange={(e) => setRole(e.target.value)}>
            <option value =" " disabled selected>Select Any</option>
            <option value = "faculty">Faculty</option>
            <option value = "student">Student</option> 
        </select>
        <input
            type="button" onClick={signIn} 
            value="SignIn"
        />
      </form>
    </div>
    </Wrapper>
  )
}

export default SignIn
