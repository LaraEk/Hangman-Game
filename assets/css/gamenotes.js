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
