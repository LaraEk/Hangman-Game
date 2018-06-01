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


// Here are the vars and the arrays of names.  NOTE: All lowercase so as to lessen confusion.
var elfWords = ["galadriel","arwen","elendil","elbereth","legolas","glorfindel"];
var menWords = ["aragorn","denethor","boromir","faramir","theoden","eowyn"];
var ardaWords = ["eriador","moria","lothlorien","gondor","rohan","mordor"];

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var myguesses = "";
// Vars and arrays of names end. ------------------------------------------------------------ //


// Main document ready function ------------------------------------------------------------ //
$(document).ready(function() {

    console.log("the game begins");


    $("#buttons").on("click", "#elfbutton", function(event) {

// --------------- This picks a random word ('pickaword' ) and stores its underscore array in 'pickedword' ---------- //      
        var pickaword = elfWords[Math.floor(Math.random() * elfWords.length)];
        console.log(pickaword);
        var pickedword = [];

        for(var i = 0; i < pickaword.length; i++){
            pickedword[i] = "_ ";
        }

        $("#wordispicked").html(pickedword.join(' '));

        console.log("console log this when this section works");
        console.log(pickedword);
// --------------- This picks a random word ('pickaword' ) and stores its underscore array in 'pickedword' ---------- //      



// --------------- This is the part where the player chooses a letter and it gets put in the right underscore place.  ---------- //      
        document.onkeypress = function(event)
        { console.log(event.type);
            var userGuess = event.key;
            var correctLetter = false;
            myguesses = myguesses + "," + event.key;

            if (letters.includes(event.key)) {
                console.log("yeah it's a letter");
                for(var z = 0; z <pickaword.length; z++) {
                    if (pickaword[z] === userGuess) {
                        correctLetter = true;
                        pickedword[z] = userGuess;
                        document.querySelector("#wordispicked").innerHTML = pickedword.join(' ');

                    } 
                } // to the FOR   
            } else {
                    console.log("that ain't no letter");
                    alert("That is not, in fact, a letter.");
                    }
                
                

                if(correctLetter == false)
                {
                        document.querySelector("#lettersguessed").innerHTML = myguesses;
    //                          $("#lettersguessed").html(myguesses);
                        alert("that letter was not in the word");

                        console.log(guessesLeft);
                        console.log("nope");
                        guessesLeft = guessesLeft - 1;
                        document.querySelector("#guessesleft").innerHTML = guessesLeft;
    //                          $("#guessesleft").html(guessesLeft);
                        console.log(guessesLeft);                   

                    } // to the Z PICKAWORD IF/ELSE


                if(guessesLeft == 0)   // I guess this needs to be inside a function?  But it's not even deincrementing anymore,so
                {
                    alert('You Lost! Insert Balrog Here!');
                    losses = losses + 1;
                    document.querySelector("#lossesdiv").innerHTML = losses;            
                    resetGame();
                }    

                // if(pickedword.indexOf("_") === -1) {
                //     wins = wins + 1;
                //     document.querySelector("#winsdiv").innerHTML = wins;            
                //     alert('You Lost! Insert Balrog Here!');
                //     resetGame();
                // }

                function resetGame() {
                    document.querySelector("#winsdiv").innerHTML = wins;
                    document.querySelector("#lossesdiv").innerHTML = losses;            
                    guessesLeft = 10
                    myguesses = "";
                    alert("To start a new game, choose Elves, Men, or Arda.")
                }
            }
// --------------- This is the end of the part where the player chooses a letter and it gets put in the right underscore place.  ---------- //      

    var winsGame= document.getElementById("winsdiv");
    winsGame.innerHTML = wins;

    var lossesGame= document.getElementById("lossesdiv");
    lossesGame.innerHTML = losses;
    
    var numberOfGuessesLeft = document.getElementById("guessesleft"); // guessesLeft = #guessesleft
    numberOfGuessesLeft.innerHTML = guessesLeft;
    
    var showGuesses = document.getElementById("lettersguessed"); // #lettersguessed = myguesses
    showGuesses.innerHTML = myguesses;

    }); // @@@ this is for buttons on click elfbutton @@@
    

});  // @@@ this is for document ready function @@@
// Finish Main document ready function ------------------------------------------------------------ //


    // The End! \o/
    // ~:~:~:~
    // -----------------------------------------------------------