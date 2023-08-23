import { styled } from "styled-components";

const Wrapper = styled.section`
margin:auto;
width: fit-content;
align-items:center;

.loginContainer{
padding: 1.8rem;
margin-top: 3rem;
display: flex;
justify-content: space-evenly;


    form{
        border: 2px;
        width : 100%;
        margin : auto;
        border-radius: 5px;
        text-align: center;
        box-shadow: 2px 2px 3px grey;
        padding: 35px 90px;
        display: flex;
        flex-direction: column;
        box-sizing: content-box;
        background-color: #DBD2E0;
}
        
     input{
        width: 105%;
        padding: 10px;
        box-sizing: border-box;
        margin: 10px auto;
    }
     h2{
        color: black;
        padding: 5px auto;
        text-align: center;
    }
    .Button {
        width: 60%;
    }
     .Button{
        width: 50%;
        margin: auto;
        border-radius: 2px;
        display: block;
        font-size: 1.1rem;
        justify-content: center;
        color: white;
    background-color: #AA4465;
    }
    p{
        padding: 5px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 
        'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    span{
        cursor: pointer;
        color: brown;
         margin: 2px; 
    }
    }
}

`
export default Wrapper