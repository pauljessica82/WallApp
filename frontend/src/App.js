import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomeHeader from './components/HomeHeader';
import LoginRegNavbar from './components/LoginRegNavbar';
import AddUser from './components/AddUser';
import LoginForm from './components/LoginForm';
import Post from './components/Post';
import Footer from './components/Footer';

const App = () => {
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showSignUpForm, setShowSignUpForm] = useState(false)
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
            <div className="App">
                <HomeHeader
                    onLogin={() => setShowLoginForm(!showLoginForm)} showLogin={showLoginForm}
                    onSignUp={() => setShowSignUpForm(!showSignUpForm)} showSignUp={showSignUpForm} />
                {/*  <div className="container">
                   <AddUser/>
                    <LoginForm/>
                 </div> */}
                
                <Routes>
                    <Route path='/' exact element={(
                        <>
                            {showSignUpForm && <AddUser onAdd={addUser} />}
                            {showLoginForm && <LoginForm onUserLogin={loginUser} />}

                            </>
                    )}
                    />


                </Routes>
                <div className="container">
                    <header>
                        <h2>Check out the Latest Posts </h2>
                    </header>

                </div>

                <Footer/>
                </div>
        </Router>
  );
}

export default App;
