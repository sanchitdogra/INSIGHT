  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBsOHKoFC1JicwH3esVYsU0oQyFb4oh6to",
    authDomain: "insight-1ac38.firebaseapp.com",
    databaseURL: "https://insight-1ac38-default-rtdb.firebaseio.com",
    projectId: "insight-1ac38",
    storageBucket: "insight-1ac38.appspot.com",
    messagingSenderId: "622870987070",
    appId: "1:622870987070:web:6c9f6f8cf7a0fd9dd5ec6f",
    measurementId: "G-FL1WX63WV4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit",submitForm);

var userInfo

function submitForm(e)
{
  e.preventDefault();

  //Get input values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();

  alert("Your feedback has been submitted successfully. It will be published after review.")

}

// Save infos to firebase
function saveContactInfo(name, email, message)
{
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  })
}

var ref = firebase.database().ref();

ref.on("value", function(snapshot) 
{
   //console.log(snapshot.val());
   userInfo = snapshot.val();
   console.log(userInfo);
}, function (error) 
{
   console.log("Error: " + error.code);
});

  //Reference contactInfo collections
  let contactInfo = firebase.database().ref("feedback/"+name);

// //function to save file
// function uploadFile(){
      
//   // Created a Storage Reference with root dir
//   var storageRef = firebase.storage().ref();
//   // Get the file from DOM
//   var file = document.getElementById("files").files[0];
  
//   //dynamically set reference to the file name
//   var thisRef = storageRef.child(file.name);

//   //put request upload file to firebase storage
//   thisRef.put(file).then(function(snapshot) {
//      alert("File Uploaded")
//      console.log('Uploaded a blob or file!');
//   });
// }


