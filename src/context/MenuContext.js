import React, { useState, createContext } from 'react'

//TODO: este se cambiara por un contextDedatabase
import  dataEmpresas from '../database'

// exportamos la funcion del contexto
export const MenuContext = createContext()



const MenuContextProvider = (props) =>{

    const [ isDrop, setIsDrop ] = useState(false)

    const initValue = {
        titulo: dataEmpresas.gti.titulo,
        contenido: dataEmpresas.gti.contenido,
        logo: dataEmpresas.gti.logo,
        video: dataEmpresas.gti.video,
    }

    const menuDroplet = () =>{
        if(isDrop){
            setIsDrop(false)
        }else if(!isDrop){
            setIsDrop(true)
        }
    }

    return(

        <MenuContext.Provider
            value={{
                isDrop, menuDroplet, initValue
            }}
        >
            {props.children}
        </MenuContext.Provider>

    )

}
export default MenuContextProvider;