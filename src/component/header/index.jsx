import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './style'

const Header = () => {
  return (
   <header>
    {/*nav tag */}
    <Wrapper>
        <h1>Quiz App</h1>
        <ul>
            <li><Link to="/">Registration</Link></li>
            <li><Link to="/attempt-quiz">Take Quiz</Link></li>
            <li><Link to="/questionList">Question List</ Link></li>
            <li><Link to="/questionForm">Question Form</Link></li>
            <li><Link to="result">Result</Link></li>
        </ul>
    </Wrapper>
   </header>
  )
}

export default Header
