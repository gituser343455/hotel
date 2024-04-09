import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBWsvWvtg-s4f_TvklD7Iv48zLIo5Cjw7E",
  authDomain: "hotel-cd8b8.firebaseapp.com",
  projectId: "hotel-cd8b8",
  storageBucket: "hotel-cd8b8.appspot.com",
  messagingSenderId: "332870391064",
  appId: "1:332870391064:web:ba641bdc1ae4cae34d3a6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export const firestore = getFirestore(app);