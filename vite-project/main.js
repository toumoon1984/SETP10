// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { fetchHistoryData } from "./my_modules/fetch-history-data";
import { submitData } from "./my_modules/submit-data";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKluJeg7rF4IcV4tpxq6RUE84bFBbaXNQ",
  authDomain: "daily-report-b7b46.firebaseapp.com",
  projectId: "daily-report-b7b46",
  storageBucket: "daily-report-b7b46.appspot.com",
  messagingSenderId: "52413990038",
  appId: "1:52413990038:web:bc4ad50d09e62494b3aeb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Cloud Firestore の初期化
const db = getFirestore(app);



// Cloud Firestore から取得したデータを表示するメソッドを実行する。
if(document.getElementById("js_history")){
  fetchHistoryData(getDocs, collection, db);
}


// Cloud Firestore にデータを送信する。
// const submitData = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);

//   try{
//     const docRef = await addDoc(collection(db,"report"),{
//       date: new Date(),
//       name: formData.get("name"),
//       word: formData.get("work"),
//       comment: formData.get("comment"),
//     });
//     console.log("Document written with ID: ", docRef.id);
//     console.log(formData.get("work"));    
//   }catch (e){
//     console.error("Error adding document: ", e);
//   }
// };


// Cloud Firestoreにデータを送信する。
if(document.getElementById("js_form")){
  document.getElementById("js_form").addEventListener("submit", (e) => submitData(e, addDoc, collection, db));
}


