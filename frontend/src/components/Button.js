import PropTypes from 'prop-types'


const Button = ({ color, text, left_percent, onClick }) => {
    return <button onClick={onClick} style={{ backgroundColor: color, left: left_percent }}
        className='btn'  >
        {text}
    </button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button