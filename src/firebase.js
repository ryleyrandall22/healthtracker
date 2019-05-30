import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAxfTHJHGbFz63FvptaegctR8tGxBgi8e0",
  authDomain: "healthtracker-a727b.firebaseapp.com",
  databaseURL: "https://healthtracker-a727b.firebaseio.com",
  projectId: "healthtracker-a727b",
  storageBucket: "",
  messagingSenderId: "277453342127",
  appId: "1:277453342127:web:6768d539d402bced"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
