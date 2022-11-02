import './ChatWindow.css'
import MoreVert from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import Close from '@material-ui/icons/Close';
import Send from '@material-ui/icons/Send';
import Mic from '@material-ui/icons/Mic';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { width } from '@mui/system';

export default () => {
    const [emojiOpen, setEmojiOpen ] = useState(false)

    handleOpenEmoji = () =>{
        setEmojiOpen(true)
    }
    handleCloseEmoji = () =>{
        setEmojiOpen(false)
    }

    const handleEmojiClick = () =>{
        
    }


    return (
        <div className="chatWindow">
            <div className="chatWindow-header">
                
                <div className='chatWindow-headerinfo'>
                    <img className='chatWindow-avatar' src='https://www.w3schools.com/howto/img_avatar2.png' alt="" />
                    <div className='chatWindow-name'>Nome</div>
                </div>

                <div className='chatWindow-buttons'>

                    <div className='chatWindow-btn'>
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>
                    <div className='chatWindow-btn'>
                        <AttachFile style={{color: '#919191'}}/>
                    </div>
                    <div className='chatWindow-btn'>
                        <MoreVert style={{color: '#919191'}}/>
                    </div>
                </div>

            </div>


            <div className='chatWindow-body'>
                
            </div>

            <div className='chatWindow-emojiarea' style={{height: emojiOpen? '200px' : '0px'}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    searchDisabled
                    skinTonesDisabled
                    width={auto}
                    
                    
                />
            </div>


            <div className='chatWindow-footer'>
                <div className='chatWindow-pre'>
                    <div className='chatWindow-btn'
                    onClick={handleCloseEmoji}
                    style={{width: emojiOpen? 40:0}}
                    >
                        <Close style={{color: '#919191'}}/>
                    </div>


                    <div className='chatWindow-btn'
                    onClick={handleOpenEmoji}
                    >
                        <InsertEmoticon style={{color: emojiOpen? '#009688' : '#919191'}}/>
                    </div>
                </div>

                <div className='chatWindow-inputarea'>
                    <input 
                    className='chatWindow-input' 
                    type="text"
                    placeholder='Digite uma mensagem'  />
                </div>


                <div className='chatWindow-pos'>
                    <div className='chatWindow-btn'>
                        <Send style={{color: '#919191'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}