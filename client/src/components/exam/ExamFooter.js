import React from 'react'
import { useContext } from 'react'
import { EnglishContext } from '../../context/EnglishContext';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function ExamFooter() {

    const { currentAnswer,setCurrentAnswer,next, setNext, setScore,newdata} = useContext(EnglishContext)
    let navigate = useNavigate();
    

    //in order to display previous question
    function previousQuestion() {
        setNext(next => next - 1);
    }

    //in order to display next question
    function nextQuestion() {
        if (!currentAnswer) return swal('PLEASE CHOOSE ONE OPTION')
        if (currentAnswer === newdata[next].answer) setScore(prev => prev + 1)
        if (next + 1 >= newdata.length) return navigate("/result");
        setNext(next => next + 1);
        setCurrentAnswer(null)
    }
    return (
        <div className='d-flex justify-content-between mt-5'>
            <button type="button" style={{ width: "140px", height: "60px" }} onClick={previousQuestion} class="btn btn-danger m-5 button1">PREVIOUS</button>
            <button type="button" style={{ width: "140px", height: "60px" }} onClick={nextQuestion} class="btn btn-info m-5 button1">NEXT</button>
        </div>
    )
}
