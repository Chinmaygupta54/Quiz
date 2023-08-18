import { BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from "./component/footer"
import Header from "./component/header"




import LoginForm from "./component/loginForm"

export const App = () => {

  const [questionList , setQuestionList] = useState([])
  const addQuestion = (quest) =>{
    setQuestionList([...questionList , quest])
  }


    return(
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element = {<LoginForm />} />
            <Route path="/login" element = {<LoginForm />} />
            <Route path="/questionList" element = {<QuestionList questionList = {questionList} />} />
            <Route path="/questionForm" element = {<QustionForm addQuestion = {addQuestion}/>} />
          </Routes>
          <Footer />
          <LoginForm />    
        </BrowserRouter>
    )
}