import React, { useContext } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Confetti from 'react-confetti'
import { EnglishContext } from '../context/EnglishContext';
import "./css/Result.css"
import NavBar from '../components/exam/NavBar';

export default function Result() {

  const { score } = useContext(EnglishContext)

  return (
      <>
      <Confetti />
      <NavBar/>
      <div className='tebrik'>
      <div className='score'>
          <div class="congrat">CONGRATULATIONS</div>
          <div class="icon"><CheckCircleIcon fontSize='600px' /></div>
          <div className='point'>SCORE : {score}</div>
        </div>
      </div>
        
      </>
        
     
    

  )
}