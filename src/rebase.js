import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAhZcfCUOFlFAVBroIGGXlY2XyJasxFAn8',
  authDomain: 'bookself101.firebaseapp.com',
  databaseURL: 'https://bookself101.firebaseio.com',
});

var db = firebase.database(firebaseApp);
var base = Rebase.createClass(db);

export default base;
