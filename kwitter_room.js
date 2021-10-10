
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyA_vwThzHS4OnRBI12_4yANPO8I1hWIk2w",
      authDomain: "kwitter-social-app.firebaseapp.com",
      databaseURL: "https://kwitter-social-app-default-rtdb.firebaseio.com",
      projectId: "kwitter-social-app",
      storageBucket: "kwitter-social-app.appspot.com",
      messagingSenderId: "613977004832",
      appId: "1:613977004832:web:9ab26ab2824f4f13a09545",
      measurementId: "G-YCY7LVJ49X"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
