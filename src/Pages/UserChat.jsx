import React, { useState } from 'react'
import { Row, Col, Form, Button} from 'react-bootstrap'
import { FaPaperPlane } from 'react-icons/fa';
import {  FaGrin } from 'react-icons/fa';
function UserChat() {
    
    return (
        <div>

            <div className="frabic_btn">
                <div className="active_user_img p-2">
                    <div className="user_img">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" />
                    </div>
                </div>
                <div className="active_user">
                    <p className='chatwith'>Chat with</p>
                    <p className='username'>Username</p>
                </div>
            
            </div>

            <div className="chat_room">
                <p class="date">Yesterday 12:35 pm</p>

                <div className="chatMsg">
                    {/* <div class="message">
                        <div class="blurb">Some sample text</div>
                    </div> */}
                    <div class="message">
                        <div class="blurb">
                            <p>Some sample text</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident adipisci ad possimus error nesciunt ipsum ut maxime ipsa voluptatum, libero accusantium nihil minus voluptates nulla doloribus deserunt! Molestias, neque!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident adipisci ad possimus error nesciunt ipsum ut maxime ipsa voluptatum, libero accusantium nihil minus voluptates nulla doloribus deserunt! Molestias, neque!</p>
                        </div>
                    </div>

                <p class="date">Today 12:35 pm</p>

                    <div class="message">
                        <div class="odd-blurb">
                            <p>Some sample text</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div class="message">
                        <div class="blurb">
                            <p>Some sample text</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident adipisci ad possimus error nesciunt ipsum ut maxime ipsa voluptatum, libero accusantium nihil minus voluptates nulla doloribus deserunt! Molestias, neque!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum provident adipisci ad possimus error nesciunt ipsum ut maxime ipsa voluptatum, libero accusantium nihil minus voluptates nulla doloribus deserunt! Molestias, neque!</p>
                        </div>
                    </div>
                   
                </div>



            </div>

         
            <div class="chat-bar">
              
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} >
                        <div className="msg_ins d-flex">
                            <Form.Control className='' type="text" placeholder="Write new message" />
                            <div className="send_msg d-flex">
                                <span className='grin-icon'>
                                    <FaGrin />
                                </span>
                                <Button><span><FaPaperPlane /></span></Button>
                            </div>
                        </div>
                    </Col>
                </Row>


            </div>

        </div>
    )
}

export default UserChat