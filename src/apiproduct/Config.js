import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDJzhePRZZqbla5yootihyx484ucUvnqaQ",
    authDomain: "product-manager-7eaf1.firebaseapp.com",
    databaseURL: "https://product-manager-7eaf1.firebaseio.com",
    projectId: "product-manager-7eaf1",
    storageBucket: "product-manager-7eaf1.appspot.com",
    messagingSenderId: "712831058312",
    appId: "1:712831058312:web:07e8a8648ff20a45e57a3d"
  };
  // Initialize Firebase
  
  const store=firebase.initializeApp(firebaseConfig);
  const db=store.firestore()
  export {db}