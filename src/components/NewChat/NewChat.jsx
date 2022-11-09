import './NewChat.css'
import { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default ({user, chatlist, show, setShow})=>{

    const [list,setList] = useState([
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png',name: 'nome do '},
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png',name: 'nome do '},
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png',name: 'nome do '},
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png',name: 'nome do '}
    ])  

    const handleClose = () =>{
        setShow(false)
    }

    return(
        <div className="newChat" style={{left: show? 0:-415}}>
            <div className="newChat-header">
                <div className="newChat-backbutton" onClick={handleClose}>
                    <ArrowBackIcon
                        style={{color:'#fff'}}
                        />
                </div>
                <div className="newChat-headtitle">Nova Conversa</div>
            </div>
            <div className="newChatList">
            {list.map((item, key)=>(
                    <div className="newChatItem" key={key}>
                        <img className='newChat-item-avatar' src={item.avatar} />
                        <div className='newChat-item-name'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}