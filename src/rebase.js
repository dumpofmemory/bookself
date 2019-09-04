import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseDbConfigDetails = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

const firebaseApp = firebase.initializeApp(firebaseDbConfigDetails);

const db = firebase.database(firebaseApp);
const base = Rebase.createClass(db);

export default base;
