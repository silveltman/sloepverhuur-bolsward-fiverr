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
    enabledSlots: {
      ochtend: false,
      middag: false,
      avond: false
    },
    selectedDate: null,
    selectedSlots: {
      ochtend: false,
      middag: false,
      avond: false
    },
    active: {
      date: null,
      ochtend: null,
      middag: null,
      avond: null
    },

    init() {
      const colRef = collection(db, 'sloepen/petter/availability');
      onSnapshot(colRef, (snap) => {
        this.setAvailability(snap)
        this.setEnabledDates()
      })
      // $watch('availability', (value) => {
      //   this.setEnabledDates()
      //   this.setEnabledSlots()
      // })
    },

    setAvailability(snap) {
      const availability = []
      snap.docs.forEach(doc => {
        availability.push(doc.data())
      })
      this.availability = availability
    },

    setEnabledDates() {
      const dates = []
      this.availability.forEach(item => {
        dates.push(item.date.toDate())
      })
      console.log(dates)
      this.enabledDates = dates
    },

    setEnabledSlots() {
      if (!this.selectedDate) return

      let found = this.availability.find(item => {
        return item.date.toDate().getTime() == this.selectedDate.getTime()
      })

      this.enabledSlots = {
        ochtend: found.ochtend,
        middag: found.middag,
        avond: found.avond
      }
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