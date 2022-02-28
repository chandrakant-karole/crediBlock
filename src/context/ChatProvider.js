import React, { createContext, useContext, useState, useEffect } from 'react';


const chatContext = createContext();

const ChatProvider = ({ children })=> {
    const [users, setUsers] = useState("")
    const [selectedUserChat, setSelectedUserChat] = useState("");
    const [chats,setChats]=useState([]);
    // console.log("chat provider users",users)
    useEffect(() => {
        const loggedInUser =  JSON.parse(sessionStorage.getItem("user"));
        setUsers(loggedInUser);
        
        // if (loggedInUser === "" || loggedInUser === null || loggedInUser === undefined) {
        //     window.location('/');
        // }
    }, []);
    return (
        <chatContext.Provider value={{users,setUsers,selectedUserChat, setSelectedUserChat,chats,setChats}}>
            {children}
        </chatContext.Provider>
    )
}

export const ChatState = () => {
    return useContext(chatContext);
   
  };


export default ChatProvider