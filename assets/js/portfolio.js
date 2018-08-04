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

var database = firebase.database();

$(".Submit").on("click", function (event) {

    event.preventDefault();
    var contactName = $("#name").val().trim();
    var contactEmail = $("#email").val().trim();
    var contactMessage = $("#msg").val().trim();

    alert("Thank you for getting in touch!");

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

function changeBackground() {
    var images = [
        "https://png.pngtree.com/thumb_back/fw800/back_pic/04/48/50/00585a3568a0a7d.jpg",
        "https://static.sharedbox.com/assets/bg/et/3-medium.jpg",
        "https://images5.alphacoders.com/335/335597.jpg",
        "https://us.123rf.com/450wm/serg036/serg0361706/serg036170600082/79393181-hexagons-abstract-geometric-background-for-material-modern-design-3d-illustration-works-for-text-and.jpg?ver=6",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpxnFH6sA-z18bw5IHWmFbhxTjKKqtweyzETA03rjB0mkY0Ve",
        "http://freecodesource.com/myspace-graphics/images_db/242/prod_1011_39718.jpg"];

    setInterval(function () {
        var body = Math.floor(Math.random() * images.length);

        //make Sure it's working
        console.log(body);
        
        var selectImage = images[body];
        document.body.style.background = selectImage;
    }, 3000);
};

changeBackground();