//PRÁTICA CRIAÇÃO DE CONTEXTO

import { Children, createContext, useState } from "react";

export const MensagemContext = createContext()

export const MensagemProvider = ({children}) => {
    // const [mensagem, setMensagem] = useState()
    return(
        <MensagemContext.Provider value={{mensagem: "alguma mensagem"}}>
            {children}
        </MensagemContext.Provider>
    )
}