import './Chat.css'
import profileImage from '../../assets/profileImage.png'
import chatProfile from '../../assets/profileChat.png'
import sendButton from '../../assets/sendButton.png'
import chatProfileActive from '../../assets/profileChatActive.png'
import { useState } from 'react'
const Chat = () =>{
    const [selectedChat, setSelectedChat] = useState(0);
    const [mensajeValue, setMensajeValue] = useState("");
    const [conversacionValue] = useState([]);

    const handleChatClick = (chatId) => () => {
        setSelectedChat(chatId);
    };
    
    const changeMensaje = (e) => {
        setMensajeValue(e.target.value)
    }

    const insertarSaltoDeLinea = (str) => {
        let result = '';
        for (let i = 0; i < str.length; i += 40) {
            result += str.substring(i, i + 40) + '<br>';
        }
        return result;
    };
    
    
    const sendButtonClick = async() => { 
        const msjInput = document.getElementById("msjInput");
        const conversacion = document.getElementById("conversacion");
        setMensajeValue("");
        conversacionValue.push(mensajeValue);
        msjInput.value = "";
        
        const mensajeDiv = document.createElement("div");
        const respuestaDiv = document.createElement("div");
        const msjConSaltos = insertarSaltoDeLinea(mensajeValue); 
        

        const respuestaContainer = document.createElement("div");
        respuestaContainer.className = "respuestaContainer";
        


        mensajeDiv.id = conversacionValue.length - 1;
        mensajeDiv.className = "mensaje";
        mensajeDiv.innerHTML = msjConSaltos;
        conversacion.appendChild(mensajeDiv);

        respuestaDiv.id = "respuesta" + conversacionValue.length - 1;
        respuestaDiv.className = "respuesta";
        respuestaDiv.innerHTML = "Mensaje de respuesta automatico";
        conversacion.appendChild(respuestaContainer)
        respuestaContainer.appendChild(respuestaDiv);




    };
    
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            sendButtonClick(event);
        }
    }

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
                                <p className={`chatNombre ${selectedChat === chatId ? 'active' : ''}`}>Contacto</p>
                            </div>
                        </button>
                    ))}
                    
                </div>
            </div>
            <div className='chat'>
                <div id='conversacion' className='conversacion'></div>
                <div className='escritura'>
                    <input id='msjInput' className='inputEscritura' onKeyDown={handleKeyPress} onChange={changeMensaje} type='text'/>
                    <button className='sendButton' onClick={sendButtonClick}><img className='sendButtonImg' src={sendButton} width="40px" height="40px" alt='boton'/></button>
                </div>
            </div>
        </div>
    )
}

export default Chat;