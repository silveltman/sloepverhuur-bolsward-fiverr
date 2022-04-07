import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js'

// Add Firebase products that you want to use
import { getFirestore, collection, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'

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


window.getFirebase = () => {
  return {
    availability: [],
    enabledDates: [],
    active: {
      date: null,
      ochtend: null,
      middag: null,
      avond: null
    },
    selectedSlots: {
      ochtend: false,
      middag: false,
      avond: false
    },

    init() {
      const colRef = collection(db, 'sloepen/petter/availability');
      onSnapshot(colRef, (snap) => {
        this.setAvailability(snap)
        this.setEnabledDates(snap)
      })
    },

    setAvailability(snap) {
      const availability = []
      snap.docs.forEach(doc => {
        availability.push(doc.data())
      })
      this.availability = availability
    },

    setEnabledDates(snap) {
      const enabledDates = []
      snap.docs.forEach(doc => {
        enabledDates.push(doc.data().date.toDate())
      })
      this.enabledDates = enabledDates
    },

    setActive(date) {
      if (!date) return
      if (this.availability == []) return

      let found = this.availability.find(item => {
        return item.date.toDate().getTime() == date.getTime()
      })

      this.active = found
      this.selectedSlots.ochtend = false
      this.selectedSlots.middag = false
      this.selectedSlots.avond = false
    },
  }
}