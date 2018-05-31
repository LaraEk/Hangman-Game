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
        console.log(pickaword);
        var userGuess = event.key;
        var pickedword = [];

    for(var i = 0; i < pickaword.length; i++){
        pickedword[i] = "_ ";
    }
    $("#wordispicked").html(pickedword.join(' '));

    console.log("console log this when this section works");
    console.log(pickedword);

    document.onkeypress = function(event)
    { console.log(event.type);

        myguesses = myguesses + "," + event.key;
        alert(myguesses + ", and you guessed " + event.key); // WHY DOES THIS WORK AND THE OTHER ONE DOESN'T??!?!?!

        if (letters.includes(event.key)) {
            console.log("yeah it's a letter");
            for(var z = 0; z <pickaword.length; z++) {
                if (pickaword[z] === userGuess) {
                    pickedword[z] = userGuess;
                    $("#lettersguessed").html(myguesses);
                    guessesLeft = guessesLeft - 1;
                        //Need to update the HTML
                        $("#guessesleft").html(guessesLeft);
                        console.log(guessesLeft);
                } else {
                    $("#lettersguessed").html(myguesses);
                    alert("that letter was not in the word");
                    console.log("nope");
                    guessesLeft = guessesLeft - 1;
                        $("#guessesleft").html(guessesLeft);
                        console.log(guessesLeft);                   
                } // to the Z PICKAWORD IF/ELSE
            } // to the FOR   
        } else {
                console.log("that ain't no letter");
                alert("That is not, in fact, a letter.");
                }
            
            


            if(guessesLeft == 0)   // I guess this needs to be inside a function?  But it's not even deincrementing anymore,so
            {
                alert('You Lost! Insert Balrog Here!');
                losses = losses + 1;
                resetGame();
            }    

            if(pickedword.indexOf("_") === -1) {
                wins = wins + 1;
                alert('You Lost! Insert Balrog Here!');
                resetGame();
            }

            function resetGame() {
                guessesLeft = 10
                myguesses = "";
                alert("To start a new game, choose Elves, Men, or Arda.")
            }
        }

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

    // The End! \o/
    // ~:~:~:~
    // -----------------------------------------------------------