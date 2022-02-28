import React, { useState, useEffect } from 'react'
import { Form, Button, InputGroup, ListGroup } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';
import { ChatState } from '../context/ChatProvider';
import $ from 'jquery';
import axios from 'axios';

function UserList() {
  const { users,chats , setChats ,selectedUserChat, setSelectedUserChat} = ChatState();
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [searchData, setSearchData] = useState([])
  const [loggedUser, setLoggedUser] = useState();

 

  useEffect(() => {
    $("#searchError").hide()
    $("#userError").hide()
  }, [])

  $(".validate").focus(function () {
    $("#searchError").hide();
    $("#userError").hide()

  })
  // function for serach all user
  const handleSearch = async () => {
    setLoading(true)
    // if (!search) {
    //   $("#searchError").show()
    // }
   
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${users.accessToken}`,
          },
        };

        console.log("config", config)

        const { data } = await axios.get(`http://3.138.38.80:3113/userslist?search=${search}`, config);
        console.log("get all users data", data)
        setLoading(false)
        setSearchData(data.data);

        if (data.statusCode === 400) {
          $("#userError").show()
        }

      } catch (error) {
        console.log("errror", error)

      }
    
  };

  // function for fetch all user
  const fetchChats = async () => {
    setLoading(true)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${users.accessToken}`,
          
        },
      };
      console.log("config for fetch chat", config)

    await axios.get("http://3.138.38.80:3113/chat/fetchchat", config)
      .then(res => {
        console.log("resrrrrrrrrrr",res.data)
        console.log("fetchChat data:", res.data.statusMsg)
        setLoading(false)
      setChats(res.data.statusMsg);
      })
      .catch(error => {
        console.log("error",error)
      })
      

    } catch (error) {
      console.log("fecth api", error)
    }
  };
useEffect( ()=>{
  setLoggedUser(JSON.parse(sessionStorage.getItem("user")));
  fetchChats()
  selectedUser()
},[])


 // function for fetch  all users chat
const selectedUser = async (userId)=>{
  console.log("userId",userId)
  try{
    const config = {
      headers: {
        Authorization: `Bearer ${users.accessToken}`,
      },
    };

    console.log("config for fetching user chat", config)

    await axios.get(`http://3.138.38.80:3113/message/allMessages/${userId}`, config).then(res=>{
      console.log("resssssss", res.data)
      setSelectedUserChat(res.data.message)
    }).catch(err=>{
      console.log("err", err)
    })

  }
  catch (error) {
      console.log("error while fetching user chat ", error)
  }
}

// console.log("chats",chats)
console.log("selected user chat", selectedUserChat)
  return (
    <>

      <div className="search">
        <InputGroup className="p-3 searchDiv">
          <Form.Control type="text" placeholder="Search..." className='search_bar validate' value={search} onChange={(e) => setSearch(e.target.value)} />
          <Button variant="primary" size="md" active onClick={handleSearch}>
            <FaSearch />
          </Button>

        </InputGroup><br />
        {/* <p className='error' id="searchError">*Please fill the field</p> */}
      </div>

      {loading ? ""
      //  <div>
      //     <h4 className='text-center text-primary'>Loading.....</h4>
      // </div>
       :
        <div className="user_list p-2">
          {searchData && searchData.map((e,i) => {
            return (
              <ListGroup variant="">
                <ListGroup.Item key={i}>
                  <div className="users" onClick={()=>selectedUser(e._id)}>
                    <div className="user_img">
                      <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" /><span>{e.first_name} {e.last_name}</span>
                    </div>
                    {/* <div className="time">
                      <p>3 min </p>
                    </div> */}
                  </div>
                </ListGroup.Item>
              </ListGroup>
            )
          })}

        </div>

      }
      <h5 className='error text-center' id="userError">User not found !</h5>


      {loading ? <div>
          <h4 className='text-center text-info'>Loading.....</h4>
      </div> :
      <div className="user_list px-2">
      {chats && chats.map((chatData,index)=>{
        return(
          <ListGroup variant="" >
                <ListGroup.Item key={index}>
                  <div className="users" onClick={()=>selectedUser(chatData._id)}>
                    <div className="user_img">
                      <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="45px" />
                      <span>{chatData.users.slice(0, 1).map((e)=>{
                        return(
                          <span>{e.first_name} {e.last_name}</span>
                        )
                      })}</span>
                    </div>
                    {/* <div className="time">
                      <p>3 min </p>
                    </div> */}
                  </div>
                </ListGroup.Item>
              </ListGroup>
        )
      })}
     </div>
}

{selectedUserChat && selectedUserChat.map((chat,index)=>{
                        return(
                            <div class="text-center message" key={index}>
                            <div class="blurb">
                                <p>{chat.content}</p>
                               
                            </div>
                        </div>
                        )
                    })}
    </>
  )
}

export default UserList