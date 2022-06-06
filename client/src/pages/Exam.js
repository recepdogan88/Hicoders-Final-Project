import React, { useEffect } from 'react'
import { useState } from "react"
import { EnglishContext } from '../context/EnglishContext'
import { useContext } from 'react'



export default function Exam() {

  const { newdata, score, setScore } = useContext(EnglishContext)
  const [next, setNext] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState(null)
  console.log(newdata)

  function nextQuestion() {
    if(!currentAnswer) return alert('please choose one option')
    if(currentAnswer === newdata[next].answer) setScore(prev => prev + 1)
    if(next + 1 >= newdata.length ) return;
    setNext(next => next + 1); 
    setCurrentAnswer(null)
  }

  useEffect(()=>{
   Array.from(document.querySelectorAll("input[type='radio']")).forEach(item => item.checked = false)
  }, [next])

  if(!newdata) {
    return <p>Loading...</p>
  }

  let options = Object.keys(newdata[next]).filter(key => key.includes('option')); 
  options = options.map(key => newdata[next][key]); 


  return (

    <React.Fragment>
      <div className='d-flex flex-column col-7 mt-5'>
        <div className='question' dangerouslySetInnerHTML={{__html: newdata[next].question}}/>
      
     {options.map(option => (
     <>
        <input className='question m-3' id={option} type="radio" name="option" value={option} onChange={(e)=> setCurrentAnswer(e.target.value)} />
        <label htmlFor={option}>{option}</label>
     </>
     )
     )} 
        <div>
          <button type="button" onClick={nextQuestion} class="btn btn-primary btn-lg m-5">NEXT</button>
        </div>
        <p className='m-5 display-3'>QUESTION NUMBER  :{next}</p>
        <p className='m-5 display-3'>SCORE :{score}</p>
      </div>
    </React.Fragment>
  )
}
/*
let minuten = 3
  const time = new Date();
  time.setSeconds(time.getSeconds() + (minuten * 60)); // 10 minutes timer
  <div>
      {data?.map((q, index) => (
        <div key={index}>
          <div className='m-3 fw-bold'>{q.question}</div>
          <div className="form-check">
            <input class="form-check-input" className="m-5" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" className="" for="flexCheckDefault">
              {q.option1}
            </label>
            <input class="form-check-input"className="m-5"  type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              {q.option2}
            </label>
            <input class="form-check-input"className="m-5"  type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              {q.option3}
            </label>
            <input class="form-check-input"className="m-5"  type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              {q.option4}
            </label>
          </div>
           </div>
        </div>
      ))}
*/
//<MyTimer expiryTimestamp={time} />