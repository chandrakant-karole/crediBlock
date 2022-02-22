import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, InputGroup, ListGroup, Offcanvas } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';
function UserList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      
      <div className="search">
        <InputGroup className="p-3 searchDiv">
          <Form.Control type="search" placeholder="Search..." className='search_bar' />
          <Button variant="primary" size="md" active onClick={handleShow}>
            <FaSearch />
          </Button>

        </InputGroup>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>All Users</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup variant="flush">
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
              <ListGroup.Item><div className="users">
                <div className="user_img">
                  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" /><span>Username</span>
                </div>

              </div></ListGroup.Item>
              <ListGroup.Item>
                <div className="users">
                  <div className="user_img">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" /><span>Username</span>
                  </div>

                </div>
              </ListGroup.Item>
            </ListGroup>

          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <div className="user_list p-2">
        <ListGroup variant="">
          <ListGroup.Item>
            <div className="users">
              <div className="user_img">
                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" /><span>Username</span>
              </div>
              <div className="time">
                <p>3 min </p>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="users">
              <div className="user_img">
                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" /><span>Username</span>
              </div>
              <div className="time">
                <p>3 min </p>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="users">
              <div className="user_img">
                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" /><span>Username</span>
              </div>
              <div className="time">
                <p>3 min </p>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="users">
              <div className="user_img">
                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" /><span>Username</span>
              </div>
              <div className="time">
                <p>3 min </p>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>

    </>
  )
}

export default UserList