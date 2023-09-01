import { BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from "./component/footer"
import LoginForm from "./component/loginForm"
import QustionForm from "./component/faculty/questionForm"
import { useState } from "react"
import QuestionList from "./component/faculty/qustionList"
import Quiz from "./component/student/attemptquiz"
import SignIn from "./component/signForm"
import LoginHeader from "./component/header/loginHeader"
import './style.css'
import Error from "./component/error"
import FacultyHeader from "./component/header/facultyHeader"
import CreateQuiz from "./component/faculty/createQuiz"
import Create from "./component/faculty/createQuiz"

export const App = () => {

  const [questionList , setQuestionList] = useState([])
  const addQuestion = (quest) =>{
    setQuestionList([...questionList , quest])
  }


    return(
        <BrowserRouter>
          <Routes>
          <Route path = "/" element = {<LoginHeader />}/>
          <Route path = "/login" element = {<LoginHeader />}/>
          <Route path = "/signin" element = {<LoginHeader />}/>
          <Route path = "/Create" element = {<LoginHeader />}/>
          <Route path = "/questionForm" element = {<FacultyHeader />}/>
          <Route path = "/questionList" element = {<FacultyHeader />}/>
          </Routes>
          
          <Routes>
            <Route path = "/" element = {<LoginForm />}/>
            <Route path = "/login" element = {<LoginForm />} />
            <Route path = "/create" element = {<Create />} />
            <Route path = "/questionList" element = {<QuestionList questionList = {questionList} />} />
            <Route path = "/questionForm" element = {<QustionForm addQuestion = {addQuestion}/>} />
            <Route path = "/attemptquiz" element ={<Quiz />} />
            <Route path = "/signin" element = {<SignIn />} />
            <Route path = "/*" element = {<Error />} />
          </Routes>
          <Footer />
          
        </BrowserRouter>
    )
}
