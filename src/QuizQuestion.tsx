import React, {useState, useEffect} from 'react';
import LeftSideBar from './LeftSideBar'



function QuizQuestion({quiz}) {

    return(

<div className="pt-4 pl-3 bg-white border border-strong shadow-md ml-4">
    <h3 className="text-black text-md font-bold mb-1 mr-1 bg-yellow-400"> #{quiz.question} </h3>
    <h3 className="text-black text-md font-bold mb-1 mr-3"> {quiz.incorrect_answers[0]} </h3>
    <h3 className="text-black text-md font-bold mb-1 mr-3"> {quiz.incorrect_answers[2]} </h3>
    <h3 className="text-black text-md font-bold mb-1 mr-3"> {quiz.incorrect_answers[1]} </h3>
    <h3 className="text-black text-md font-bold mb-1 bg-green-300"> {quiz.correct_answer} </h3>
    </div>

    )
}


export default QuizQuestion;