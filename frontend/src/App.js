import logo from './logo.svg';
import './App.css';
import HomeHeader from './components/HomeHeader';
import LoginRegNavbar from './components/LoginRegNavbar';
import AddUser from './components/AddUser';
import LoginForm from './components/LoginForm';
import Post from './components/Post';

const App = () => {
    return (

    <div className="App">
          <HomeHeader />
         {/*   <div className="container">
              <AddUser/>
                <LoginForm/>
             </div>*/}
            
        <div className="container">
            <Post/>

            </div>
        </div>
  );
}

export default App;
