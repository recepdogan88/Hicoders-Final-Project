import React from 'react'
import NavBar from '../components/exam/NavBar'
import { EnglishContext } from '../context/EnglishContext';
import { useContext } from 'react'

export default function Home() {

    const { user } = useContext(EnglishContext)
    console.log(user)
    return (
        <div>
            
            <NavBar />
            <h1>WELCOME</h1>
        </div>
    )
}
