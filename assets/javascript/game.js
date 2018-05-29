// NOTE: THIS SECTION WORKS -------------- NOTE: THIS SECTION WORKS // NOTE: THIS SECTION WORKS -------------- NOTE: THIS SECTION WORKS 
$(document).ready(function() {

$("#elfbutton").on("click", function() {
    $("#elftitle").show();
    $("#elfinfo").show();
    $("#mentitle").hide();
    $("#meninfo").hide();
    $("#ardatitle").hide();
    $("#ardainfo").hide();
  });

  $("#menbutton").on("click", function() {
    $("#elftitle").hide();
    $("#elfinfo").hide();
    $("#mentitle").show();
    $("#meninfo").show();
    $("#ardatitle").hide();
    $("#ardainfo").hide();
  });

  $("#ardabutton").on("click", function() {
    $("#elftitle").hide();
    $("#elfinfo").hide();
    $("#mentitle").hide();
    $("#meninfo").hide();
    $("#ardatitle").show();
    $("#ardainfo").show();
  });
});
// NOTE: THIS SECTION WORKS -------------- NOTE: THIS SECTION WORKS // NOTE: THIS SECTION WORKS -------------- NOTE: THIS SECTION WORKS 


// -------------------------- NEXT SECTION ---------------------- //


// NOTE: Here are the vars and the arrays of names.  NOTE: All lowercase so as to lessen confusion.
var elfWords = ["galadriel","arwen","elendil","elbereth","legolas","glorfindel"];
var menWords = ["aragorn","denethor","boromir","faramir","theoden","eowyn"];
var ardaWords = ["eriador","moria","lothlorien","gondor","rohan","mordor"];

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var myguesses = "";



$(document).ready(function() {

    console.log("please console log something god damn");


    $("#buttons").on("click", "#elfbutton", function(event) {

        var pickaword = elfWords[Math.floor(Math.random() * elfWords.length)];
        var userGuess = event.key;
        var pickedword = [];

    for(var i = 0; i < pickaword.length; i++){
        pickedword[i] = "_ ";
    }

    console.log("console log this when this section works");
    console.log(pickedword);

    if (letters.includes(userGuess)) {
        console.log("yeah it's a letter");
         //  forEach("<div>" in pickedword){
//            if ("<div>" = userGuess);
            // exchange the _ with a letter
            // increment guessesmade
            // deinc guessesleft
            // incl guessed letter in MyGuesses}
           
//            elseif //not 
            // do the things show it's wrong letter

    }
    else {
        console.log("that ain't no letter");
    }













// NOTE: THIS SECTION WORKS -------------- NOTE: THIS SECTION WORKS // NOTE: THIS SECTION WORKS -------------- NOTE: THIS SECTION WORKS 
    var winsGame= document.getElementById("winsdiv");
    winsGame.innerHTML = wins;
    var lossesGame= document.getElementById("lossesdiv");
    lossesGame.innerHTML = losses;
    myguesses = myguesses + "," + event.key;
    var showGuesses = document.getElementById("numberofguesses");
    showGuesses.innerHTML = myguesses;
    var numberOfGuesses = document.getElementById("guessesleft");
    numberOfGuesses.innerHTML = guessesLeft;
// NOTE: THIS SECTION WORKS -------------- NOTE: THIS SECTION WORKS // NOTE: THIS SECTION WORKS -------------- NOTE: THIS SECTION WORKS 
    });
    

});

    // The End! \o/
    // ~:~:~:~
    // -----------------------------------------------------------