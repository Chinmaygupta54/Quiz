import { styled } from "styled-components";

const Wrapper = styled.section`
margin : auto;
width : 70%;
display: block;
align-items: center;
text-align: center;

h1{   

    font-size: 1.4rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    }
form{
    margin: 30px auto;
    padding: 10px;
    width: 500px;
    display: block;
    align-items: center;
    border: 2px;
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgb(87, 86, 88);
}    
form input{
    width: 100%;
    padding: 10px;
    margin: 5px 0px;
    box-sizing: border-box;
}
form input[type=button]{
    width: 70%;
    display: block;
    margin: 5px auto;
    background-color: #C7B9FF;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    color: rgb(59, 59, 59);
}
`
export default Wrapper