const { initializeApp } = require('firebase/app')
const { getFirestore, setDoc, doc, collection, query, getDocs } = require("firebase/firestore")

const serviceAccount = require("../book-1758c-firebase-adminsdk-f55as-433d23326a.json")

const firebaseConfig = {
    apiKey: "AIzaSyBewSRhlPXjtnMxMnLedE-CT3PvDqJFJvc",
    authDomain: "book-1758c.firebaseapp.com",
    projectId: "book-1758c",
    storageBucket: "book-1758c.appspot.com",
    messagingSenderId: "751678589142",
    appId: "1:751678589142:web:1434d822fe9a9f3e42e177"
}

let app
let firestoreDb

const initializeFirebaseApp = () => {
    try {
        app = initializeApp(firebaseConfig)
        firestoreDb = getFirestore()
        return app
    } catch (error) {
        console.log({ error })
    }
}

const uploadProcessData = async () => {
    const dataToUpload = {
        title: 'title',
        published: 1992,
        genres: ["Fantasy", "Fiction"],
    }
    console.log({ dataToUpload })
    try {
console.log('reach here...')
        const document = doc(firestoreDb, "book", "some-testing")
        console.log({ document })
        let dataUpdated = await setDoc(document, dataToUpload)
        console.log({ dataUpdated })
        return dataUpdated
    } catch (error) {

    }
}

const getTheData = async (from, to) => {
    try {
        const collectionRef = collection(firestoreDb, "book")
        const finalFata = []
        const q = query(collectionRef)

        const docSnap = await getDocs(q)

        docSnap.forEach((doc) => {
            finalFata.push(doc.data())
        })

        return finalFata
    } catch (error) {

    }
}
const getFirebaseApp = () => app

module.exports = {
    getFirebaseApp,
    initializeFirebaseApp,
    uploadProcessData,
    getTheData
}