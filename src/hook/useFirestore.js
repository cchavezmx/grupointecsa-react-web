import { useEffect, useState } from 'react'
import { firebaseDb } from '../config/firestore'

// Este hook se conecta a firesotorage para obetener los documentos nuevos. 


const useFirestore = ( collection ) => {

    const [ docs, setDocs ] = useState([])

    useEffect(() => {
        let unsub = firebaseDb.collection(collection)
        .orderBy('createAt' , 'desc')
        .onSnapshot(snap => {

            let documents = []

            snap.forEach(doc => documents.push({ id: doc.id, ...doc.data()}))
            return setDocs(documents)
        }, err => {
             console.log(err)   
        })
        return () => unsub()

    },[collection])

    return { docs }
}


export default useFirestore