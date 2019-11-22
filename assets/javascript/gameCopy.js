
    var wins = 0;
    var guessesleft = 15;
    var correctletters = [];
    var wrongletters = [];
    var underscores = [];
        
   var winsElement = document.getElementById("wins");
   var underscoresElement = document.getElementById("underscores");
   var guessesleftElement = document.getElementById("guessesleft");
   var wronglettersElement = document.getElementById("wrongletters");

    document.getElementById("reset").onclick = function() {reset};
    function reset() {
    document.getElementById("underscores").reset();
    underscores = [];
    document.getElementById("guessesleft").reset();
    guessesleft = 15;
    document.getElementById("wrongletters").reset();
    wrongletters = [];
    };

    // Game of thrones themed computer choices. Pull one random choice from the array
    var computerChoice = ["crow", "khaleesi", "maester", "raven", "unsullied", "valyrian", "wall", "hodor", "door", "warg", "whitewalkers", "wildfire", "wildling", "targaryen", "lannister", "arryn", "tully", "greyjoy", "baratheon", "tyrell", "martell", "themountain", "thehound", "ironislands", "direwolf", "dothraki", "eunuch", "facelessmen", "grayscale", "ironthrone", "jonsnow", "kingslanding", "nightswatch", "sonsoftheharpy", "unsullied"];
    var hiddenword = computerChoice[Math.floor(computerChoice.length * Math.random())];
    console.log (hiddenword);
    
    // Number of underscores should equal the array length of word pulled.

    for (i = 0; i < hiddenword.length; i++) {
        underscores.push("_ ");
        }
        console.log(underscores);
    
    // User guesses based on keystroke (A-Z) have to either reduce guesses remaining if incorrect OR reveal the corresponding letter in the word underscores.

    document.onkeyup = function(event) {
        var Guessedletter = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(hiddenword);

         if (hiddenword.indexOf(Guessedletter) > -1 ) {   
            correctletters.push(Guessedletter);
            console.log("correct letters", correctletters)

            for (i=0; i < hiddenword.length; i++) {
                 if (correctletters[i] === hiddenword[i] && correctletters[i] !== underscores[i]) {
                     underscores[i] = correctletters[i];
                     underscores.join(""); 
                    console.log(underscores.join(""));
                  
                 } 
            }
        }
      
           else (wrongletters.push(Guessedletter));
            guessesleft = guessesleft - 1;
            console.log("wrong letters", wrongletters);
    

            guessesleftElement.innerHTML = guessesleft;
            underscoresElement.innerHTML = underscores;
            wronglettersElement.innerHTML = wrongletters;


        if (hiddenword === correctletters.join("")) {
            console.log(hiddenword, correctletters)
             wins = wins + 1;
             alert("You have proven yourself knowledgable of the seven kingdoms! You win!");
             winsElement.innerHTML = wins;
  


             guessesleft = 15;
        
     }

};

   underscoresElement.innerHTML = underscores;
   guessesleftElement.innerHTML = guessesleft;
   wronglettersElement.innerHTML = wrongletters;
    


   
    