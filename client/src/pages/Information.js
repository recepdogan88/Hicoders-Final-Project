import React from 'react'
import { useNavigate } from "react-router-dom";
import "./css/Information.css"
import NavBar from '../components/exam/NavBar';

export default function Information() {

  let navigate = useNavigate();
  
  
  return (
    <>
    <NavBar/>
     <div className='container1'>
      <div className='information d-flex flex-column align-items-center'>
        <h1 className='title-information'>INFORMATION PAGE</h1>
        <button type="button"  onClick={()=> navigate("/exam")} class="btn btn-outline-primary fs-3 start">START THE EXAM</button>
      </div>
    </div>
    </>
   

  )
}
