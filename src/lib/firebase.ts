// 🔥 FIREBASE INIT MODULE à jour basé sur ta configuration

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkelgaG-5EPFDRmjEoRFn2sBGvxo0O7KU",
  authDomain: "novacore-36982.firebaseapp.com",
  projectId: "novacore-36982",
  storageBucket: "novacore-36982.firebasestorage.app",
  messagingSenderId: "910416811852",
  appId: "1:910416811852:web:1ffa1157a323e0320e61e9",
  measurementId: "G-7535DCEBNT",
};

// ✅ Initialisation safe pour éviter les doublons
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 🔥 Initialiser Firestore (Base de données)
const db = getFirestore(app);

// 📈 Initialiser Analytics (optionnel mais configuré)
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { db, analytics };
