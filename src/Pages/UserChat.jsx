import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, InputGroup, Offcanvas, ListGroup } from 'react-bootstrap'
import { FaPaperPlane } from 'react-icons/fa';
import { FaSearch, FaGrin } from 'react-icons/fa';
function UserChat() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                <InputGroup className="p-3 d-none">
                    <Button variant="secondary" size="md" active className='broker_btn' onClick={handleShow}>View All Brokers</Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <p>All Brokers </p>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <InputGroup className="px-2">
                                <Form.Control type="search" placeholder="Search..." />
                                <Button variant="primary" size="md" active>
                                    <FaSearch />
                                </Button>

                            </InputGroup>

                            <div className="user_list pt-3">
                                <ListGroup variant="">
                                    <ListGroup.Item>
                                        <div className="users">
                                            <div className="user_img">
                                                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" /><span>Username</span>
                                            </div>

                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="users">
                                            <div className="user_img">
                                                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" /><span>Username</span>
                                            </div>

                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="users">
                                            <div className="user_img">
                                                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" /><span>Username</span>
                                            </div>

                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="users">
                                            <div className="user_img">
                                                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" /><span>Username</span>
                                            </div>

                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <Button variant="primary" size="md" active className='d-none'>View on fabric</Button>
                </InputGroup>
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
                    {/* <div class="message">
                        <div class="blurb">Lorem ipsum dolor sit amet? </div>
                    </div>
                    <div class="message">
                        <div class="odd-blurb">lorem ipsum dolor sit amet</div>
                    </div> */}
                </div>



            </div>

            {/* <Row>
                <Col lg={12}>
                <div className="message_input">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control type="text" placeholder="Write new message.." />
                </Form.Group>
                <div className="msg_icon">
                  
                </div>
              </div>
                </Col>
              </Row> */}
            <div class="chat-bar">
                {/* <span class="text-container">
                    <span class="editable" contenteditable="true" data-text="Write new message"></span>
                </span> */}
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