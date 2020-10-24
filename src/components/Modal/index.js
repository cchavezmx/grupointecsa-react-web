import React, { Fragment, useContext } from 'react'

import img from '../../assets/img/firebase_photo.JPG'

// contexto de menu
import { MenuContext } from '../../context/MenuContext'

const Modal = () => {

    const { isModal, setIsModal } = useContext(MenuContext)

    const  ModalHandled =  () =>{

        const handleBackdrop = (e) => {
            if(e.target.classList.contains('modal--menu'))
            setIsModal(null)

        }

        return (
            <Fragment>
            <div className="modal--backdrop">
                <img src={img} alt="Imagen de venta de producto por emrpesa" />
            </div>
            <div className="modal--menu" onClick={handleBackdrop}>
                <button>Cerrar</button>
                <button>Cerrar</button>
            </div>
            </Fragment>
        )
    }
    
    return (
    <Fragment>
    {isModal && ModalHandled()}
    </Fragment>    
    )

}


export default Modal