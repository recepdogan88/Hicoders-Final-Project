import React from 'react'
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const EnglishContext = createContext();

export default function EnglishContextProvider(props) {

  const [newdata, setNewdata] = useState("")
  const [score, setScore] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState(null)
  const [next, setNext] = useState(0)

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    const response = await fetch('http://localhost:5000/questions')
    const data = await response.json()
    setNewdata(data)
  }
  return (
    <EnglishContext.Provider
      value={{ newdata, score, setScore,currentAnswer, setCurrentAnswer,next,setNext}}
    >
      {props.children}
    </EnglishContext.Provider>
  )
}
