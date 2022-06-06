import React, { useContext } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Confetti from 'react-confetti'
import {EnglishContext}  from '../context/EnglishContext';

export default function Result() {
  
  
  return (
      <>
      <Confetti/>
     <h1 class="tebrik">CONGRATULATIONS </h1>
     <span class="tebrikicon"><CheckCircleIcon fontSize='600px'/></span>
      </>
    
  )
}