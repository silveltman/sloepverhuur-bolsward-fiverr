// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs, onSnapshot } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// // import { getStripePayments, createCheckoutSession } from "@stripe/firestore-stripe-payments";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCY2us6jolkDU6bYcS2_WnAnuuMxRgzCtw",
//   authDomain: "sloepverhuur-bolsward-b0914.firebaseapp.com",
//   projectId: "sloepverhuur-bolsward-b0914",
//   storageBucket: "sloepverhuur-bolsward-b0914.appspot.com",
//   messagingSenderId: "939866592360",
//   appId: "1:939866592360:web:bc7ea521353a49348357dd"
// };

// // init firebase app
// const app = initializeApp(firebaseConfig);

// // // init firebase services
// const auth = getAuth()
// const db = getFirestore();

// // get collection ref
// const colRef = collection(db, 'sloepen/petter/availability')

// // getDocs(colRef)
// //   .then((snapshot) => {
// //     let sloepen = []
// //     snapshot.docs.forEach(doc => {
// //       sloepen.push({...doc.data(), id: doc.id})
// //     })
// //     console.log(sloepen)
// //     // return {
// //     //   text: 'YAS'
// //     // }
// //   })
// //   .catch(err => {
// //     console.log(err.message)
// //   });

// onSnapshot(colRef, (snapshot) => {
//   let sloepen = []
//   snapshot.docs.forEach(doc => {
//     sloepen.push({...doc.data(), id: doc.id})
//   })
//   console.log(sloepen)
// })


  
// let giveText = () => {
//   return {
//     text: 'text'
//   }
// }

// window.giveText = giveText











// // const payments = getStripePayments(app, {
// //   productsCollection: "products",
// //   customersCollection: "customers",
// // });

// // const myPriceId = 'price_1KgnFCBnudNNlWIW6EHMMve4'

// // createCheckoutSession(payments, {
// //   price: myPriceId,
// // }).then(session => {
// //   window.location.assign(session.url);
// // })

// // const startPayment = document.querySelector('#startpayment')
// // startPayment.addEventListener('click', e => {

// //   createCheckoutSession(payments, {
// //     price: myPriceId,
// //   })
// //   .then(session => {
// //     window.location.assign(session.url);
// //   })

// // })
