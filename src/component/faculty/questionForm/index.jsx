import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Wrapper from './style'
import axios from 'axios'

const QustionForm = ({addQuestion}) => {

    const [question, setQuestion] = useState("")
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")
    const [optionC, setOptionC] = useState("")
    const [optionD, setOptionD] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [quizes, setQuizes] = useState([])


    useEffect(() => {
        axios.get('https://quizattendace.onrender.com/api/quiz/read')
        .then(res => {
            setQuizes(res.data)
            setQuiz(res.data[0])
        })
    },[])
    const [quiz, setQuiz] = useState(quizes[0]);
    const navigate = useNavigate()
    const questionList = () => {
        navigate("/questionList")
    }
    const add = () => {
    
        if(question.length === 0||optionA.length === 0||optionB.length === 0||optionC.length === 0||optionD.length === 0){
            alert("Please Enter question and their options")
        }
        else if(correctAnswer.length === 0){
            alert("Please select correct option")
        }
        else{
            const options = [optionA,optionB,optionC,optionD];
            const correctAnsIndex = options.indexOf(correctAnswer);
            axios.post("https://quizattendace.onrender.com/api/ques/add", {
                ques: question,
                ans: options,
                correctAnsIndex: correctAnsIndex,
        })
        .then((res) => {
            console.log(res.data);
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
        })
        .catch((error) => {
            console.log(error);
        });


        
    }
}

  return (
    <Wrapper>
            <form action = "">
              <h1>Add Questions</h1>
                <input 
                    type ='text'
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
			        <option value = "optionA">option A</option>
			        <option value = "optionB">option B</option>
			        <option value = "optionC">option C</option>
                    <option value = "optionD">option D</option>
		        </select>
                <select onChange={e => setQuiz(JSON.parse(e.target.value))}>
                    {
                        quizes.map(quiz => <option key={quiz.id} value={JSON.stringify(quiz)}>{quiz.title}</option>)
                    }
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