import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCSpRyd1W0rm5GGP01tdkp50X-vcJnTxy8",
    authDomain: "photohunt-843a4.firebaseapp.com",
    databaseURL: "https://photohunt-843a4.firebaseio.com",
    projectId: "photohunt-843a4",
    storageBucket: "photohunt-843a4.appspot.com",
    messagingSenderId: "284779579452"
  };
firebase.initializeApp(config)
export default firebase