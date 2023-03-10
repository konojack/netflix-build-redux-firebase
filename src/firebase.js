import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCyepV9jIhMvpkXBwClHPkfiNPstJP9Xio',
  authDomain: 'netflix-build-redux-firebase.firebaseapp.com',
  projectId: 'netflix-build-redux-firebase',
  storageBucket: 'netflix-build-redux-firebase.appspot.com',
  messagingSenderId: '708095341804',
  appId: '1:708095341804:web:be633fc22198c8f10ca1c9',
  measurementId: 'G-9VZYWCT2FT',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
