    
    
    var wins = 0;
    var guessesleft = 15;
    var correctletters = [];
    var wrongletters = [];
     
    // document.getElementById("wins").innerHTML = wins;
    // document.getElementById("underscores").innerHTML = underscores;
    // document.getElementById("guessesleft").innerHTML = guessesleft;
    // document.getElementById("wrongletters").innerHTML = wrongletters;
   

    // Only available user inputs are A-Z. Validate inputs. The inputs are keystrokes. 
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'w', 'z'];



    // Game of thrones themed computer choices. Pull one random choice from the array
    var computerChoice = ["crow", "khaleesi", "maester", "raven", "unsullied", "valyrian", "wall", "hodor", "door", "warg", "whitewalkers", "wildfire", "wildling", "targaryen", "lannister", "arryn", "tully", "greyjoy", "baratheon", "tyrell", "martell", "themountain", "thehound", "ironislands", "direwolf", "dothraki", "eunuch", "facelessmen", "grayscale", "ironthrone", "jonsnow", "kingslanding", "nightswatch", "sonsoftheharpy", "unsullied"];
    var hiddenword = computerChoice[Math.floor(computerChoice.length * Math.random())];
    console.log (hiddenword);
    
    // Number of underscores should equal the array length of word pulled.
    var underscores = Array(hiddenword.length + 1).join("_ ");
    console.log (underscores);
    
   
    
    // User guesses based on keystroke (A-Z) have to either reduce guesses remaining if incorrect OR reveal the corresponding letter in the word underscores.

    document.onkeyup = function(event) {
        var Guessedletter = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(Guessedletter);

        // for (i = 0; i < hiddenword.length; i++) {
        
             

         if (hiddenword.indexOf(Guessedletter) > -1 ) {
            correctletters.push(Guessedletter);
            console.log(correctletters)

        // Replace underscores with the guessed letter IF it is contained within the hidden word
            
            
            
        }
      
         
        else (wrongletters.push(Guessedletter));
            guessesleft = guessesleft -1;
            console.log(wrongletters);

        };
     

       

    

    // Once the word is fully revealed: play a sound file and show a "winner screen". Add +1 to wins column. 

     if (hiddenword === correctletters) {
         alert("You have proven yourself knowledgable of the seven kingdoms! You win!");
     }

    // Once the word is completed, reset the game and MAYBE change the JPG picture.  


    
    
    