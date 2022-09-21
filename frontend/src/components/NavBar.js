import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Button from './Button'
import { Link } from 'react-router-dom'

/*onlogin and on show will bring up these elemnts. the show login and showsignup will be used as conditional checks*/

const NavBar = () => {

    const { user, logoutUser } = useContext(AuthContext)

    return (
        <div>
        <div className ="navbar">
            
                <Link to="/">
                <h3>
                    WallShare
                    </h3>
                </Link>

                <span >
                    {user ? (

                        <Button text="Logout" color="red" onClick={logoutUser} left_percent="78% " />
                     
                    ) : (  
                            <>
                            <Link to='/login'>
                                <Button text="Login" color="steelblue" left_percent="78% " />
                            </Link>
                    <Link to='/register'>
                                    <Button text="Sign Up" color="limegreen" left_percent="85%" />
                    </Link>
                        </>
                            )}
                </span>
            </div>
        </div>
        
    )
}

export default NavBar