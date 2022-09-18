import React, { useState } from 'react'
import LoginRegNavbar from './LoginRegNavbar';


const AddUser = ({ onAdd, showSignUpForm, setShowSignUpForm }) => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            alert("Please enter a email")
            return
        }

        if (password != confirmpassword) {
            alert("Passwords do not Match!")
            return
        }
        onAdd({ fname, lname, email, password, confirmpassword })

        /*route user to dashboard*/

    }

    return (

        <div className={`${showSignUpForm ? "active" : ""} show`}>
            <div className="modalBackground">
                <div className="modalContainer-register">
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                            < LoginRegNavbar title="Register" onClick={() => { setShowSignUpForm(true) }} />
                <label>First Name</label>
                <input type='text' placeholder='First Name'
                    value={fname}
                    onChange={(e) => setFname(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Last Name</label>
                <input type='text' placeholder='First Name'
                    value={lname}
                    onChange={(e) => setLname(e.target.value)} />
            </div>

            <div className='form-control'>
                <label> Email </label>
                <input type='text' placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Password </label>
                <input type='text' placeholder='Create Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Confirm Password</label>
                <input type='text' placeholder='Confirm Password'
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)} />
            </div>
                        <div className="footer">
            <input type='submit' value='Create Account' className='form-button' />
                        </div>
            </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser
