import React from 'react'
import { MyTimer } from './MyTimer';
import { useContext } from 'react'
import { EnglishContext } from '../../context/EnglishContext';


export default function () {

    const { newdata, next } = useContext(EnglishContext)
    const time = new Date();
    time.setSeconds(time.getSeconds() + (newdata.length * 60));

    if (!newdata) {
        return <p>Loading...</p>
    }

    return (
            <div className='d-flex flex-row justify-content-between m-3'>
                <h2 className='mt-2 ps-4'>{newdata[next].category.toUpperCase()}</h2>
                <MyTimer expiryTimestamp={time} />
            </div>
    )
}
