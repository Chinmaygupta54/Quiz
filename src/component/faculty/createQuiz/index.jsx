// import React, { useState } from 'react'
// import Wrapper from '../questionForm/style'
// import { useNavigate } from 'react-router'
// import axios from 'axios'

// const Create = () => {
//     const[title, setTitle] = useState("")
//     const[description ,setDescription] = useState("")
//     const navigate = useNavigate()

//     const addQuiz = (e) =>{
//       if(title && description){
//         e.preventDefault()
//         axios.post("https://quizattendace.onrender.com/api/quiz/add" ,{
//     title , description
//   }).then(res => {
//     console.log(res.data)
//     navigate("/questionForm")

//   }).catch(err => {console.log(err.message)}).finally(()=>{
//     console.log("finally is working")

//   })

//       }
//         navigate("/questionForm")

//     }
//   return (
//     <Wrapper>
//         <div className='createContainer'>
//         <form>
//         <h2>Create Quiz</h2>
//           <input
//               type = "text" 
//               placeholder='Title'   
//               value={title}
//               onChange={(e) => setTitle(e.target.value) }
//           />
//           <input
//               type='text'
//               placeholder = 'Description'
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//           />
        
//         <input
//             type = "button"
//             className='Button'
//             id = 'Add Question'
//             onClick={addQuiz} 
//         />
//         </form>
//         </div>



//     </Wrapper>
//   )
// }

// export default Create
