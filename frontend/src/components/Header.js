import React from 'react'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import UserInfo from './UserInfo'



const Header = () => {

    const { user } = useContext(AuthContext)

    return (
        <center>
            <section>
                {
                    !user ? (
                        <h1>Welcome to WallShare! Login or Signup to start posting. </h1>
                    ) : (
                        <>
                            { user && <UserInfo user={user} /> }
                                <h1> Happy Posting!</h1>
                                </>
                )
                }
                
                </section >
                </center >
                )
         }       

export default Header