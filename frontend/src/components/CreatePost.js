import React, { useState, useEffect } from "react";
import "./CreatePost.css"
import "./Button"
import Button from "./Button";
import { FaCameraRetro, FaRegImages } from "react-icons/fa";



const CreatePost = ({  }) => {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState();
    const [preview, setPreview] = useState()


    const onSubmit = (e) => {
        e.preventDefault()
    }
        const imageChange = (e) => {
            if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files[0]);
              
            }
    }

    const removeSelectedImage = () => {
        setImage();

    };


        /*    onCreatePost({ caption, image })
            setCaption('')
            setImage('')*/

        /*    const[user, setUser] = useState(undefined)*/

    return (
            <form onSubmit={onSubmit}>
            <div className="app__createPost">
                <div className ="imageUpload">
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
                 
                        <div className="imagePreview">
                            {image && <img src={URL.createObjectURL(image)} onClick={() => removeSelectedImage()} id="image-1-preview" />}
                        </div>
                    </div>

                        <div className="imageUpload__bottom">
                            <div className="image-upload">
                                <label htmlFor="file-input">
                                    <FaRegImages style={{ marginTop: "5px" }} />
                                </label>

                                <input
                                    id="file-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={imageChange}
                                />
                                
                            </div>
                        

                        <button
                            type='submit'
                            className="button"
                            style={{
                                color: caption ? "black" : "lightgrey",
                                fontWeight: caption ? "600" : "500",
                            }}
                        >
                            Post
                            </button>
                    </div>
                </div>
                
            </div>

        </form>
        )
    }



    export default CreatePost;