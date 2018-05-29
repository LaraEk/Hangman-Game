$(document).ready(function() {

// NOTE: THIS SECTION WORKS -------------- NOTE: THIS SECTION WORKS 
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
// NOTE: THIS SECTION WORKS -------------- NOTE: THIS SECTION WORKS 
});

// -------------------------- NEXT SECTION ---------------------- //

document.onkeypress = function(event) {
    
    // Here are the vars and the arrays of names.  NOTE: All lowercase so as to lessen confusion.

    var elfWords = ["galadriel","arwen","elendil","elbereth","legolas","glorfindel"];
    var menWords = ["aragorn","denethor","boromir","faramir","theoden","eowyn"];
    var ardaWords = ["eriador","moria","lothlorien","gondor","rohan","mordor"];

    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var myguesses = [];
    


    var pickaword = elfWords[Math.floor(Math.random() * elfWords.length)];
    var userGuess = event.key;
//Fail condition
// on UserGuess -> check myguesses -> If not in my guesses -> append myguesses with letter and deincrement

    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

   for (var i = 0; i < pickaword.length; i++){
       pickaword[i] = "_ ";
   }

    if(userGuess == computerGuess)
    {
        wins = wins + 1; 
        guessesLeft = 9;
        myguesses  = myguesses.push(userGuess);
    }
    else
    {
        guessesLeft = guessesLeft - 1;
    }
    if(guessesLeft == 0)
    {
        alert('You Lost! You are not a psychic!');
        losses = losses + 1;
        guessesLeft = guessesLeft - 1;
        myguesses  = "";
    }


    var winsGame= document.getElementById("winsdiv");
    winsGame.innerHTML = wins;
    var lossesGame= document.getElementById("lossesdiv");
    lossesGame.innerHTML = losses;
    myguesses = myguesses + "," + event.key;
    var showGuesses = document.getElementById("numberofguesses");
    showGuesses.innerHTML = myguesses;
    var numberOfGuesses = document.getElementById("guessesleft");
    numberOfGuesses.innerHTML = guessesLeft;


}

    // The End! \o/
    // ~:~:~:~
    // -----------------------------------------------------------


 // check the jumbotron-name-caller (that ranjan uses in class) for removing items from an array!!!