import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeHeader from './components/HomeHeader';
import LoginRegNavbar from './components/LoginRegNavbar';
import AddUser from './components/AddUser';
import LoginForm from './components/LoginForm';
import Post from './components/Post';
import Footer from './components/Footer';
import CreatePost from './components/CreatePost';


const App = () => {
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
                        <br /> <br />
                        <div className="container">
                            <header>
                                <h2>Check out the Latest Posts </h2>
                            </header>
                           
                        </div>
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
                <Route path="/feed" exact element={<CreatePost />} />

                </Routes>
            

                <Footer />
 
        </Router>
  );
}

export default App;
