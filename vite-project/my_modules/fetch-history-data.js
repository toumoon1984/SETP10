
// Cloud Firestore から取得したデータを表示するメソッド
export const fetchHistoryData = async (getDocs, collection, db) => {
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


