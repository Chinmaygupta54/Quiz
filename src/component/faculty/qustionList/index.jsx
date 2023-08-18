import React from 'react'

const QuestionList = ({questionList}) => {
  return (
    <div>
      {
        questionList.map((quest) => <div>
            <div>
               Question = {quest.question}
            </div>
            <div>
               Option A = {quest.optionA}
            </div>
            <div>
               Option B = {quest.optionB}
            </div>
            <div>
               Option C = {quest.optionC}
            </div>
            <div>
               Option D = {quest.optionD}
            </div>
        </div>)
        }
    </div>
  )
}

export default QuestionList
