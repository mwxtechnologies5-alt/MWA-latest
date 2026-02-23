import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAguGx8ZAniFPvz5rKl7jZ2MxQdqKgOLSM",
  authDomain: "studio-6927735343-9faf5.firebaseapp.com",
  projectId: "studio-6927735343-9faf5",
  storageBucket: "studio-6927735343-9faf5.firebasestorage.app",
  messagingSenderId: "11026210267",
  appId: "1:11026210267:web:3cadeb2625a5288f13dbfe"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
