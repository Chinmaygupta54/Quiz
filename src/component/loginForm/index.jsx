import React from 'react'
import "./style.css"

export const LoginForm = () => {
  return (
        <form action = "">
          <h3>Login</h3>
        <input type = "text"
        name = "userName"
        id = "username"
        placeholder = 'Username'
        />
        <input
        name = "Password"
        id = "password"
        placeholder = 'Password'
     />
        <select name = "" id="">
            <option value disabled>Select Any</option>
            <option value = "faculty">Faculty</option>
            <option value = "student">Student</option> 
        </select>
        <input type = "submit"
        id = 'userSubmitButton'
        value = "Registration" 
        onClick={LoginForm}/>
    </form>
   
  )
}

export default LoginForm
