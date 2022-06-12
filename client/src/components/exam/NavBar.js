import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {

    const [user, setUser] = useState(true)

    return (
        <nav className="navbar navbar-light">
            <div class="container-fluid d-flex flex-row">
                <Link to="/exam" className='m-2 link'>
                     EXAM APP
                </Link>
                {user ? <Link to="" onClick={() => setUser(!user)} className='m-2 link'>
                    LOG OUT
                </Link>
                    : <Link to="" onClick={() => setUser(!user)} className='m-2 link'>
                         LOGIN
                    </Link>}
            </div>
        </nav >


    )
}
