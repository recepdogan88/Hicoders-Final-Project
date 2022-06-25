import React from 'react'
import { createContext, useEffect, useState } from 'react';


export const EnglishContext = createContext();

export default function EnglishContextProvider(props) {

  const [newdata, setNewdata] = useState("")
  const [score, setScore] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState(null)
  const [next, setNext] = useState(0); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    getData()
    let nexty=JSON.parse(localStorage.getItem('next'));
    if(nexty){
      setNext(nexty)
    }
    
  }, []);

  

  useEffect(()=> {
    const savedUser = JSON.parse(localStorage.getItem('user')); 
    if(savedUser) setUser(savedUser)
  }, [])

  
  async function getData() {
    const response = await fetch('http://localhost:5000/questions')
    const data = await response.json()
    console.log(data)
    setNewdata(data)
  }

  return (
    <EnglishContext.Provider
      value={{ newdata,setNewdata, score, setScore,currentAnswer, setCurrentAnswer,next,setNext, user, setUser}}
    >
      {props.children}
    </EnglishContext.Provider>
  )
}
