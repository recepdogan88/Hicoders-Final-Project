import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { EnglishContext } from '../../context/EnglishContext';


export default function NavBar() {
    const { user, setUser,next,setNext } = useContext(EnglishContext)

    function handleLogout() {
        localStorage.removeItem('user');
        localStorage.removeItem('next');
        setUser(null)
        setNext(0)
    }

    return (
        <nav className="navbar navbar-light">
            <div class="container-fluid d-flex flex-row">
                <div>
                    <Link to="/" className='m-2 link'>
                        EXAM APP
                    </Link>
                </div>
                <div className='d-flex'>
                    {user && (
                        <div className='mt-2 nav-ex '>
                            <Link to="/information" className='link'>
                                Exam
                            </Link>
                        </div>
                    )}
                    {user?.role == "admin" && (
                        <div className='mt-2 nav-ex '>

                            <Link to="/admin" className='link'>
                                Admin
                            </Link>
                        </div>)
                    }
                    <div className='mt-2 nav-ex '>
                        <Link to="/" className='link'>
                            <button className='logout' onClick={handleLogout}>Logout</button>
                        </Link>
                    </div>
                </div>

            </div>
        </nav >


    )
}
