import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'
import AuthLoginButton from '../../pages/AuthLoginButton';
import AuthLogoutButton from '../../pages/AuthLogoutButton';


export default function NavBar() {


    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isAuthenticated) {
        console.log(user);
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
                <div className='mt-2 nav-ex '>
                <Link to="/information" className='link'>
                    Exam
                </Link>
                </div>
                {user ? <AuthLogoutButton />
                    : <AuthLoginButton />
                }
                {isAuthenticated && (
                    <div className='d-flex'>
                        <img src={user.picture} alt={"."} className="rounded-circle profil-picture m-2"/>
                        <h5 className='mt-4'>WELCOME {user.name}</h5>
                    </div>
                )}
                </div>
                
            </div>
        </nav >


    )
}
