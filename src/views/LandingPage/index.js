import React, { Fragment, useState, useContext } from 'react'

//material
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
// import ButtonBase from '@material-ui/core/ButtonBase';

// motion DIV
import { motion } from "framer-motion"

// galeria
import foto_gal from '../../assets/img/galeria_foto.png'
// import galeria_mas from '../../assets/img/galeria_mas.svg'

// para los botones
import ita_ico from '../../assets/img/itabutton.svg'
import indus_ico from '../../assets/img/ico_industrial.svg'
import canaliza_ico from '../../assets/img/ico_canaliza.svg'
import eguel_ico from '../../assets/img/ico_eguel.svg'
import tecnica_ico from '../../assets/img/ico_tenica.svg'
import padnet_ico from '../../assets/img/ico_padnet.svg'

import { MenuContext } from '../../context/MenuContext'
//  datos
import  dataEmpresas from '../../database'

// ReactPlayer
import ReactPlayer from 'react-player'

const LandingPage = ( ) => {

    const { initValue } = useContext(MenuContext)

    
    const setAllNull = () => {
            setListas(null)
            setLogo(null)
            setContenido(null)
            setTitulo(null)
            setVideo(null)
    }

    const [ titulo, setTitulo ] = useState(initValue.titulo)
    const [ contenido, setContenido ] = useState(initValue.contenido)
    const [ logo, setLogo ] = useState(initValue.logo)
    const [ listas, setListas ] = useState(null)
    const [ video, setVideo ] = useState(initValue.video)
    
    
    const hanldeItaChange = () => {
        setAllNull()
        setLogo(dataEmpresas.ita.logo)
        setContenido(dataEmpresas.ita.contenido)
        setTitulo(dataEmpresas.ita.titulo)        
    }

    const hanldeIndusChange = () => {
        setAllNull()
        setLogo(dataEmpresas.indus.logo)
        setContenido(dataEmpresas.indus.contenido)
        setTitulo(dataEmpresas.indus.titulo)        
    }

    const hanldeCanalizaChange = () => {
        setAllNull()
        setLogo(dataEmpresas.canaliza.logo)
        setContenido(dataEmpresas.canaliza.contenido)
        setTitulo(dataEmpresas.canaliza.titulo)        
    }

    const hanldeEguelChange = () => {
        setAllNull()
        setLogo(dataEmpresas.eguel.logo)
        setContenido(dataEmpresas.eguel.contenido)
        setTitulo(dataEmpresas.eguel.titulo)        
    }

    const hanldeTecnicaChange = () => {
        setAllNull()
        setLogo(dataEmpresas.tecnica.logo)
        setContenido(dataEmpresas.tecnica.contenido)
        setTitulo(dataEmpresas.tecnica.titulo)        
    }

    const hanldePadnetChange = (e) => {
        setAllNull()
        if(e.target.id === "padnet"){
            setListas(dataEmpresas.padnet.listas)
        }
        setLogo(dataEmpresas.padnet.logo)
        setContenido(dataEmpresas.padnet.contenido)
        setTitulo(dataEmpresas.padnet.titulo)        
    }


    return (

        <Fragment>
            {console.log(typeof(listas))}
        <div className="portafolio">
        <header>
            <main className="empresa">
            <div className="info">
                <section>
                    <img alt="logo de la empresa" src={logo} />
                    <hr />
                    <h2>{titulo}</h2>
                    <p>{contenido}</p>
                    <div>
                {/* Listas opciones */}
                        {listas &&
                        Object.values(listas).map((item, key) => 
                                <li className="info--listas">
                                    {item}
                                </li>
                       )}
                    </div>
                {/* video embebido */}
                <div className={video ? "video--size" : null }>
                    {video && <ReactPlayer
                     url={video}
                     className="video--size"
                     height="100%"
                     width="100%"
                     />}
                </div>
                 <h2>Galería</h2>           
                <div className="galeria">
                    <img src={foto_gal} alt="foto de galeria"/>
                    <img src={foto_gal} alt="foto de galeria"/>
                    <img src={foto_gal} alt="foto de galeria"/>
                    <img src={foto_gal} alt="foto de galeria"/>
                    <img src={foto_gal} alt="foto de galeria"/>
                    <img src={foto_gal} alt="foto de galeria"/>
                    <img src={foto_gal} alt="foto de galeria"/>
                    <img src={foto_gal} alt="foto de galeria"/>      
                    <img src={foto_gal} alt="foto de galeria"/> 
                    <PhotoLibraryIcon fontSize="large" style={{color: '#FFFF' }} />
                    
                </div>
                </section>
            </div>
            <section className="menubutom">
                <motion.ButtonBase
                    whileHover={{
                            x: 0,
                            y: 0,
                            scale: 1.2,
                            rotate: 0
                         }}
                    whileTap={{rotate: 180,}}     
                    onClick={hanldeItaChange} 
                    style={{ width: '70%' }}>
                    <img src={ita_ico} 
                    className='material--button' 
                    alt="icono instalaciones tecnologicas aplicadas"
                    />
                </motion.ButtonBase>
                <motion.ButtonBase
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 1.2,
                        rotate: 0
                        }}
                    whileTap={{rotate: 180,}}
                    disableTouchRipple={true}
                    onClick={hanldeIndusChange} 
                    style={{ width: '70%'}}>
                    <img src={indus_ico} 
                    className='material--button' 
                    alt="icono instalaciones tecnologicas aplicadas"
                    />
                </motion.ButtonBase>
                <motion.ButtonBase 
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 1.2,
                        rotate: 0
                        }}
                    whileTap={{rotate: 180,}}
                    disableTouchRipple={true}
                    onClick={hanldeCanalizaChange}
                    style={{ width: '70%'}}>
                    <img src={canaliza_ico} 
                    className='material--button' 
                    alt="icono instalaciones tecnologicas aplicadas"
                    />
                </motion.ButtonBase>
                <motion.ButtonBase
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 1.2,
                        rotate: 0
                        }} 
                    whileTap={{rotate: 180,}}
                    disableTouchRipple={true}
                    onClick={hanldeEguelChange}
                    style={{ width: '70%'}}>
                    <img src={eguel_ico} 
                    className='material--button' 
                    alt="icono instalaciones tecnologicas aplicadas"
                    />
                </motion.ButtonBase>
                <motion.ButtonBase 
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 1.2,
                        rotate: 0
                        }}
                    whileTap={{rotate: 180,}}
                    disableTouchRipple={true}
                    onClick={hanldeTecnicaChange}
                    style={{ width: '70%'}}>
                    <img src={tecnica_ico} 
                    className='material--button' 
                    alt="icono instalaciones tecnologicas aplicadas"
                    />
                </motion.ButtonBase>
                <motion.ButtonBase 
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 1.2,
                        rotate: 0
                        }}
                    whileTap={{rotate: 180,}}
                    disableTouchRipple={true}
                    onClick={hanldePadnetChange}
                    style={{ width: '70%'}}>
                    <img src={padnet_ico} 
                    id="padnet"
                    className='material--button' 
                    alt="icono instalaciones tecnologicas aplicadas"
                    />
                </motion.ButtonBase>
            </section>
            </main>
        </header>
    </div>
    </Fragment>
    )
}

export default LandingPage
