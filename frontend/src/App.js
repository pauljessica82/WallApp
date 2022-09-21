import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeHeader from './components/HomeHeader';
import LoginRegNavbar from './components/LoginRegNavbar';
import AddUser from './components/AddUser';
import LoginForm from './components/LoginForm';
import Post from './components/Post';
import Footer from './components/Footer';
import CreatePost from './components/CreatePost';
import { config, detailRoute } from './config'
import axios  from 'axios';


const App = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const postsFromServer = await fetchPosts()
            setPosts(postsFromServer)
        }

        getPosts()
    }, [])

    const fetchPosts = async () => {
        const res = await fetch(config.url.BASE_API)
        const data = await res.json()

        return data
    }

    const addUser = () => {
        return (
            console.log("User added")
        )
    }

/*    const addPost = async (post) => {

    console.log(post)
       *//* console.log(JSON.stringify({ caption: post.caption, ima }))*//*
        const res = await fetch(config.url.BASE_API, {

            method: 'POST',
            headers: {
            
               'Content-Type' : 'multipart/form-data',
            },

            body: JSON.stringify(post )
        })

        const data = await res.json()
        
        setPosts([...posts, data]) 
        }                     */


    const addPost = async (newPost) => {
        const url = config.url.BASE_API;
        axios.post(url, newPost, {
            headers: {

                'Content-Type': 'multipart/form-data',
            }
        })
            .then(res => {
                console.log(res.data);
            })
        .catch(err => console.log(err))
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
                        <div id="backgroundimage">
                            
                        </div>
                  <>
                            <header>
                                <h2>Check out the Latest Posts </h2>
                            </header>
                           
                        </>
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
                <Route path="/feed" exact element={<CreatePost onAddPost={addPost} />} />

                </Routes>
            

                <Footer />
 
        </Router>
  );
}

export default App;
