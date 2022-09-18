import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';

import HomeHeader from './components/HomeHeader';
import LoginRegNavbar from './components/LoginRegNavbar';
import AddUser from './components/AddUser';
import LoginForm from './components/LoginForm';
import Post from './components/Post';
import Footer from './components/Footer';
import Button from './components/Button';
import Modal from './components/Modal';

const App = () => {
    const [showLoginForm, setShowLoginForm] = useState(true)
    const [showSignUpForm, setShowSignUpForm] = useState(true)
    const [posts, setPosts] = useState([])


    const addUser = () => {
        return (
            console.log("User added")
        )
    }

     const loginUser = () => {
        return (
            console.log("Logging in....")
        )
    }

    return (
        <Router>
            <div>
              
                <HomeHeader
                    onLogin={() => setShowLoginForm(!showLoginForm) && setShowSignUpForm(true)} showLogin={showLoginForm}
                    onSignUp={() => setShowSignUpForm(!showSignUpForm) && setShowLoginForm(true)} showSignUp={showSignUpForm} />

                <LoginForm showLoginForm={showLoginForm} onUserLogin={addUser} setShowLoginForm={setShowLoginForm} />
               
                {/*  <div className="container">
                   <AddUser/>
                    <LoginForm/>
                 </div> */}
               
                <Routes>
                    <Route path='/' exact element={(
                        <>
                            <AddUser showSignUpForm={showSignUpForm} setShowSignUpForm={setShowSignUpForm} />
                            <AddUser showSignUpForm={showSignUpForm} setShowSignUpForm={setShowSignUpForm} />

                            </>
                    )}
                    />


                </Routes>
                <br /> <br />
                <div className="container">
                    <header>
                        <h2>Check out the Latest Posts </h2>
                    </header>

                </div>

                <Footer />
            </div>
        </Router>
  );
}

export default App;
