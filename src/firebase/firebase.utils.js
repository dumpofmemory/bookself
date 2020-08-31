// import Rebase from 're-base';
import firebase from 'firebase/app';
// import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseDbConfigDetails = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

firebase.initializeApp(firebaseDbConfigDetails);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const db = firebase.database(firebaseApp);
// const base = Rebase.createClass(db);

// export default base;

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

const authHandler = async userAuthData => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  // const googleAuthToken = authData.credential.accessToken;
  console.log(userAuthData);
};

export const authenticate = provider => {
  const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  firebase
    .auth()
    .signInWithPopup(authProvider)
    .then(authHandler);
};
export default firebase;
