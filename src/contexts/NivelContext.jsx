
import { createContext, useState, useContext} from "react";

const NivelContext = createContext();


export function NivelProvider({ children }) {
    const [nivelContext, setNivelContext] = useState(0);


    return(
        <NivelContext.Provider value={{nivelContext, setNivelContext}}>
            {children}
        </NivelContext.Provider>
    )
}

export function useNivel() {
    return useContext(NivelContext);
}

