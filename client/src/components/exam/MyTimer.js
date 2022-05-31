import React from 'react';
import { useTimer } from 'react-timer-hook';
import { useNavigate} from "react-router-dom";

export function MyTimer({ expiryTimestamp }) {
  let navigate = useNavigate();
  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  function navigatePage(){
    if(minutes==0&&seconds==0){
      navigate("/admin")
    }
  }
  navigatePage()

  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{fontSize: '50px'}}>
       <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}