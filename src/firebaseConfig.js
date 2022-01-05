import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDDFv23E2q914-pv7k1FEsSzoOLmLPzSKg",
  authDomain: "storage-af7a1.firebaseapp.com",
  projectId: "storage-af7a1",
  storageBucket: "storage-af7a1.appspot.com",
  messagingSenderId: "968271094707",
  appId: "1:968271094707:web:286b36de4a2b23a647a1c6"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);