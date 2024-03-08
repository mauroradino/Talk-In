import './Chat.css'
import profileImage from '../../assets/profileImage.png'
import chatProfile from '../../assets/profileChat.png'
import sendButton from '../../assets/sendButton.png'
import chatProfileActive from '../../assets/profileChatActive.png'
import { useState } from 'react'
const Chat = () =>{
    const [selectedChat, setSelectedChat] = useState(0);

    const handleChatClick = (chatId) => () => {
        setSelectedChat(chatId);
    };
    return(
        <div className='divChat'>
            <div className='column'>
                <div className='primeraFila'>
                    <img className='profileImage' src={profileImage} width="50px" alt='imagen de perfil'/>
                </div>
                <div className='segundaFila'>
                {[0, 1, 2, 3].map((chatId) => (
                        <button key={chatId} className='selectChat' onClick={handleChatClick(chatId)}>
                            <div id={chatId} className={`conversacionChat ${selectedChat === chatId ? 'active' : ''}`}>
                                <img className='chatProfile' src={selectedChat === chatId ? chatProfileActive : chatProfile} alt="Chat" width="50px" />
                                <p className={`chatNombre ${selectedChat === chatId ? 'active' : ''}`}>User Talk</p>
                            </div>
                        </button>
                    ))}
                    
                </div>
            </div>
            <div className='chat'>
                <div className='conversacion'>

                </div>
                <div className='escritura'>
                    <input className='inputEscritura' type='text'/>
                    <button className='sendButton' onClick={() => console.log("click")}><img className='sendButtonImg' src={sendButton} width="40px" height="40px" alt='boton'/></button>
                </div>
            </div>
        </div>
    )
}

export default Chat