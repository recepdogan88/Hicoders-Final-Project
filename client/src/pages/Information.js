import React from 'react'
import { useNavigate} from "react-router-dom";
import "./css/Information.css"

export default function Information() {

    let navigate = useNavigate();
    function changePage(){
      navigate("/exam")
    }
    
  return (
    <div className='information'>
      <h1>INFORMATION PAGE</h1>
      <button type="button" onClick={changePage} class="btn btn-outline-primary btn-lg m-5">START THE EXAM</button>
    </div>
  )
}
