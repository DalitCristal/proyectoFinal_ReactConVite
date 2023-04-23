import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/* import.meta.env.VITE_APP_FIREBASE_apiKey;
import.meta.env.VITE_APP_FIREBASE_authDomain;
import.meta.env.VITE_APP_FIREBASE_projectId;
import.meta.env.VITE_APP_FIREBASE_storageBucket;
import.meta.env.VITE_APP_FIREBASE_messagingSenderId;
import.meta.env.VITE_APP_FIREBASE_appId;
*/
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_apiKey,
  authDomain: import.meta.env.VITE_APP_FIREBASE_authDomain,
  projectId: import.meta.env.VITE_APP_FIREBASE_projectId,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_messagingSenderId,
  appId: import.meta.env.VITE_APP_FIREBASE_appId,
};

/* const firebaseConfig = {
  apiKey: "AIzaSyCvecr-6k4nSZ3Imf6dm0_9s44Rf0aaOD8",
  authDomain: "my-ecommerce-947aa.firebaseapp.com",
  projectId: "my-ecommerce-947aa",
  storageBucket: "my-ecommerce-947aa.appspot.com",
  messagingSenderId: "695790982197",
  appId: "1:695790982197:web:4bc349465a6db8f4394d7c",
}; */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
