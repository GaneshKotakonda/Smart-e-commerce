import { initializeApp } from 'firebase/app';
 import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDpXli2dpm_5xCar51NCr6pxONVfw7KLdE",
  authDomain: "smart-e-commerce-ee7c3.firebaseapp.com",
  projectId: "smart-e-commerce-ee7c3",
  storageBucket: "smart-e-commerce-ee7c3.firebasestorage.app",
  messagingSenderId: "395749466236",
  appId: "1:395749466236:web:3db7fd1734de15bf1029f9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
export{auth,db} 
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
