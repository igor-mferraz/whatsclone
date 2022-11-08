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


export default () => {
    
    //funcionamento microfone
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition()
    }




    const [emojiOpen, setEmojiOpen ] = useState(false)
    const [text, setText] = useState("")
    const [listening, setListening] = useState(false)

    const handleEmojiClick = (e, emojiObject) =>{
        setText( text + emojiObject.emoji)
    
    }

    const handleOpenEmoji = () =>{
        setEmojiOpen(true)
    }
    const handleCloseEmoji = () =>{
        setEmojiOpen(false)
    }


    const handleMicClick = () =>{
        if(recognition !== null){
            recognition.onstart = () =>{
                setListening(true)
            }
            recognition.onend = () =>{
                setListening(false)
            }
            recognition.onresult = () =>{
                setText(e.results[0][0].transcript)
            }

            recognition.start()
        }
    }

    const handleSendClick = () =>{

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

            <div className='chatWindow-emojiarea' style={{height: emojiOpen? "200px" : "0px"}}>
                <EmojiPicker
                    
                    onEmojiClick={handleEmojiClick}
                    disableSkinTonePicker
                    disableSearchBar
                    pickerStyle={{ width: '100%', height: '200px' }}
                    groupNames={{
                        smileys_people: '',
                        animals_nature: '',
                        food_drink: '',
                        travel_places: '',
                        activities: '',
                        objects: '',
                        symbols: '',
                        flags: '',
                        recently_used: ''
                      }}
                    groupVisibility={{
                        flags: false,
                        recently_used:false
                      }}
                    
                    
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
                    placeholder='Digite uma mensagem' 
                    value={text}
                    onChange={(e)=>setText(e.target.value)} />
                </div>


                <div className='chatWindow-pos'>
                    {text === '' &&
                        <div onClick={handleMicClick}  className='chatWindow-btn'>
                            <Mic style={{color: listening ? '#126ece' : '#919191'}}/>
                        </div>
                        }
                    {text !== '' &&
                        <div onClick={handleSendClick} className='chatWindow-btn'>
                            <Send style={{color: '#919191'}}/>
                        </div>
                        }


                </div>
            </div>
        </div>
    )
}