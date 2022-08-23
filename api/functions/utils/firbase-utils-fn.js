const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();
const storage = admin.storage();
const auth = admin.auth()


module.exports = {db, storage, auth }