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
            <HomeHeader />
            <Routes>
              <Route path='/' exact element={(
                        <>
                     

                        </>
                    )}
                    />         
                    <Route path='/register' exact element={(
                    <>
                        <AddUser onAdd={addUser} />
                           
                        </>
                    )}
                    />
                      <Route path='/login' exact element={(
                    <>
                        <LoginForm onUserLogin={loginUser} />
                           
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
 
        </Router>
  );
}

export default App;
