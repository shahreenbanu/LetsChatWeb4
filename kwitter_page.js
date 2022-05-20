var firebaseConfig = {
    apiKey: "AIzaSyA--5MN97eVAsMXbI9n7k29pXoc8ut0sQ4",
    authDomain: "kwitter-8683b.firebaseapp.com",
    databaseURL: "https://kwitter-8683b-default-rtdb.firebaseio.com",
    projectId: "kwitter-8683b",
    storageBucket: "kwitter-8683b.appspot.com",
    messagingSenderId: "1049571778044",
    appId: "1:1049571778044:web:6145c1f4330a12320aa679",
    measurementId: "G-8RDM6PF06P"
  };
  firebase.initializeApp(firebaseConfig);
  var user_name = localStorage.getItem("user");
  var room_name = localStorage.getItem("room");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("room");
    window.location="index.html";
}
function send(){
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like:0
    });
       
   document.getElementById("message").value = "";
}