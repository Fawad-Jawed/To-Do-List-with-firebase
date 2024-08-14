  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  // import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { getFirestore, collection, addDoc ,getDocs} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

  
const firebaseConfig = {
    apiKey: "AIzaSyAHGDb4o7pJZw3eOugSaVCEFiTtzKd7viI",
    authDomain: "class-1-39b59.firebaseapp.com",
    projectId: "class-1-39b59",
    storageBucket: "class-1-39b59.appspot.com",
    messagingSenderId: "401024482096",
    appId: "1:401024482096:web:ab1eda87860e353c2326f5",
    measurementId: "G-Q4YM8FM5YZ"
  };

  const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);
  const db = getFirestore(app);

  let btn = document.getElementById("addBtn")


btn.addEventListener("click",async ()=>{
    let name = document.getElementById("inputBox")
try {
    const docRef = await addDoc(collection(db, "users"), {
    name: name.value
    });
    console.log(name.value);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ");
  }
});


const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});













// import { db } from "./firebase.mjs";
// import {  collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-Firestore.js";

// 

