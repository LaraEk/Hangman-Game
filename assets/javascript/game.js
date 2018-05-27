//  ----------------------------
//  ----------------------------
//  ----------------------------
//  ------- THIS IS WHERE I'M PUTTING JS/JQ THAT I'M SURE WORKS (and not all notes because that's too many notes)
//  ----------------------------
//  ----------------------------
//  ----------------------------
$(document).ready(function() {

    // Here are the arrays of names.  NOTE: All lowercase so as to lessen confusion.
    var elfWords = ["galadriel","arwen","elendil","elbereth","legolas","glorfindel"];
    var menWords = ["aragorn","denethor","boromir","faramir","theoden","eowyn"];
    var ardaWords = ["eriador","moria","lothlorien","gondor","rohan","mordor"];

    // ~:~:~:~
    // -----------------------------------------------------------
    // Here are the vars.  All the vars. 

    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var myguesses = "";
    
    // ~:~:~:~
    // -----------------------------------------------------------
    // Here are the functions.

    document.onkeypress = function(event)
{

    var pickaword = elfWords[Math.floor(Math.random() * elfWords.length)];
    var userGuess = event.key;

}


    // The End! \o/
    // ~:~:~:~
    // -----------------------------------------------------------


    // Here are the functions.  We function well.

        // -- functions for choosing Elf/Men/Arda Words --    
    function chooseElfWord() {
        return elfWords[Math.floor(Math.random() * elfWords.length)];
    }

    function chooseMenWord() {
        return menWords[Math.floor(Math.random() * menWords.length)];
    }

    function chooseArdaWord() {
        return ardaWords[Math.floor(Math.random() * ardaWords.length)];
    }
        // -- end choose word functions --

 // let's put a for-loop in there.  everyone loves for-loops.
        for (var i = 0; i < pickaword.length; i++){
        pickaword[i] = "_ ";
    }
 // does this function make sense?  I'm not sure!  No one knows~
 
 // check the jumbotron-name-caller (that ranjan uses in class) for removing items from an array!!!




    // ~:~:~:~
    // -----------------------------------------------------------    
    // Here are the functions as they are called.  Make It So.

// NOTE: THIS ONE WORKS -------------- NOTE: THIS ONE WORKS 
    $("#elfbutton").on("click", function() {
        $("#elfinfo").show();
        $("#meninfo").hide();
        $("#ardainfo").hide();
      });
  // NOTE: THIS ONE WORKS -------------- NOTE: THIS ONE WORKS 
    // add bit here with choosing the elfarray
    
    function chooseElfWord() {
        console.log(result)
    }



    if(guessesLeft == 0)
    {
        alert('You Lost! You are not a psychic!');
        losses = losses + 1;
        //resets
        guessesLeft = 9;
        myguesses  = "";
    }
 

    // Here are some notes:

    if
    elseif
    else


    while (something like x <10) {
        x++;
    }

    wins++;
    losses++;


    // -----------------------------------------------------------
    // HERE ARE THE THINGS I NEED TO DO
    
    *** // when an array (Elf/Men/Ard) is selected, that array is chosen from

    *** // A function for putting the right number of _s
    
    *** // A function (?) for when correct letter key is pressed, it appears in the correct _
    
    *** // When incorrect letter key is pressed, append to a list of incorrect keys
        // -- and decrease the number of tries left

    *** // When incorrect letter key is double-pressed, ignore because it has already been tried
        // -- does this mean it's removed from initial array?
    
    *** // When word guessed fully correctly, "YOU WIN! Play again? [confirm box]"
    *** // When word guesses run out of tries, "YOU LOSE! Play again? [confirm box]"



