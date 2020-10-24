import React, { createContext, useState } from 'react'

// importamos la base de datos
import dataEmpresas from '../database'


export const DataContext = createContext()

const DataContextProvider = (props) => {
    
    //  seteamos los valores inciailes
    const initValue = {
        titulo: dataEmpresas.gti.titulo,
        contenido: dataEmpresas.gti.contenido,
        logo: dataEmpresas.gti.logo,
        video: dataEmpresas.gti.video,
    }

    // Variables para los cambios incialiazados con la primera funcion
    const [ titulo, setTitulo ] = useState(initValue.titulo)
    const [ contenido, setContenido ] = useState(initValue.contenido)
    const [ logo, setLogo ] = useState(initValue.logo)
    const [ listas, setListas ] = useState(null)
    const [ video, setVideo ] = useState(initValue.video)

    // metodo para restear los valores
    const setAllNull = () => {
        setListas(null)
        setLogo(null)
        setContenido(null)
        setTitulo(null)
        setVideo(null)
        }

        const gtiData = () => {
            setAllNull();
            setLogo(dataEmpresas.gti.logo);
            setContenido(dataEmpresas.gti.contenido);
            setTitulo(dataEmpresas.gti.titulo);
            setListas(dataEmpresas.gti.listas);
            setVideo(dataEmpresas.gti.video);
            setListas(dataEmpresas.gti.listas)   
        }

        const itaData = () => {
            setAllNull();
            setLogo(dataEmpresas.ita.logo);
            setContenido(dataEmpresas.ita.contenido);
            setTitulo(dataEmpresas.ita.titulo);
            setListas(dataEmpresas.ita.listas);
            setVideo(dataEmpresas.ita.video);
            setListas(dataEmpresas.ita.listas)   
        }
    
        const indusData = () => {
            setAllNull()
            setLogo(dataEmpresas.indus.logo)
            setContenido(dataEmpresas.indus.contenido)
            setTitulo(dataEmpresas.indus.titulo)        
            setListas(dataEmpresas.indus.listas)
            setVideo(dataEmpresas.indus.video)
        }
    
        const canalizaData = () => {
            setAllNull()
            setLogo(dataEmpresas.canaliza.logo)
            setContenido(dataEmpresas.canaliza.contenido)
            setTitulo(dataEmpresas.canaliza.titulo)        
            setListas(dataEmpresas.canaliza.listas)
            setVideo(dataEmpresas.canaliza.video)
        }
    
        const eguelData = () => {
            setAllNull()
            setLogo(dataEmpresas.eguel.logo)
            setContenido(dataEmpresas.eguel.contenido)
            setTitulo(dataEmpresas.eguel.titulo)        
            setListas(dataEmpresas.eguel.listas)
            setVideo(dataEmpresas.eguel.video)
        }
    
        const tecnicaData = () => {
            setAllNull()
            setLogo(dataEmpresas.tecnica.logo)
            setContenido(dataEmpresas.tecnica.contenido)
            setTitulo(dataEmpresas.tecnica.titulo)        
            setListas(dataEmpresas.tecnica.listas)
            setVideo(dataEmpresas.tecnica.video)
        }
    
        const padnetData = () => {
            setAllNull();
            setLogo(dataEmpresas.padnet.logo);
            setContenido(dataEmpresas.padnet.contenido);
            setTitulo(dataEmpresas.padnet.titulo);
            setListas(dataEmpresas.padnet.listas)
            setVideo(dataEmpresas.padnet.video)
        }
    
        return(
            <DataContext.Provider
                value={{
                    itaData, indusData, canalizaData, eguelData, tecnicaData, padnetData, gtiData, titulo, contenido, logo, listas, video
                }}
            >
                {props.children}
            </DataContext.Provider>
        )



}


export default DataContextProvider