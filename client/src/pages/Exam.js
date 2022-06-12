import ExamUpper from '../components/exam/ExamUpper'
import ExamMain from '../components/exam/ExamMain'
import ExamFooter from '../components/exam/ExamFooter'
import "./css/Exam.css"
import { useContext } from 'react'
import { EnglishContext } from '../context/EnglishContext'
import { useEffect } from 'react'
import NavBar from '../components/exam/NavBar'



export default function Exam() {

  const { setNext, next } = useContext(EnglishContext)

  useEffect(() => {
   window.localStorage.setItem('next', JSON.stringify(next));
}, [next]);



  return (
    <>
    <NavBar/>
    <div className='main-exam row '>
      <div className='d-flex flex-column'>
      <div className='exam d-flex flex-column col-6 mt-4'>
        <ExamUpper/>
         <hr className='mb-5'></hr>
         <ExamMain/>
         <ExamFooter/>
      </div>
      </div>
    </div>
    </>
    
  )
}

//<MyTimer expiryTimestamp={time} />