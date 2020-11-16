import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyCuGrO-JblYbZLHoQek1USOwMJz5Rj2W0c",
    authDomain: "react-chat-7d931.firebaseapp.com",
    databaseURL: "https://react-chat-7d931.firebaseio.com",
    
  };

  firebase.initializeApp(config);
 
  export const auth = firebase.auth;
  export const db =  firebase.database();


 