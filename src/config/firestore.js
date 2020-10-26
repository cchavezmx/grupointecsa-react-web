import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyChANB4C_S3R9mzNmHKKVgxpOvu5JVt45A",
    authDomain: "covid-codi-stats.firebaseapp.com",
    databaseURL: "https://covid-codi-stats.firebaseio.com",
    projectId: "covid-codi-stats",
    storageBucket: "covid-codi-stats.appspot.com",
    messagingSenderId: "736975339730",
    appId: "1:736975339730:web:8c03564f30371e04882d0b"
  };

  firebase.initializeApp(firebaseConfig)

  const firebaseStorage = firebase.storage();
  const firebaseDb = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { firebaseStorage, firebaseDb, timestamp }