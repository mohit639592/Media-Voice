import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFLZBEDU1SoYCdzOAqy58emc2v3HW_gRM",
  authDomain: "media-x-104d2.firebaseapp.com",
  projectId: "media-x-104d2",
  storageBucket: "media-x-104d2.firebasestorage.app",
  messagingSenderId: "763389190073",
  appId: "1:763389190073:web:94d1de3ac9c2652e6fe068",
  measurementId: "G-NR9RJJTE82"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);