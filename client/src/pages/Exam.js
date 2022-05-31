import React from 'react'
import { MyTimer } from '../components/exam/MyTimer'


export default function Exam() {
  
  let minuten=1
  const time = new Date();
  time.setSeconds(time.getSeconds() + (minuten*60)); // 10 minutes timer

  


  return (
   <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  )
}
