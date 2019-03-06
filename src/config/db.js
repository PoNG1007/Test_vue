import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyAXoXHgaLodN02D3flRKesRcvPe956KUeg",
    authDomain: "colors-vue.firebaseapp.com",
    databaseURL: "https://colors-vue.firebaseio.com",
    projectId: "colors-vue",
    storageBucket: "colors-vue.appspot.com",
    messagingSenderId: "515964869270"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()