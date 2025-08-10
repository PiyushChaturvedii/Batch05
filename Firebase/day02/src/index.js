// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  deleteDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5KqeEBYelitKRt1o-aJRCJAjVfNUKKsk",
  authDomain: "libdata-281c2.firebaseapp.com",
  projectId: "libdata-281c2",
  storageBucket: "libdata-281c2.firebasestorage.app",
  messagingSenderId: "563660092605",
  appId: "1:563660092605:web:8da9ee44935c044cb8f3d4",
  measurementId: "G-95E6ZDYL99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, "movies");

getDocs(colRef)
  .then((data) => {
    let movies = [];
    data.docs.forEach((document) => {
      movies.push({ ...document.data(), id: document.id });
      console.log(movies);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// onSnapshot(colRef, (data) => {
//   let movies = [];
//   data.docs.forEach((document) => {
//     movies.push({ ...document.data(), id: document.id });
//   });
//   console.log(movies);
// });
const addForm = document.querySelector(".add");
addForm.addEventListener("submit", (event) => {
  console.log(addForm.name.value);

  event.preventDefault();
  addDoc(colRef, {
    name: addForm.name.value,
    description: addForm.description.value,
  }).then(() => {
    addForm.reset();
  });
});

const deleteForm = document.querySelector(".delete");
deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const documentReference = doc(db, "movies", deleteForm.id.value);
  deleteDoc(documentReference).then(deleteForm.reset());
});
