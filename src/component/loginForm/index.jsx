import React from 'react'
import "./style.css"

export const LoginForm = () => {
  return (
        <form action = "">
          <h2>Login</h2>
          {/* <div> */}
          {/* <label>UserName:</label></div> */}
        <input type = "text" 
        placeholder = 'Username'
        />
        {/* <div> */}
       {/* <label>Password:</label> */}
       {/* </div> */}
        <input
       type='password'
        placeholder = 'Password'
     />
        <select name = "" id="">
            <option value disabled>Select Any</option>
            <option value = "faculty">Faculty</option>
            <option value = "student">Student</option> 
        </select>
        <input type = "submit"
        id = 'userSubmitButton'
        value = "Login" 
        onClick={LoginForm}/>
        <p>Are you a new user?
          <span>SignIn </span>
          </p>
       

    </form>
   
  )
}

export default LoginForm
