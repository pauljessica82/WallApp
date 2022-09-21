import React, { useState, useEffect } from 'react'
import { config } from '../config'
import Feed from '../components/Feed'


const HomePage = () => {
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


    return (
        <>
        <section>
            <h1>Welcome to WallShare! Login or Signup to start posting. </h1>
            </section>
            <Feed posts={posts} />
        </>
    )
};

export default HomePage;