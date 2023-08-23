 import { styled } from "styled-components"
const Wrapper = styled.nav`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-decoration: none;
    h1 a{
        text-decoration: none;
        color : black;
    }
    ul{
        list-style: none;
        display: flex;
        text-decoration: none;
        li{
            padding: 5px 20px;
            margin : 5px;
            text-decoration: none;
        }
        a {
            text-decoration: none;
        }
        li:hover{
            background-color: rgb(166, 166, 247);
            color: black;
            border-radius: 5px;
            box-shadow: 2px 2px 5px gray;
            transition: 0.3s;
            text-decoration: none;
        }
    }    
`
export default Wrapper
