//  ----------------------------
//  ----------------------------
//  ----------------------------
//  ------- THIS IS WHERE I'M PUTTING JS/JQ NOTES. 
//  ----------------------------
//  ----------------------------
//  ----------------------------

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



// ----------------------------------------------------------------------------------------------------


    // Here are the functions.  We function well.

        // -- functions for choosing Elf/Men/Arda Words --    
//    function chooseElfWord() {
//       return elfWords[Math.floor(Math.random() * elfWords.length)];
}

//    function chooseMenWord() {
//        return menWords[Math.floor(Math.random() * menWords.length)];
    }

//    function chooseArdaWord() {
//        return ardaWords[Math.floor(Math.random() * ardaWords.length)];
    }
        // -- end choose word functions --

 // let's put a for-loop in there.  everyone loves for-loops.
 // does this function make sense?  I'm not sure!  No one knows~

     // -----------------------------------------------------------    
    // Here are the functions as they are called.  Make It So.

    // add bit here with choosing the elfarray
    
//    function chooseElfWord() {
//        console.log(result)
}



//    if(guessesLeft == 0)
    {
//        alert('You Lost! You are not a psychic!');
//        losses = losses + 1;
        //resets
//        guessesLeft = 9;
//        myguesses  = "";
    }
 

    // Here are some notes:

    if
    elseif
    else


//    while (something like x <10) {
//        x++;
    }

//    wins++;
//    losses++;



// ------------------------------------------------------------------------------------




$(document).ready(function() {

    // Here are the arrays of names.  NOTE: All lowercase so as to lessen confusion.
    var elfWords = ["galadriel","arwen","elendil","elbereth","legolas","glorfindel"];
    var menWords = ["aragorn","denethor","boromir","faramir","theoden","eowyn"];
    var ardaWords = ["eriador","moria","lothlorien","gondor","rohan","mordor"];

    // ~:~:~:~
    // -----------------------------------------------------------
    // Here are the vars.  All the vars. 

    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var pickaword = //something here;

    var wins = 0;
    var losses = 0;

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
    function chooseElfWord()
    console.log(result)



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



//-----------------------------------------------        
    // I'm keeping this stuff below just to test that my code works
//
//
//
    var pbjnum = 0;
    var gcnum = 0;
    var rbnum = 0;

    $("#pbj").on("click", function() {
      alert("Ate one more pbj!");
      pbjnum++;
      $("#pbj").append ("you ate " + pbjnum + " pbjs!");
      console.log(pbjnum);
    });

    $("#grilledcheese").on("click", function() {
      alert("Ate one more grillcheese!");
      gcnum++;
      $(document.body.append ("you ate " + gcnum + " grillcheeses!"));
      console.log(gcnum);
    });

    $("#roastbeef").on("click", function() {
      alert("Ate one more beef!");
      rbnum++;
      $(document.body.append ("you ate " + rbnum + " beefs!"));
      console.log(rbnum);
    });

  });
    // -----------------------------------------------------------
    // -----------------------------------------------------------
    // -----------------------------------------------------------
    // -----------------------------------------------------------
    // -----------------------------------------------------------
    // -----------------------------------------------------------
    // -----------------------------------------------------------
    // -----------------------------------------------------------
    // -----------------------------------------------------------
    // -----------------------------------------------------------





    document.onkeypress = function(event) {

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


 if (letters.includes(userGuess)) {
    console.log("yeah it's a letter");
 //        forEach("<div>" in pickedword){
//            if ("<div>" = userGuess);
            // exchange the _ with a letter
            // increment guessesmade
            // deinc guessesleft
            // incl guessed letter in MyGuesses
//            elseif //not 
            // do the things show it's wrong letter
    }
}
else {
    console.log("that ain't no letter");
}

//----------------------------------------------------------------------------------------------------------------

if (letters.includes(event.key)) {
    console.log("yeah it's a letter");
    pickedword.forEach(myFunction);
    function myFunction() {
        if(i == userGuess) {
            $("wordispicked").html(i.innerHTML = userGuess;
        }

    }
    //  forEach("<div>" in pickedword){
//            if ("<div>" = userGuess);
    $("#lettersguessed").append(userGuess);
    guessesLeft = guessesLeft - 1;
    console.log(guessesLeft);
        // exchange the _ with a letter
        // increment guessesmade
        // deinc guessesleft
        // incl guessed letter in MyGuesses}
    
//            elseif //not 
        // do the things show it's wrong letter

}

//----------------------------------------------------------------------------------------------------------------
for(var z = 0; z <pickedword.length; z++) {
    if (pickedword[z] === userGuess) {
    pickedword[z] = userGuess;
    $("#lettersguessed").append(userGuess);
    guessesLeft = guessesLeft - 1;
    console.log(guessesLeft);}

//    ~:~:~:~:~::~:~:~:~:~


    
//                else{                                                 // wtf why is this an Unexpected Token Else everything is in curly brackets
//                    console.log("that letter was not in the word");
//                    alert("nope");
//                    $("#lettersguessed").append(userGuess);
//                    guessesLeft = guessesLeft - 1;
//                    console.log(guessesLeft);}            
//                }              
//            } // to the IF letters.includes

                // THE CODE ABOVE IS SUPPOSED TO:
                // exchange the _ with a letter
                // incl guessed letter in MyGuesses
                // deinc guessesleft (ONCE!)
            


//    } // @@@ this used to be for onkeypress @@@

