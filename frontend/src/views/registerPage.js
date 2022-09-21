import React, { useState, useContext } from 'react'
import LoginRegNavbar from '../components/LoginRegNavbar';
import AuthContext from "../context/AuthContext";

const RegisterPage = () => {
    const [first_name, setFname] = useState('')
    const [last_name, setLname] = useState('')
    const [username, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const { registerUser } = useContext(AuthContext)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!username) {
            alert("Please enter a email in the username field")
            return
        }

        if (password !== confirmpassword) {
            alert("Passwords do not Match!")
            return
        }

        registerUser(first_name, last_name, username, password)
        setFname('')
        setLname('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')

    }

    return (


        <div className="modalBackground">
            <div className="modalContainer-register">
                <form className='add-form' onSubmit={onSubmit}>
                    <div className='form-control'>
                        < LoginRegNavbar title="Register" />
                        <label>First Name</label>
                        <input type='text' placeholder='First Name'
                            value={first_name}
                            onChange={(e) => setFname(e.target.value)} />
                    </div>

                    <div className='form-control'>
                        <label>Last Name</label>
                        <input type='text' placeholder='First Name'
                            value={last_name}
                            onChange={(e) => setLname(e.target.value)} />
                    </div>

                    <div className='form-control'>
                        <label> Email </label>
                        <input type='text' placeholder='Email'
                            value={username}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='form-control'>
                        <label>Password </label>
                        <input type='text' placeholder='Enter Password 8 characters or above'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className='form-control'>
                        <label>Confirm Password</label>
                        <input type='text' placeholder='Re-enter Password'
                            value={confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="footer">
                        <input type='submit' value='Create Account' className='form-button' />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default RegisterPage
