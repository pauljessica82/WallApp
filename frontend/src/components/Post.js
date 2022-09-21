import { FaRocketchat } from 'react-icons/fa'
import React from "react"; 
import "./Post.css"


const Post = ({  post }) => {


    return (
        <div className="post">
            {/*<div className="post__header">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                 

                    <div className="post__headerInfo">
                        <p style={{ fontSize: "14px" }}> Jess </p>
                    </div>
                </div>
                */}{/*check user */}{/*
             
            </div>*/}
            
            <img className="post__image" src={`http://localhost:8000${post.image}`} alt = "post "/>
            <div className="post__bottom">
                

                <p>
                    <FaRocketchat size={20} color="black" />
                    <strong>     pauljess82 posted:   </strong> {post.caption}
                </p>
            </div>


             </div>
      
    )
}

export default Post