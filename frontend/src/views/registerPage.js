import React, { useState, useContext } from 'react'
import LoginRegNavbar from '../components/LoginRegNavbar';
import AuthContext from "../context/AuthContext";

const RegisterPage = () => {
    const [first_name, setFname] = useState('')
    const [last_name, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const { registerUser } = useContext(AuthContext)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            alert("Please enter a an email!")
            return
        }

        if (password !== confirmpassword) {
            alert("Passwords do not Match!")
            return
        }

        registerUser(first_name, last_name, email, username, password)

        setFname('')
        setLname('')
        setEmail('')
        setUsername('')
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='form-control'>
                        <label> Username </label>
                        <input type='text' placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className='form-control'>
                        <label>Password </label>
                        <input type='password' placeholder='8 characters or more'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className='form-control'>
                        <label>Confirm Password</label>
                        <input type='password' placeholder='Re-enter Password'
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
