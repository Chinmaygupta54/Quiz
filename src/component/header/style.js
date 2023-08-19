 import { styled } from "styled-components"
const Wrapper = styled.nav`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    ul{
        list-style: none;
        display: flex;
        li{
            padding: 5px 20px;
            margin : 5px;
            text-decoration: none;
        }
        li:hover{
            background-color: rgb(166, 166, 247);
            color: black;
            border-radius: 5px;
            box-shadow: 2px 2px 5px gray;
            transition: 0.3s;

        }
    }    
`
export default Wrapper
