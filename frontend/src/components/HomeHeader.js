import PropTypes from 'prop-types'
import Button from './Button'

/*onlogin and on show will bring up these elemnts. the show login and showsignup will be used as conditional checks*/

const HomeHeader = ({ onLogin, onSignUp }) => {
    return (
        <div>
        <div className ="navbar">
            

                <h3>
                    WallShare
                </h3>
            
                <span >
                    <Button text="Login" color="steelblue" onClick={onLogin} left_percent="78% "/>
                    <Button text="Sign Up" color="limegreen" onClick={onSignUp} left_percent="85%" />
                </span>
            </div>
            </div>
        
    )
}

export default HomeHeader