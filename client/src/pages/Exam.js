import ExamUpper from '../components/exam/ExamUpper'
import ExamMain from '../components/exam/ExamMain'
import ExamFooter from '../components/exam/ExamFooter'
import { useContext } from 'react'
import { EnglishContext } from '../context/EnglishContext'
import { useEffect } from 'react'
import NavBar from '../components/exam/NavBar'
import "./css/Exam.css"




export default function Exam() {

  const { user, next } = useContext(EnglishContext)

  useEffect(() => {
    window.localStorage.setItem('next', JSON.stringify(next));
  }, [next]);

  console.log(user)


  return (
    <>
      <NavBar/>
      <div className='main-exam'>
        <div className='d-flex'>
          <div className='exam d-flex flex-column col-6 mt-4'>
            <ExamUpper />
            <hr className='mb-5'></hr>
            <ExamMain />
            <ExamFooter />
          </div>
        </div>
      </div>
    </>

  )
}

