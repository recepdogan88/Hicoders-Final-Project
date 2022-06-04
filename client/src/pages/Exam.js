import React from 'react'

import {useState,useEffect} from "react"
import { EnglishContext } from '../context/EnglishContext'
import { useContext } from 'react'


export default function Exam() {

  const {data}=useContext(EnglishContext)
  const [score,setscore]=useState("")

  
  let minuten=3
  const time = new Date();
  time.setSeconds(time.getSeconds() + (minuten*60)); // 10 minutes timer

 console.log(data);
  return (
   <div>
      {data?.map((q,index) =>(
        <div key={index}>
          <div>{q.question}</div>
          {/* {q.Options?.map(optionObj => <input type="radio" name={q.question} value={optionObj.option}/>)} */}
          <div>{q.option1}</div>
          <div>{q.option2}</div>
          <div>{q.option3}</div>
          <div>{q.option4}</div>
          {/* <input type="radio" name="option" value={q.option1} />
          <input type="radio" name="option" value={q.option2} />
          <input type="radio" name="option" value={q.option3} />
          <input type="radio" name="option" value={q.option4} /> */}

        </div>
      ))}
    </div>
  )
}
//<MyTimer expiryTimestamp={time} />