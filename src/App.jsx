import React from "react";
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";
import ChatIntro from "./components/ChatIntro/ChatIntro";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatListItem from "./components/ChatListItem/ChatListItem";


export default () => {
    const [list, setList] = useState([
        {
            chatId:1, 
            title:'Fulano de tal', 
            image: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        {
            chatId:2, 
            title:'Fulano', 
            image: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        {
            chatId:3, 
            title:'Fulano 3', 
            image: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        {
            chatId:4, 
            title:'Fulano', 
            image: 'https://www.w3schools.com/howto/img_avatar2.png'
        }

        ])


    const [activeChat, setActiveChat] = useState([{}])


    return (
        <div className="app-window">
            <div className="sidebar">
                <header>
                    <img className="header-avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                    <div className="header-buttons">
                        <div className="header-btn">
                            <DonutLargeIcon 
                            style={{color:'#919191'}}/>

                            <ChatIcon 
                            style= {{color:'#919191'}}/>

                            <MoreVertIcon 
                            style= {{color:'#919191'}}/>
                        </div>
                    </div>
                </header>

                <div className="search">
                    <div className="search-input">
                        <SearchIcon 
                        style= {{color:'#919191'}}
                        fontSize="small"/>
                        <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                    </div>
                </div>

                <div className="chatlist">
                    {list.map((item,key)=>(
                        <ChatListItem 
                            key={key}
                            data={item}
                            active={activeChat.chatId === list[key].chatId}
                            onClick={()=> setActiveChat(list[key])}
                            
                            />
                    ))}
                </div>

            </div>
            <div className="contentarea">
                
                {activeChat.chatId !== undefined &&
                    <ChatWindow/>
                }
                {activeChat.chatId === undefined &&
                    <ChatIntro/>
                }
                
            </div>
        </div>
);
};
