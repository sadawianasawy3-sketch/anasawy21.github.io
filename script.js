/*js source code*/

const winningNumber = 104977;

function playAudio() {
    var audio = new Audio('win31.mp3');
    audio.play();
}
function playAudio2(){
    var audio = new Audio('vine-boom.mp3');
    audio.play();
}

function checkNumber() {
        const inputField = document.getElementById("userNumber");
        const message = document.getElementById("message");
        

        /* Convert input to number */
        const userGuess = Number(inputField.value);

        /* Input validation */
            if(!userGuess){
            message.textContent = "⚠ Please enter a number.";
            message.style.color = "red";
            playAudio2()
            return;
        }
        if (userGuess < 100000 || userGuess > 999999) {
            message.textContent = "⚠ Please enter a valid number with 6 digits between 100000 and 999999.";
            message.style.color = "red";
            return;
        }

        /* Check if the guess is correct */
        if (userGuess === winningNumber) {
            message.textContent = "🎉 You won!";
            message.style.color = "green";
            playAudio();
        } else {
            message.textContent = "❌ Try again!";
            message.style.color = "red";
        }
    }
    document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkNumber()
  }
});
