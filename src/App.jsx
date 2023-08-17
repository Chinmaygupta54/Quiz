import { BrowserRouter} from "react-router-dom"
import Footer from "./component/footer"
import Header from "./component/header"
import LoginForm from "./component/loginForm"
import SignIn from "./component/signForm"

export const App = () => {
    return(
        <BrowserRouter>
          <Header />
          <Footer />
          <LoginForm />   
          < SignIn />
        </BrowserRouter>
    )
}