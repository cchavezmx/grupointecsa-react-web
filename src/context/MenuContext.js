import React, { useState, createContext } from 'react'

// exportamos la funcion del contexto
export const MenuContext = createContext()



const MenuContextProvider = (props) =>{

    const [ isDrop, setIsDrop ] = useState(false)


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
                isDrop, menuDroplet
            }}
        >
            {props.children}
        </MenuContext.Provider>

    )

}
export default MenuContextProvider;