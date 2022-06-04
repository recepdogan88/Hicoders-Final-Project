import React from 'react'
import { createContext, useEffect, useState } from 'react';

export const EnglishContext = createContext();

export default function EnglishContextProvider(props) {

  const [data,setdata]=useState(null)

  useEffect(() => {
    getData()
 },[]);
 
  async function getData(){
    const response=await axios.get("http://localhost:5000/questions")
    setdata(response.data)
    console.log(response.data)
  }

  return (
    <EnglishContext.Provider
      value={{ data }}
    >
      {props.children}
    </EnglishContext.Provider>
  )
}
