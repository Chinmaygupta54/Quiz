import React from 'react'

const SignIn  = () => {
  return (
    <div>
      <form action="">
        <h2>Sign In</h2>
        <input
            type = "text"
            name = "userName"
            id = "username"
            placeholder = 'Username'
        />
        <input
            type="password"
            name = "Password"
            id = "password"
            placeholder = 'Password'
        />
        <input>
            type="password" 
            placeholder='Confirm Password'
        </input>
      
        <input
            type="button"
            value="SignIn"
        />
      </form>
    </div>
  )
}

export default SignIn
