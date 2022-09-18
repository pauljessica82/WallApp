import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Modal.css'

const LoginRegNavbar = ({ title }) => {
 

    return (
        <header className='header' >

            <h1> {title} </h1> <div className="titleCloseBtn">
                <Link to="/">
                    < FaTimes style={{
                        color:
                            'red', cursor: 'pointer'
                    }}
                        
                    />
                   
                    </Link>
            </div>
        </header>
    )
}

LoginRegNavbar.defaultProps = {
    title: 'Register',
}

LoginRegNavbar.propTypes = {
    title: PropTypes.string.isRequired,
    onLoggingin: PropTypes.func
}

export default LoginRegNavbar