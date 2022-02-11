
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAWOKNVHsF1TaGgVUtHfEOzCyz3X8VOQJw",
  authDomain: "turtleman-ioll.firebaseapp.com",
  projectId: "turtleman-ioll",
  storageBucket: "turtleman-ioll.appspot.com",
  messagingSenderId: "768890067079",
  appId: "1:768890067079:web:0db449aff0a17bf039c022"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
