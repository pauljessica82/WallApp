import React, { useState } from "react";
import "./CreatePost.css"
import "./Button"
import Button from "./Button";



const CreatePost = ({ user }) => {
    const [caption, setCaption] = useState("");
/*    const[user, setUser] = useState(null)*/

    return (
        <div className="app__createPost">
            <div>
            <div className="createAPost__Top">
                <p><strong>Create a Post</strong></p>
            </div>
            {/* <progress value={progress} max="100" /> */}
            
            <div className="createAPost__center">
                <textarea
                    className="createAPost__textarea"
                    name="create a post"
                        
                    rows="3"
                    value={caption}
                    placeholder="Enter a caption..."
                    onChange={(e) => setCaption(e.target.value)}
                >
                    </textarea>
                </div>
                <center>
                <button
                    className="button"
                    style={{
                        color: caption ? "black" : "lightgrey",
                        fontWeight: caption ? "600" : "500",
                    }}
                >
                    Post
                </button>
            </center>
            </div>
        </div>
    )


}

export default CreatePost;
    
 