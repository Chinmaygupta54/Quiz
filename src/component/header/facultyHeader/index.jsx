import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './style'

const FacultyHeader = () => {
  return (
   <header>
    <Wrapper>
        <h1><a href='/' >Quiz World</a></h1>     
        <nav>  
          <ul>
            {/* <li><Link to="/signin">Registration</Link></li> */}
            {/* <li><Link to="login">Login</Link></li> */}
             {/* <li><Link to="/attempt-quiz">Take Quiz</Link></li>  */}
             <li><Link to="/questionList">Question List</ Link></li> 
             <li><Link to="/questionForm">Question Form</Link></li> 
             <li><Link to="result">Result</Link></li> 
        </ul>
        </nav>
    </Wrapper>
   </header>
  )
}

export default FacultyHeader
