import React, { useState } from "react";
import "./CreatePost.css"
import "./Button"
import { FaRegImages } from "react-icons/fa";



const CreatePost = ({ onAddPost  }) => {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState();

    const onSubmit = (e  ) => {
        e.preventDefault()

        const form_data = new FormData();
        
      
        if (!caption) {
            alert("Please type a message")
            return
        }

            if (!image) {
                alert("Please select an image!")
                return
               
            }
           
            form_data.append('caption', caption);
            form_data.append('image', image, image.name);

        onAddPost(form_data)
        setCaption('')
        setImage()
    }

        const imageChange = (e) => {
            if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files[0]);
              
            }
    }

    const removeSelectedImage = () => {
        setImage();

    }

    return (
           <form id ="form" onSubmit={onSubmit}>
            <div className="app__createPost">
                <div className ="imageUpload">
                    <div className="createAPost__Top">
                        <p><strong>Create a Post</strong></p>
                    </div>

                    <div className="createAPost__center">
                        <textarea
                            className="createAPost__textarea"
                            name="caption"
                            rows="3"
                            value={caption}
                            placeholder="Enter a message..."
                          
                            onChange={(e) => setCaption(e.target.value)}
                        >
                        </textarea>
                 
                        <div className="imagePreview">
                            {image && <img src={URL.createObjectURL(image)} onClick={() => removeSelectedImage()} id="image"  alt=""/>}
                        </div>
                    </div>

                        <div className="imageUpload__bottom">
                            <div className="image-upload">
                            <label htmlFor="file-input">
                                <FaRegImages size={40} style={{ marginTop: "5px" }} /><p>Select image</p>
                                </label> 

                                <input
                                id="file-input"
                                type="file"
                                accept="image/*"
                                onChange={imageChange}
                                name="image"                          
                                />
                                
                            </div>
                        
                        <button
                            type='submit'
                            className="button"
                            style={{
                                fontSize: "20",
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