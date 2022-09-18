import PropTypes from 'prop-types'
import './Modal.css'

const LoginRegNavbar = ({ title, onClick }) => {
 

    return (
        <header className='header' >
            <h1> {title} </h1> <div className="titleCloseBtn">
                <button onClick={onClick} className="titleCloseBtn"> X </button>
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