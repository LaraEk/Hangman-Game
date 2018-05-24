$(document).ready(function() {

    // Here are the arrays of names.
    var elfWords = ["Galadriel","Arwen","Elendil","Elbereth","Legolas","Glorfindel"]
    var menWords = ["Aragorn","Denethor","Boromir","Faramir","Theoden","Eowyn"]
    var ardaWords = ["Eriador","Moria","Lothlorien","Gondor","Rohan","Mordor"]

    // ~:~:~:~

    // Here are the vars.  All the vars. 

    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    var wins = 0;
    var losses = 0;

    // ~:~:~:~

    // Here are the functions.  We function well.

    function chooseElfWord() {
        return elfWords[Math.floor(Math.random() * elfWords.length)];
    }

    function chooseMenWord() {
        return menWords[Math.floor(Math.random() * menWords.length)];
    }

    function chooseArdaWord() {
        return ardaWords[Math.floor(Math.random() * ardaWords.length)];
    }


    // ~:~:~:~
    
    // Here are the functions as they are called.  Make It So.

    if
    elseif
    else


    wins++;
    losses++;


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


    // ...

  });
