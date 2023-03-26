var firebaseConfig = {
    apiKey: "AIzaSyBr4mJmvxRazZdYZxFHEr_ndcxQdGdlcE4",
    authDomain: "demo10-f4037.firebaseapp.com",
    databaseURL: "https://demo10-f4037-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "demo10-f4037",
    storageBucket: "demo10-f4037.appspot.com",
    messagingSenderId: "491019319073",
    appId: "1:491019319073:web:28cfc8ae13f721f053b060",
    measurementId: "G-YHQDM91L52"
  };
  
  // Initialize Firebase
  firebase.database = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    stadium_names = childKey;
   //Start code

   //End code
   });});}
getData();
