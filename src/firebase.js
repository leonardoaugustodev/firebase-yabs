const fapp = require('firebase/app');
// import { initializeApp } from "firebase/app";
const fanalytics = require("firebase/analytics");
const firestore = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyClKMHYNVUVajWJqqelWrQ7xydSgGa6g70",
  authDomain: "quasar-yabs.firebaseapp.com",
  projectId: "quasar-yabs",
  storageBucket: "quasar-yabs.appspot.com",
  messagingSenderId: "454425365295",
  appId: "1:454425365295:web:efd4eb3f83680f17dc6fda",
  measurementId: "G-E9LFTCRS6V"
};

const app = fapp.initializeApp(firebaseConfig);
const analytics = fanalytics.getAnalytics(app);
const db = firestore.getFirestore(app);

module.exports = {app, analytics, db};