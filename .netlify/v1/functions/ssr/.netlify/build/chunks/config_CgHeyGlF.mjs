import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBemDwqotDCCFeLLbmt9wT0koSUHUM5TN8",
  authDomain: "astro-authentication-4b8b1.firebaseapp.com",
  projectId: "astro-authentication-4b8b1",
  storageBucket: "astro-authentication-4b8b1.appspot.com",
  messagingSenderId: "725315520198",
  appId: "1:725315520198:web:c6aa874d833348e168b9c7"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebase = { app, auth };

export { firebase as f };
