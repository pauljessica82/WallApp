import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ onUserLogin, showLoginForm }) => {

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

        /*route user to dashboard*/

    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                 <div className="titleCloseBtn">
                    <button> X </button>
                </div>
                <div className="title">
                    <h1> Login </h1>
                </div>
                <div className="body">
                    <form className='add-form'  onSubmit={onSubmit} >

                        <div className='form-control'>
                           
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

                        <input type='submit' value='Login' className='form-button' />

                    </form>
                  

                </div>
                <div className="footer">
                </div>
            </div>
        </div>
        
        )
}

export default Modal; 