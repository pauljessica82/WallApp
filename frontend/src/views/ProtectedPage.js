import Feed from "../components/Feed"
import CreatePost from "../components/CreatePost"
import useAxios from "../utils/useAxios";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { config } from '../utils/config'
import Header from "../components/Header";


const FeedPage = () => {

    const api = useAxios()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/posts/")
                setPosts(response.data)
            }
            catch {
                setPosts("Something went wrong")
            }
        }
        fetchData();
    }, []);

    const addPost = async (post) => {
        api.post("/posts/", post, {
            headers: {

                'Content-Type': 'multipart/form-data',
            }
        })
            .then(res => {

                console.log(res.request.status);
                const data = res.data
                setPosts([...posts, data])

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
            <Feed posts={posts} />
        </>

    )
}

export default FeedPage; 