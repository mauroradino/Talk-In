import React, { useState } from 'react';
import Context from './context';

const Provider = ({ children }) => {
    const [logged, setLogged] = useState(false)
    const [loggedNombre, setLoggedNombre] = useState("")
    const [loggedApellido, setLoggedApellido] = useState("")
    const [loggedNacionalidad, setLoggedNacionalidad] = useState("")
    const [loggedIdiomas, setLoggedIdiomas] = useState("")
    const [loggedEmail, setLoggedEmail] = useState("")
    const [loggedImagen, setLoggedImagen] = useState("")
    const logeado = { loggedImagen, setLoggedImagen, logged, setLogged, loggedEmail, setLoggedEmail, loggedNombre, setLoggedNombre, loggedApellido, setLoggedApellido, loggedNacionalidad, setLoggedNacionalidad, loggedIdiomas, setLoggedIdiomas}

    return (
        <Context.Provider value={logeado}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
