import React, { useState, useContext } from 'react'
import LoginRegNavbar from '../components/LoginRegNavbar';
import '../components/Modal.css'
import AuthContext from "../context/AuthContext";


const LoginPage= () => {

    const { loginUser } = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (!username) {
            alert("Please enter a username!")
            return
        }
        if (!password) {
            alert("Please enter a password")
            return
        }

        loginUser(username, password)
        setUsername('')
        setPassword('')

    }

    return (

        <div className="modalBackground">
            <div className="modalContainer">
                <form className='add-form' background-color="limegreen" onSubmit={onSubmit} >
                    <div className='form-control'>
                        < LoginRegNavbar title="Login" />
                        <label>Username </label>
                        <input type='text' placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='form-control'>
                        <label>Password </label>
                        <input type='password' placeholder='Password'
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

export default LoginPage
