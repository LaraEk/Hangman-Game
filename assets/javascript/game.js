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
var elfWords = ["galadriel"]

//"arwen","elendil","elbereth","legolas","glorfindel"];
var menWords = ["aragorn","denethor","boromir","faramir","theoden","eowyn"];
var ardaWords = ["eriador","moria","lothlorien","gondor","rohan","mordor"];

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var myguesses;

var userGuess = event.key;
var pickedword;


function result() {
    var wordholder = document.getElementById("#wordispicked");
}


$(document).ready(function() {

    console.log("please console log something already");


    $("#buttons").on("click", "#elfbutton", function(event) {

        var pickaword = elfWords[Math.floor(Math.random() * elfWords.length)];

    for(var i = 0; i < pickaword.length; i++){
        pickedword[i] = "_ ";
        $("#wordispicked").html(pickedword);
    }

    console.log("console log this when this section works");
    console.log(pickaword);
    console.log(pickedword);

    document.onkeypress = function(event)
    { console.log(event.type);

        myguesses = myguesses + "," + event.key;
        alert(myguesses + ", and you guessed " + event.key); // WHY DOES THIS WORK AND THE OTHER ONE DOESN'T??!?!?!

        if (letters.includes(event.key)) {
            console.log("yeah it's a letter");
            for(var z = 0; z <pickaword.length; z++) {
                if (pickaword[z] === userGuess) {

                    pickedword.splice()
                    pickedword[z] = userGuess;
                    $("#lettersguessed").append(userGuess);
                    guessesLeft = guessesLeft - 1;
                    console.log(guessesLeft);
                } // to the IF pickedword
            } // to the FOR   
//                else{                                                 // wtf why is this an Unexpected Token Else everything is in curly brackets
//                    console.log("that letter was not in the word");
//                    alert("nope");
//                    $("#lettersguessed").append(userGuess);
//                    guessesLeft = guessesLeft - 1;
//                    console.log(guessesLeft);}            
//                }              
            } // to the IF letters.includes

                // THE CODE ABOVE IS SUPPOSED TO:
                // exchange the _ with a letter
                // incl guessed letter in MyGuesses
                // deinc guessesleft (ONCE!)
            
        else {
            console.log("that ain't no letter");
            alert("That is not, in fact, a letter.");
            }
        
        }

        if(guessesLeft == 0)   // I guess this needs to be inside a function?  But it's not even deincrementing anymore,so
        {
            alert('You Lost! Insert Balrog Here!');
            losses = losses + 1;
            guessesLeft = 10
        }



//    } // @@@ this used to be for onkeypress @@@



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