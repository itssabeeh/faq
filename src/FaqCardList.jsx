import React,{useState} from 'react'
import data from './data'
import FaqCard from './FaqCard'

const FaqCardList = () => {
    const [questions, setQuestions] = useState(data);
    return (
        <div className="container">
            <h1 className="left-div">Questions and Answers about login</h1>
            <div className="right-div">
            {questions.map((question)=>{
                return <FaqCard key={question.id} {...question} />
            })}
            </div>
        </div>
    )
}

export default FaqCardList
