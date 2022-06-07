import React, { useContext } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Confetti from 'react-confetti'
import { EnglishContext } from '../context/EnglishContext';

export default function Result() {

  const { score } = useContext(EnglishContext)

  return (
    <div className='result w-100'>
      <Confetti />
      <div className='d-flex flex-column'>
      <h1 class="tebrik">CONGRATULATIONS</h1>
        <span class="tebrikicon"><CheckCircleIcon fontSize='600px' /></span>
        <h3>SCORE : {score}</h3>
      </div>

    </div>
  )
}