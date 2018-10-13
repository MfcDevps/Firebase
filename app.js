// Initialize Firebase
var config = {
    apiKey: "AIzaSyCtH3cxa1UsYy54kiS_WL6Ql9YCxmHv0lY",
    authDomain: "fir-web-c753c.firebaseapp.com",
    databaseURL: "https://fir-web-c753c.firebaseio.com",
    projectId: "fir-web-c753c",
    storageBucket: "fir-web-c753c.appspot.com",
    messagingSenderId: "49210794548"
};
firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore(); // Return all databases in firestore

// Disable deprecated features
db.settings({
timestampsInSnapshots: true
});

const member = document.getElementById("name");
const email = document.getElementById("email");
const departement = document.getElementById("departement");
const save = document.getElementById("save");
const status = document.getElementById("status");

save.addEventListener('click',function(){
    var memberName = member.value;
    var memberEmail = email.value;
    var memberDept = departement.value;

    const refdb = db.collection("members").doc(memberName);
    status.style.color = "black";
    status.innerHTML = "Please Wait..";

    refdb.set({
        name:memberName,
        email:memberEmail,
        departement:memberDept
    }).then(function(){
        status.style.color = "#41ca41";
        status.innerHTML = "Data inserted succesfully :";
    }).catch(function(error){
        status.style.color = "red";
        status.innerHTML = "An error "+error;
    })
});
        