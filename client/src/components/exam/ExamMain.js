import React from 'react'
import { useContext } from 'react'
import { EnglishContext } from '../../context/EnglishContext';
import { useEffect } from 'react'

export default function ExamMain() {
    const { newdata, next, setCurrentAnswer } = useContext(EnglishContext)

    useEffect(() => {
        Array.from(document.querySelectorAll("input[type='radio']")).forEach(item => item.checked = false)
    }, [next])

    if (!newdata) {
        return <p>Loading...</p>
    }

    let options = Object.keys(newdata[next]).filter(key => key.includes('option'));
    options = options.map(key => newdata[next][key]);

    return (
        <div className='d-flex flex-column col-8 m-5'>
            <div>
                <div className='question ms-5' dangerouslySetInnerHTML={{ __html: newdata[next].question }} />
            </div>
            {options.map((option, index) => (
                <div key={index} className='d-flex flex-row'>
                    <input style={{ width: "20px", height: "20px" }} className='radio m-3 justify-content-evenly' id={option} type="radio" name="option" value={option} onChange={(e) => setCurrentAnswer(e.target.value)} />
                    <label className='question ps-3' htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    )
}
