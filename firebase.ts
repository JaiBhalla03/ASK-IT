import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'FireBase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAARqj43EUetOtpsZXrc6AhIzQv3rBiJ_8",
    authDomain: "askit-e4a74.firebaseapp.com",
    projectId: "askit-e4a74",
    storageBucket: "askit-e4a74.appspot.com",
    messagingSenderId: "206304103250",
    appId: "1:206304103250:web:e92580c189af4578ad488b",
    measurementId: "G-CWWX6TLNV0"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
//the above line is written because we want just a single bit encoding
const db = getFirestore(app);

export {db};