import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ9VCozrdOYckiItJPAtPpngSe0zeJsSc",
  authDomain: "learnig-auth-context.firebaseapp.com",
  projectId: "learnig-auth-context",
  storageBucket: "learnig-auth-context.appspot.com",
  messagingSenderId: "291399050448",
  appId: "1:291399050448:web:f8089b9397f019374c6ad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;