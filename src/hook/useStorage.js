import { useState, useEffect } from 'react'
import { firebaseStorage, firebaseDb, timestamp } from '../config/firestore'


const useStorage = ( file ) => {
    
    // vamos a tener 3 estados de progreso de error y cuando tengamos la url una vez que el archivo este arriba
    const [ progress, setProgress ] = useState(0)
    const [ error, setError ] = useState(null)
    const [ url, setUrl ] = useState(null)

    //  con el uso de useEffect vamos a realizar la funcion siempre que la dependenacia (images) sufra cambios
    useEffect(() => {
        // guardamos el nombre del archivo
        let storageRef = firebaseStorage.ref(file.name)

        // Escribimos el nombre dentro de la base de datos
        let firestoregeRef = firebaseDb.collection('imgweb')

            storageRef.put(file).on('state_changed', (snap) => {

                // calulamos y steaamos el valor dentro de la variable del porcentaje 
                let porcent = (snap.bytesTransferred / snap.totalBytes ) * 100
                setProgress(porcent)
            }, (error) => {
                setError(error)
            }, async () => {
                let url = await storageRef.getDownloadURL();
                let createAt = timestamp()
                firestoregeRef.add({ url, createAt })
                setUrl(url)
            });

    }, [file]
    )

        return { progress, error, url }
    // fin
}

export default useStorage