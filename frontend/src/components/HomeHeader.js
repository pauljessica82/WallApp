import PropTypes from 'prop-types'
import Button from './Button'

/*onlogin and on show will bring up these elemnts. the show login and showsignup will be used as conditional checks*/

const HomeHeader = ({ onLogin, onSignUp, showLogin, showSignUp }) => {
    return (
        <div>
            <header>
                <img src="/wallappLogo.png" alt="WallApp"></img>
                          
            </header>
            
            <h2> Share messages with friends and family all over the world!
            </h2>
           <br/>
            <Button text="Login" color="steelblue" onClick={onLogin} />
            <Button text="Sign Up" color="limegreen" onClick={onSignUp} />
        </div>
    )
}

export default HomeHeader