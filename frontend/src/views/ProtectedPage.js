import Feed from "../components/Feed"
import CreatePost from "../components/CreatePost"
import useAxios from "../utils/useAxios";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import UserInfo from "../components/UserInfo";
import axios from "axios";
import { config } from '../config'
import Header from "../components/Header";

const FeedPage = () => {

    const { user } = useContext(AuthContext)
    const api = useAxios()
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


    const addPost = async (newPost) => {
        const url = config.url.BASE_API;
        axios.post(url, newPost, {
            headers: {

                'Content-Type': 'multipart/form-data',
            }
        })
            .then(res => {
               
                console.log(res.request.status);
                const data = res.data
                setPosts([...posts,data])
                
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div id="backgroundimage-user">
            </div>
                    <Header/>
            < CreatePost onAddPost={addPost} />
            <br/>
          <Feed posts={posts}/> 
        </>

    )
}

export default FeedPage; 