import React from 'react'
import { useNavigate } from 'react-router'
import "./style.css"

export const LoginForm = () => {
  
  const navigate = useNavigate()
  const signIn = () => {
    navigate("/signin")
}
  return (
      <form action = "">
        <h2>Login</h2>
        <input
            type = "text" 
            placeholder = 'Username'
        />
        <input
            type='password'
            placeholder = 'Password'
        />
        <select name = "" id="">
            <option value disabled>Select Any</option>
            <option value = "faculty">Faculty</option>
            <option value = "student">Student</option> 
        </select>
        <input
            type = "submit"
            id = 'userSubmitButton'
            value = "Login" 
            onClick={LoginForm}
        />
        <p>
          Are you a new user?<span onClick={signIn}>SignIn </span>
        </p>
      </form>
   )
}

export default LoginForm
