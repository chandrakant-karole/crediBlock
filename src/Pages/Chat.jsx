import React from 'react'
import UserHeader from './UserHeader'
import { Container, Row, Col} from 'react-bootstrap'

import UserFooter from './UserFooter';
import UserList from './UserList';
import UserChat from './UserChat';
function Chat() {
  return (
    <div>
      <UserHeader />
      <div className="chat_box">
        <Container fluid>
          <Row>
            <Col lg={3} md={3} className="left_chat_box px-0">
              <UserList/>
            </Col>

            <Col lg={9} md={9}  className="right_chat_box px-0">
              <UserChat/>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <UserFooter /> */}
    </div>
  )
}

export default Chat