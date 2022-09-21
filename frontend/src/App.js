import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RegisterPage from './views/registerPage';
import LoginPage from './views/loginPage';
import FeedPage from './views/ProtectedPage';
import HomePage from './views/homePage';



const App = () => {
   
    return (
        <Router>
            <div className="flex flex-col min-h-screen overflow-hidden">
                <AuthProvider>
                    <NavBar />
                    <Routes>
                    
                        <Route exact path='/feed' element={<PrivateRoute />}>
                            <Route exact path='/feed' element={<FeedPage />} />
                        </Route>
                        
                    
                        <Route exact path='/' element={<HomePage />}>
                        </Route>

                        <Route exact path='/register' element={<RegisterPage />}>
                        </Route>
                    
                    
                        <Route exact path='/login' element={<LoginPage />}>
                        </Route>
                        
                        </Routes>
                </AuthProvider>
                <Footer />
            </div>
        </Router>
      
  )
}

export default App;
