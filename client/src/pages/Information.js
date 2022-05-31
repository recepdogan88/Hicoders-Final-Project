import React from 'react'
import { useNavigate} from "react-router-dom";

export default function Information() {

    let navigate = useNavigate();
    function changePage(){
      navigate("/exam")
    }
    
  return (
    <div>
        <button style={{width: '80px'}} onClick={changePage}>GO TO PAGE</button>
    </div>
  )
}
