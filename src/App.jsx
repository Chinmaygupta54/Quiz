import { BrowserRouter} from "react-router-dom"
import Footer from "./component/footer"
import Header from "./component/header"
import LoginForm from "./component/loginForm"

export const App = () => {
    return(
        <BrowserRouter>
          <Header />
          <Footer />
          <LoginForm />    
        </BrowserRouter>
    )
}