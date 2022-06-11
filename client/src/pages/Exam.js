import ExamUpper from '../components/exam/ExamUpper'
import ExamMain from '../components/exam/ExamMain'
import ExamFooter from '../components/exam/ExamFooter'
import "./css/Exam.css"
import { useContext } from 'react'
import { EnglishContext } from '../context/EnglishContext'
import { useEffect } from 'react'



export default function Exam() {

  const { setNext, next } = useContext(EnglishContext)

  useEffect(() => {
   window.localStorage.setItem('next', JSON.stringify(next));
}, [next]);



  return (
    <div className='main-exam row'>
      <div className='row exam d-flex flex-column col-6'>
        <ExamUpper/>
         <hr className='mb-5'></hr>
         <ExamMain/>
         <ExamFooter/>
      </div>
    </div>
  )
}

//<MyTimer expiryTimestamp={time} />