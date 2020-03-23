import React, { Component } from 'react'
import classes from './contact.module.css';
import Form from './UI/Form';
import {FaInstagram,FaLinkedinIn,FaTwitter,FaMediumM} from 'react-icons/fa'
export default class Contact extends Component {

    render() {
        const name="Contact";
        const linkStyles={
            textDecoration:"none",
            color:"inherit"
        }
        return (
            <div id={name} className={classes.Wrapper}>
                <h1>/contact</h1>

                <main className={classes.Contact}>
                    <div className={classes.Form}>
                        <div className={classes.Msg}>
                            <p>Can discuss work,football,coffee ;)</p>
                            <p>Wanna colaborate?</p>
                        </div>
                        <Form  />
                    </div>

                    <div className={classes.Social}>
                        <h2>Social</h2>
                        <p>You can reach to me here</p>
                        <div className={classes.Icons}>
                            <li>
                                <a title="Instagram" alt="Instagram" href="https://www.instagram.com/rohit__dalal/" target="_blank" style={linkStyles} >
                                    <FaInstagram size={"40px"} />
                                </a> 
                            </li>
                            <li>
                                <a title="LinkedIn" alt="LinkedIn" href="https://www.linkedin.com/in/rohit-dalal-61330116b/" target="_blank" style={linkStyles}>
                                     <FaLinkedinIn size={"40px"} /> 
                                </a>
                            </li>
                            <li>
                                <a title="Twitter" alt="Twitter" href="https://twitter.com/dalal__rohit" target="_blank" style={linkStyles}> 
                                    <FaTwitter size={"40px"} />
                                </a>
                            </li>
                            <li>
                                <a title="Medium" alt="Medium" href="https://medium.com/@rohit_dalal" target="_blank" style={linkStyles}>
                                     <FaMediumM size={"40px"} />
                                 </a>
                            </li>
                        </div>
                    </div>
                
                </main>

            </div>  
        )
    }
}
