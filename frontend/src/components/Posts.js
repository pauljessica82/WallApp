import Post from './Post'

const Posts = ({ posts }) => {

    return (
        posts.map((task, index) => (
            <Post key={index}
                post={post}
            
            ))
}

export default Posts