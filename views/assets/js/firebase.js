import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js'
import {
  getFirestore,
  collection,
  onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js'
// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js'

const firebaseConfig = {
  apiKey: 'AIzaSyBnWh2yIHDUnWz-CiY-tR6S8eMDkuobO1A',
  authDomain: 'sloepverhuur-bolsward-1072f.firebaseapp.com',
  projectId: 'sloepverhuur-bolsward-1072f',
  storageBucket: 'sloepverhuur-bolsward-1072f.appspot.com',
  messagingSenderId: '48794763708',
  appId: '1:48794763708:web:847b740bdbfa6684fc2bb9',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore()

window.firebase = { db, collection, onSnapshot }

// const colRef = collection(db, 'sloepen/petter/reserveringen')
// const docs = []
// const docsDates = []

// const unsubscribe = onSnapshot(colRef, (snapshot) => {
//   snapshot.forEach((doc) => {
//     docs.push(doc.data())
//     docsDates.push(doc.data().datum.toDate().toISOString().substring(0, 10))
//   })
//   console.log('docs are:', docsDates)
// })
