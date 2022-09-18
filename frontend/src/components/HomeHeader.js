import PropTypes from 'prop-types'
import Button from './Button'
import { Link } from 'react-router-dom'

/*onlogin and on show will bring up these elemnts. the show login and showsignup will be used as conditional checks*/

const HomeHeader = ({ onLogin, onSignUp }) => {
    return (
        <div>
        <div className ="navbar">
            
                <Link to="/">
                <h3>
                    WallShare
                    </h3>
                </Link>
                <span >
                    <Link to='/login'>
                    <Button text="Login" color="steelblue" onClick={onLogin} left_percent="78% " />
                    </Link>
                    <Link to='/register'>
                        <Button text="Sign Up" color="limegreen" onClick={onSignUp} left_percent="85%" />
                        </Link>
                </span>
            </div>
            </div>
        
    )
}

export default HomeHeader