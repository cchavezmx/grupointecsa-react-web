import React, { Fragment, useContext } from 'react'

import ButtonBase from '@material-ui/core/ButtonBase';

import whats from '../../assets/img/ico_whatts.svg'
import maps from '../../assets/img/ico_maps.svg'
import carta from '../../assets/img/ico_carta.svg'
import yotube from '../../assets/img/ico_yotube.svg'
import facebok from '../../assets/img/ico_face.svg'

import { MenuContext } from '../../context/MenuContext'

import { motion } from "framer-motion"

const Menudrop = () => {

    const { isDrop, menuDroplet, contacFormHandled } = useContext(MenuContext)

    const handleCloseOutside = (e) => {
        if(e.target.id === "Menudrop")
            menuDroplet()
        }
    
    const handleForm = () => {
        contacFormHandled()
        menuDroplet()

    }

    return (
        <Fragment>
        {isDrop && <motion.div
            onClick={handleCloseOutside} 
            id="Menudrop"
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className="menu--drop">
            <div className="menudrop--superiror">
               <h1>Grupo Intecsa</h1>
               <ButtonBase onClick={() => {menuDroplet()}}><h2 className="logo">Cerrar</h2></ButtonBase>
            </div>
            <div className="menudrop--medio">
            <h3>Contacto</h3>
            <h3>Redes Sociales</h3>
            </div>

            <div className="mdrop">        
            <div className="mdrop--menu">
            {/* seccion de contacto */}
                <img src={whats} alt="icono de whattsapp"></img>
                <img src={maps} alt="icono de maps"></img>
                <button onClick={handleForm}><img src={carta} alt="icono de mensaje"></img></button>
            </div>
            {/* seccion de redes */}
            <div className="mdrop--menu">
                <img src={yotube} alt="icono de youtube"></img>
                <img src={facebok} alt="icono de facebook"></img>
            </div>

            </div>

            </motion.div>}
        </Fragment>
    )

// ultimo corchete
}

export default Menudrop
