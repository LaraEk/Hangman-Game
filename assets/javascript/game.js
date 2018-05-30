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

    console.log("please console log something already");


    $("#buttons").on("click", "#elfbutton", function(event) {

        var pickaword = elfWords[Math.floor(Math.random() * elfWords.length)];
        var userGuess = event.key;
        var pickedword = [];

    for(var i = 0; i < pickaword.length; i++){
        pickedword[i] = "_ ";
        $("#wordispicked").html(pickedword);
    }

    console.log("console log this when this section works");
    console.log(pickedword);

    document.onkeypress = function(event)
    { console.log(event.type);

        myguesses = myguesses + "," + event.key;

        if (letters.includes(event.key)) {
            console.log("yeah it's a letter");
            for(var z = 0; z <pickedword.length; z++) {
                if (pickedword[z] === userGuess) {
                pickedword[z] = userGuess;
                $("#lettersguessed").append(userGuess);
                guessesLeft = guessesLeft - 1;
                console.log(guessesLeft);}            }                
            }

                // THE CODE ABOVE IS SUPPOSED TO:
                // exchange the _ with a letter
                // incl guessed letter in MyGuesses
                // deinc guessesleft (ONCE!)
            
        else {
            console.log("that ain't no letter");
            alert("That is not, in fact, a letter.");
            }
        
        }

        if(guessesLeft == 0)
        {
            alert('You Lost! Insert Balrog Here!');
            losses = losses + 1;
            guessesLeft = 10
        }    


//    } // @@@ this is for onkeypress @@@



    var winsGame= document.getElementById("winsdiv");
    winsGame.innerHTML = wins;

    var lossesGame= document.getElementById("lossesdiv");
    lossesGame.innerHTML = losses;
    
    var numberOfGuessesLeft = document.getElementById("guessesleft"); // guessesLeft = #guessesleft
    numberOfGuessesLeft.innerHTML = guessesLeft;
    
    var showGuesses = document.getElementById("lettersguessed"); // #lettersguessed = myguesses
    showGuesses.innerHTML = myguesses;

    }); // @@@ this is for buttons on click elfbutton @@@
    

});

    // The End! \o/
    // ~:~:~:~
    // -----------------------------------------------------------