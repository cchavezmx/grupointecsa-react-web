import React, { useState, createContext } from 'react'

// exportamos la funcion del contexto
export const MenuContext = createContext()



const MenuContextProvider = (props) =>{

    const [ isDrop, setIsDrop ] = useState(false)
    const [ isModal, setIsModal ] = useState(null)
    const [ isForm, setIsForm ] = useState(null)


    const menuDroplet = () =>{
        if(isDrop){
            setIsDrop(false)
        }else if(!isDrop){
            setIsDrop(true)
        }
    }

    const contacFormHandled = () =>{
        if(isForm){
            setIsForm(null)
        }else if(!isForm){
            setIsForm(true)
        }
    }

    return(

        <MenuContext.Provider
            value={{
                isDrop, menuDroplet,
                isModal, setIsModal,
                isForm, contacFormHandled, setIsForm,

            }}
        >
            {props.children}
        </MenuContext.Provider>

    )

}
export default MenuContextProvider;