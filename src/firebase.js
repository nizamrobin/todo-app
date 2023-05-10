import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlo8_JrUC8kC6SLJypVdYQXzbQioFA090",
  authDomain: "todo-app-f3cd3.firebaseapp.com",
  databaseURL:
    "https://todo-app-f3cd3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-app-f3cd3",
  storageBucket: "todo-app-f3cd3.appspot.com",
  messagingSenderId: "585962908954",
  appId: "1:585962908954:web:39295c59bbd7ea9926d0a3",
};

export const app = initializeApp(firebaseConfig);
