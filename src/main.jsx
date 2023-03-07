import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO5vYSLgSUBaT_-LiUFrG-Yuoq4iF3lE0",
  authDomain: "martialdojo-789fa.firebaseapp.com",
  projectId: "martialdojo-789fa",
  storageBucket: "martialdojo-789fa.appspot.com",
  messagingSenderId: "368722813816",
  appId: "1:368722813816:web:064e0658a3277aabe4de8d",
};

// Initialize Firebase
//borramos la declaración del app que trae por defecto
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
