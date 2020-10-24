import React, { Fragment, useContext } from 'react'

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

//contexto 
import  { DataContext }  from '../../context/DataContext'
import { MenuContext } from '../../context/MenuContext'

// ReactPlayer
import ReactPlayer from 'react-player'



const LandingPage = ( ) => {

    const { itaData, indusData, canalizaData, eguelData, tecnicaData, padnetData, titulo, contenido, logo, listas, video } = useContext(DataContext)
    const { setIsModal } = useContext(MenuContext)


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
                    <img 
                    onClick={() => {setIsModal(true)}}
                    src={foto_gal} alt="foto de galeria"
                    />
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
                    onClick={itaData} 
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
                    onClick={indusData} 
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
                    onClick={canalizaData}
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
                    onClick={eguelData}
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
                    onClick={tecnicaData}
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
                    onClick={padnetData}
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
