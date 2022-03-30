const firebase = require('./firebase.js');
const fb = require("firebase/firestore");

const db = firebase.db;
async function addBudget() {

    const startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), -1);

    const budget = {
        "start_date": startDate.getTime(),
        "end_date": endDate.getTime(),
        "created_date": new Date(),
        "updated_date": new Date()
    };

    await fb.setDoc(fb.doc(db, "cities", "new-city-id"), budget);

}

addBudget();