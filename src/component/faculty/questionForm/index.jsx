import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Wrapper from './style'

const QustionForm = ({addQuestion}) => {

    const [question, setQuestion] = useState("")
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")
    const [optionC, setOptionC] = useState("")
    const [optionD, setOptionD] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    // const [Quiz , sz] = useState("")

    // useEffect(() => {
    //     axios.get("https://quizattendace.onrender.com/api/quiz/read`")
    //     .then(res =>
    //         {
    //             setQuiz(res.data[0])
    //         })
    // })
   

    const navigate = useNavigate()
    const questionList = () => {
        navigate("/questionList")
    }
    const add = () => {
        if(question.length ===0||optionA.length === 0||optionB.length === 0||optionC.length === 0||optionD.length === 0){
            alert("Please Enter question and their options")
        }
        else if(correctAnswer.length === 0){
            alert("Please select correct option")
        }
        else{
        addQuestion({
            question : question,
            optionA : optionA,
            optionB : optionB,
            optionC : optionC,
            optionD : optionD,
            correctAnswer : correctAnswer
        })
        setQuestion('')
        setOptionA('')
        setOptionB('')
        setOptionC('')
        setOptionD('')
        setCorrectAnswer('')
    }
}

  return (
    <Wrapper>
            <form action = "">
              <h1>Add Questions</h1>
                <input 
                    type ='textarea'
                    placeholder = "Enter Question"
                    value = {question}
                    onChange = {(e) => setQuestion(e.target.value)} 
                    
                />
                <input
                    type = "text"
                    placeholder = "option A"
                    value = {optionA}
                    onChange = {(e) => setOptionA(e.target.value)}                    
                />
                <input
                    type = "text"
                    placeholder = "option B"
                    value = {optionB}
                    onChange = {(e) => setOptionB(e.target.value)} 
                    
                />
                <input
                    type = "text"
                    placeholder = "option C"
                    value = {optionC}
                    onChange = {(e) => setOptionC(e.target.value)} 
                    
                />
                <input
                    type = "text"
                    placeholder = "option D"
                    value = {optionD}
                    onChange = {(e) => setOptionD(e.target.value)} 
                    
                />
                <select name = "type"
                    onChange = {(e) => setCorrectAnswer(e.target.value)}                    
                >
			        <option value selected disabled >--Select correct option--</option>
			        <option value = "optionA">{optionA}</option>
			        <option value = "optionB">{optionB}</option>
			        <option value = "optionC">{optionC}</option>
                    <option value = "optionD">{optionD}</option>
		        </select>
                <select >
                    <option value="" disabled selected> ---Type of Quiz---</option>
                    <option value = "Html">Html</option>
                    <option value = "Java">Java</option>
                    <option value = "Css">Css</option>
                    <option value = "ReactJs">ReactJs</option>
                    
                </select>
                <input
                    type = "button"
                    value = "Add Question"
                    onClick = {add} 
                    
                />
            </form>
            <div>
            <input
                    type = "button"
                    value = "View Questions"
                    onClick = {questionList}        
            />
            </div>
    </Wrapper>
  )
}

export default QustionForm