// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore";


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



// Cloud Firestoreの初期化
const db = getFirestore(app);


// Cloud Firestoreから取得したデータを表示するメソッド
const fetchHistoryDate = async () => {
  let tags = "";

  // reportsコレクションのデータを取得
  const querySnapshot = await getDocs(collection(db,"report"));

  // データをテーブル表の形式に合わせてHTMLに挿入
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    tags += `<tr><td>${doc.data().date}</td><td>${doc.data().name}</td><td>${doc.data().word}</td><td>${doc.data().comment}</td></tr>`
  });

  document.getElementById("js_history").innerHTML = tags;
};
  


// Cloud Firestoreから取得したデータを表示するメソッドを実行する。
if(document.getElementById("js_history")){
  fetchHistoryDate();
}





import './style.css'  

import Splide from '@splidejs/splide';

// デフォルトのテーマ
import '@splidejs/splide/css';

// または、そのほかのテーマ
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';

// あるいは、コアスタイルのみ
import '@splidejs/splide/css/core';



new Splide( '.splide',{
  type   : 'loop',
} ).mount();