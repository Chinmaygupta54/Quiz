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
    width: 100%;
    max-width: 500px;
    min-width:240px;
    background-color: #DBD2E0;
    display: block;
    align-items: center;
    border: 2px;
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgb(87, 86, 88);
}
input{
    width: 49%;
    padding: 10px;
    margin: 5px 0px;
    box-sizing: border-box;
}    
form input{
    width: 70%;
    min-width: 200px;
    padding: 10px;
    margin: 5px 0px;
    box-sizing: border-box;
}
form select{
    width: 60%;
    padding: 10px;
    margin: 5px 0px;
}
form input[type=button]{
    width: 40%;
    display: block;
    min-width: fit-content;
    margin: 5px auto;
    background-color: #AA4465;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    color: white;
    
}
div{
    width: 100%;


input[type=button]{
    width: 20%;
    display: block;
    min-width: fit-content;
    margin: 5px auto;
    background-color: #AA4465;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    color: white;
}
}
`
export default Wrapper