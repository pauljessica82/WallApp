import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Button from './Button'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const { user, logoutUser } = useContext(AuthContext)

    return (
        <div>
        <div className ="navbar">

                { !user ? (
                    <Link to="/">
                        <h3>
                            WallShare
                        </h3>
                    </Link>) :  (
                        <Link to="/feed">
                            <h3>
                                WallShare
                        </h3>
                    </Link> )}
                            
                <span >
                    {user ? (

                        <Button text="Logout" color="crimson" onClick={logoutUser} left_percent="78% " />
                     
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