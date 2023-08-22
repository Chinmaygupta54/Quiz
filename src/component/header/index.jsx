import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './style'

const Header = () => {
  return (
   <header>
    <Wrapper>
        <h1>Quiz App</h1>     
        <nav>  
          <ul>
            <li><Link to = "login">Login</Link></li>
            <li><Link to = "/attempt-quiz">Take Quiz</Link></li>
            <li><Link to = "/questionForm">Question Form</Link></li>
            <li><Link to = "result">Result</Link></li>
        </ul>
        </nav>
    </Wrapper>
   </header>
  )
}

export default Header
