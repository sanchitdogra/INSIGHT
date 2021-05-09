  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBDrifG3dWp6JD-S6U42UDxOxCoh-_00sM",
    authDomain: "insight-c7f23.firebaseapp.com",
    databaseURL: "https://insight-c7f23-default-rtdb.firebaseio.com",
    projectId: "insight-c7f23",
    storageBucket: "insight-c7f23.appspot.com",
    messagingSenderId: "42626617168",
    appId: "1:42626617168:web:45eff910ebfa84d279a655"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


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


