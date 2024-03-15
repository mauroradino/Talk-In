import './Chat.css'
import profileImage from '../../assets/profileImage.png'
import chatProfile from '../../assets/profileChat.png'
import sendButton from '../../assets/sendButton.png'
import chatProfileActive from '../../assets/profileChatActive.png'
import { useContext, useState, useEffect } from 'react'
import Context from '../../context';
import { db } from '../../firebase'
import { getDocs, where, query, collection, updateDoc, doc, getDoc } from 'firebase/firestore'
const Chat = () =>{
    let arrayMensajes = []
    const {loggedEmail} = useContext(Context)
    const [selectedChat, setSelectedChat] = useState(1);
    const [mensajeValue, setMensajeValue] = useState("");
    const [conversacionValue] = useState([]);
    
    const insertarSaltoDeLinea = (str) => {
        let result = '';
        for (let i = 0; i < str.length; i += 40) {
            result += str.substring(i, i + 40) + '<br>';
        }
        return result;
    };

    useEffect(() => {
        async function fetchData() {
            const usuariosRef = collection(db, "Usuarios");
            const q = query(usuariosRef, where("correo", "==", loggedEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async (snapshot)=> {
                try{
                    const data = snapshot.data()
                    const conversacionDB = data.conversaciones;
                    const conversacionActual = conversacionDB[`conversacion${selectedChat}`] || [];
                    conversacionActual.map((mensaje) => {
                        const conversacion = document.getElementById("conversacion");
                        const mensajeDiv = document.createElement("div");
                        const msjConSaltos = insertarSaltoDeLinea(mensaje);
                        mensajeDiv.id = conversacionValue.length - 1;
                        mensajeDiv.className = "mensaje";
                        mensajeDiv.innerHTML = msjConSaltos;
                        conversacion.appendChild(mensajeDiv);
                        return mensajeDiv
                    })
                }catch(error){
                    console.error(error)
                }
            })
        }
    
        fetchData();
    }, []); 
    


    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            sendButtonClick(event);
        }
    }
    const handleChatClick = (chatId) => async () => {
        setSelectedChat(chatId);
        console.log(selectedChat)
    
        const conversacion = document.getElementById("conversacion")
        conversacion.innerHTML = ""
       
        const usuariosRef = collection(db, "Usuarios");
        const q = query(usuariosRef, where("correo", "==", loggedEmail));
        const querySnapshot = await getDocs(q);
    
        const selectedChatLocal = chatId;
        
        querySnapshot.forEach(async (snapshot) => {
            const data = snapshot.data();
            const dataConversaciones = data.conversaciones;
            const Actual = dataConversaciones[`conversacion${selectedChatLocal}`] || [];
            try {
                Actual.forEach((mensaje) => {
                    const mensajeDiv = document.createElement("div");
                    const msjConSaltos = insertarSaltoDeLinea(mensaje); 
                    mensajeDiv.className = "mensaje";
                    mensajeDiv.innerHTML = msjConSaltos;
                    conversacion.appendChild(mensajeDiv);
                    return mensajeDiv
                });
                
            } catch (error) {
                console.error(error);
            }
        });
    };
    
    
    const changeMensaje = (e) => {
        setMensajeValue(e.target.value)
    }


    const sendButtonClick = async() => { 
        const msjInput = document.getElementById("msjInput");
        const conversacion = document.getElementById("conversacion");
        setMensajeValue("");
        conversacionValue.push(mensajeValue);
        msjInput.value = "";
        console.log(loggedEmail)
        const mensajeDiv = document.createElement("div");
        const respuestaDiv = document.createElement("div");
        const msjConSaltos = insertarSaltoDeLinea(mensajeValue); 

        const respuestaContainer = document.createElement("div");
        respuestaContainer.className = "respuestaContainer";
        
        mensajeDiv.id = conversacionValue.length - 1;
        mensajeDiv.className = "mensaje";
        mensajeDiv.innerHTML = msjConSaltos;
        conversacion.appendChild(mensajeDiv);
        arrayMensajes.push(mensajeValue)

        const usuariosRef = collection(db, "Usuarios");
        const q = query(usuariosRef, where("correo", "==", loggedEmail));
        const querySnapshot = await getDocs(q);

        

        querySnapshot.forEach(async (snapshot) => {
            try {
                const data = snapshot.data();
                const usuarioRef = doc(db, "Usuarios", snapshot.id); 
                const usuarioDoc = await getDoc(usuarioRef);
                
                if (usuarioDoc.exists()) {
                    const conversacionDB = data.conversaciones;
                    const conversacionActual = conversacionDB[`conversacion${selectedChat}`] || [];
                    conversacionActual.push(mensajeValue);
                    await updateDoc(usuarioRef, {
                        [`conversaciones.conversacion${selectedChat}`]: conversacionActual
                    });
        
                    console.log("Documento actualizado correctamente.");
                } else {
                    console.error("El documento de usuario no existe.");
                }
            } catch (error) {
                console.error("Error al actualizar el documento:", error);
            }
        });
        
        respuestaDiv.id = "respuesta" + conversacionValue.length - 1;
        respuestaDiv.className = "respuesta";
        respuestaDiv.innerHTML = "Mensaje de respuesta automatico";
        conversacion.appendChild(respuestaContainer)
        respuestaContainer.appendChild(respuestaDiv);
    };
    

    return(
        <div className='divChat'>
            <div className='column'>
                <div className='primeraFila'>
                    <img className='profileImage' src={profileImage} width="50px" alt='imagen de perfil'/>
                </div>
                <div className='segundaFila'>
                {[1, 2, 3, 4].map((chatId) => (
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