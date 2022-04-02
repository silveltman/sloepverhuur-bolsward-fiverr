// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStripePayments, createCheckoutSession  } from "@stripe/firestore-stripe-payments";

// const initializeApp = require('firebase-app');
// const getAuth = require('firebase-auth');
// const getFirestore = require('firebase-firestore');
// const getStripePayments = require('firebase-functions');



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY2us6jolkDU6bYcS2_WnAnuuMxRgzCtw",
  authDomain: "sloepverhuur-bolsward-b0914.firebaseapp.com",
  projectId: "sloepverhuur-bolsward-b0914",
  storageBucket: "sloepverhuur-bolsward-b0914.appspot.com",
  messagingSenderId: "939866592360",
  appId: "1:939866592360:web:bc7ea521353a49348357dd"
};

// init firebase app
const app = initializeApp(firebaseConfig);

// // init firebase services
const auth = getAuth(app)
const db = getFirestore(app);

// // init firestore-stripe SDK
const payments = getStripePayments(app, {
  productsCollection: "products",
  customersCollection: "customers",
});


const myPriceId = 'price_1KgnFCBnudNNlWIW6EHMMve4'

const session = await createCheckoutSession(payments, {
  price: myPriceId,
});

function startPayment() {
  console.log('begin')

  window.location.assign(session.url);

  console.log('end')
}



// // collection ref
// const colRef = collection(db, 'products')

// getDocs(colRef)
//   .then((snapshot) => {
//     console.log(snapshot.docs)
//   })