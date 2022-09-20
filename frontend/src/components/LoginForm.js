import React, { useState } from 'react'
import LoginRegNavbar from './LoginRegNavbar';
import './Modal.css'


const LoginForm = ({ onUserLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            alert("Please enter a email")
            return
        }
          if (!password) {
            alert("Please enter a password")
            return
        }


        onUserLogin({ email, password })
        setEmail('')
        setPassword('')

        /*route user to dashboard*/

    }

    return (
        
            <div className="modalBackground">
                <div className="modalContainer">
            <form className='add-form' background-color="limegreen" onSubmit={onSubmit} >
                        <div className='form-control'>
                            < LoginRegNavbar title="Login" />
                <label>Email </label>
                <input type='text' placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Password </label>
                <input type='text' placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
                        <div className="footer">
                    
                    <input type='submit' value='Login' className='form-button' />
                        </div>
                    </form>
                </div>
            </div>
    
    )
}

export default LoginForm
