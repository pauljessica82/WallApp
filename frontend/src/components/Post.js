import { FaRocketchat } from 'react-icons/fa'

const Post = ({ post }) => {
    return (
        <div className={`post`}>
            <h3>Hello World
                < FaRocketchat style={{
                    color:
                        'blue', cursor: 'pointer'
                }}
                
                />
            </ h3>
            <h6>
                Posted By: Jessica
            </h6>
            <p>
                This is my post
            </p>
        </div>
    )
}

export default Post