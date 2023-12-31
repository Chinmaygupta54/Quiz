import { styled } from "styled-components";

const Wrapper = styled.section`
margin:auto;
width: fit-content;
align-items:center;

.signinContainer{
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
        padding: 20px;
        display: flex;
        flex-direction: column;
        box-sizing: content-box;
        background-color: #DBD2E0;
        max-width: 500px;
    min-width: 240px;
}
        
     input{
        width: 88%;
        padding: 10px;
        box-sizing: border-box;
        margin: 13px 20px;
        border-radius: 2px;
    }
     h2{
        color: black;
        padding: 5px auto;
        text-align: center;
    }
    select {
        padding: 9px;
        border-radius: 5px;
        margin: auto;
    width: 70%;
    }
    .Button {
        width: 60%;
    }
     .Button{
        width: 40%;
        margin: auto;
        border-radius: 2px;
        display: block;
        font-size: 1.1rem;
        justify-content: center;
        color: white;
    background-color: #AA4465;
    }
    input[type="button"] {
        width: 94px;
        background-color: #AA4465;
        color: white;
        margin : 10px auto;
        border-radius:5px;
    }
    }
}

`
export default Wrapper