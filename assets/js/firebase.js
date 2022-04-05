import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js'

// Add Firebase products that you want to use
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyCY2us6jolkDU6bYcS2_WnAnuuMxRgzCtw",
  authDomain: "sloepverhuur-bolsward-b0914.firebaseapp.com",
  projectId: "sloepverhuur-bolsward-b0914",
  storageBucket: "sloepverhuur-bolsward-b0914.appspot.com",
  messagingSenderId: "939866592360",
  appId: "1:939866592360:web:bc7ea521353a49348357dd"
};
      
const app = initializeApp(firebaseConfig);

// init firebase services
const db = getFirestore();

const colRef = collection(db, 'sloepen/petter/availability')

var mytext = "hello world"

const sloepen = getDocs(colRef)
  .then((snapshot) => {
    let sloepen = []
    snapshot.docs.forEach(doc => {
      sloepen.push({...doc.data(), id: doc.id})
    })
    console.log(sloepen[0])
    // return sloepen
  })
  .catch(err => {
    console.log(err.message)
  });




window.getFirebase = () => {
  return {
    text: 'oke',

    setText() {
      this.text = 'no'
      // console.log(mytext, sloepen[0].)
    }
  }
}