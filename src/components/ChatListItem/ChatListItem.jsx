import React from 'react'
import './ChatListItem.css'

export default ( {onClick, active, data} ) =>{
    return(

        <div className={`chat-list-item ${active? 'active' : '' }`} onClick={onClick}>

            <img src={data.image} alt="" className="chat-avatar" />
            <div className="chat-lines">
                <div className="chat-line">
                    <div className="chat-name">{data.title}</div>
                    <div className="chat-date">19:00</div>
                </div>
                <div className="chat-line">
                    <div className="chat-lastMsg">
                        <p> opa, bom dia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}