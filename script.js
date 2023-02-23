
let start = document.querySelector(".start");
let input = document.querySelector(".inp");
let instruction = "hello unknown user, please enter your name in the input box";

if (start && input){ 
start.onclick = function () {
    speak(instruction);
    input.classList.add("show");
};

}

//********************************************************************* */
let submit = document.querySelector(".submit");
let namevalue = document.querySelector(".name");
let error = document.querySelector(".error");
let welcometext = "Welcome";

if(submit && namevalue && error){
submit.onclick = function () {
  if (namevalue.value === "") {
    error.classList.add("errorshow");
    setTimeout(function () {
      error.classList.remove("errorshow");
    }, 3000);
  } else {
    window.location.href = "quotes.html";
    speak(welcometext);
  }
};
}

//******************************************************************************** */


const speak = (text) => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}


//******************************************************************************* */

const arrayOfQuotes = [
  {'author': 'Jim Rohn', 
   'quote': 'Beware of what you become in pursuit of what you want.'
  },
  {'author': 'Epictetus', 
   'quote': 'It\'s not what happens to you, but how you react to it that matters.'
  },
  {'author': 'Frank Sinatra', 
   'quote': 'The best revenge is massive success.'
  },
  {'author': 'Wayne Gretzy', 
   'quote': 'You miss 100% of the shots you don\'t take.'
  },
  {'author': 'Unknown', 
   'quote': 'People will always throw stones in your path. What will happen depends on what you make out of it a wall or a bridge! So cheer up and move on'
  },
  {'author': 'Nicki Minaj', 
   'quote': 'Cheer up when the night comes, because mornings always give you another chance.'
  },
  {'author': 'Dexter Monterde', 
   'quote': 'Life is too short for us to dwell on sadness. Cheer up and live life to the fullest.'
  },
  {'author': 'Unknown', 
   'quote': 'Cheer up, tomorrow is another chance.'
  },
];

let randomNumber;
function generateQuote(){
  const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
  randomNumber = random;
   document.querySelector('#quote').textContent = `\"${arrayOfQuotes[random].quote}\"`;
  document.querySelector('.quote-author').textContent = `--${arrayOfQuotes[random].author}`;
  
}

function ListenQuote(){
  let quote = arrayOfQuotes[randomNumber].quote;
  speak(quote);
}

function ExitQuote(){
  window.location.href = "index.html";
}