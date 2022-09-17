import PropTypes from 'prop-types'

const LoginRegNavbar = ({ title }) => {
 

    return (
        <header className='header' >
            <h1> {title} </h1>
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