import React, { useState } from 'react'
import Wrapper from './style'
import { useNavigate } from 'react-router'
import axios from 'axios'
const Create = () => {
    const[title, setTitle] = useState("")
    const navigate = useNavigate()

    const addQuiz = (e) =>{
      if(title){
        e.preventDefault()
        axios.post("https://quizattendace.onrender.com/api/quiz/add" ,{
    title 
  }).then(res => {
    console.log(res.data)
    navigate("/questionForm")
  }).catch(err => {console.log(err.message)}).finally(()=>{
    console.log("finally is working")
  })
  navigate("/questionForm")
      }else{
        alert("Please enter Quiz name")
      }
        

    }
  return (
    <Wrapper>
        <div className='createContainer'>
        <form>
        <h2>Create Quiz</h2>
          <input
              type = "text" 
              placeholder='Title'   
              value={title}
              onChange={(e) => setTitle(e.target.value) }
          />
        <input
            type = "submit"
            className='Button'
            id = 'Add Question'
            value="Create"
            onClick={addQuiz} 
        />
        </form>
        </div>
    </Wrapper>
  )
}
export default Create
