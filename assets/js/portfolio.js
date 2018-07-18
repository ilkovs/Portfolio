// Initialize Firebase
var config = {
    apiKey: "AIzaSyB6jU19gZD8jTOSPfATmkpw7YPbJAFyyGM",
    authDomain: "mywebsite-47249.firebaseapp.com",
    databaseURL: "https://mywebsite-47249.firebaseio.com",
    projectId: "mywebsite-47249",
    storageBucket: "",
    messagingSenderId: "756088636112"
};

firebase.initializeApp(config);

$(".submit").on("click", function (event) {

    event.preventDefault();
    var contactName = $("#name").val().trim();
    var contactEmail = $("#email").val().trim();
    var contactMessage = $("#msg").val().trim();

    console.log(contactName);

    var newContact = {
        name: contactName,
        email: contactEmail,
        message: contactMessage
    };

    database.ref().push(newContact);
    $("#name").val("");
    $("#email").val("");
    $("#msg").val("");

});