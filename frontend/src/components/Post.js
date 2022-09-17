import { FaRocketchat } from 'react-icons/fa'

const Post = ({ post, user }) => {
    return (
        <div className={`post`}>
            <h3>< FaRocketchat style={{
                color:
                    'blue', cursor: 'pointer'
            }} /> {' '}
                Post By: {user.fname}{user.lname}
            </ h3>
            {' '}
            <h5> {post.date}</h5>
            <p>
                {post.body} 
            </p>
        </div>
    )
}

export default Post