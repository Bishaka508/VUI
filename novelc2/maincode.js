const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const answer = ["The decimal number 7 in binary number is 1 1 1",
 "The decimal number 14 in binary number is 1 1 1 0 ", 
 " The binary number 1 0 1 into decimal number is 5",
"The binary number 1 0 1 0 into decimal number is 10",
"Complete yourself convert binary numbers into",
"Complete yourself convert decimal numbers into",
"Hi how can i help you"];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is enabled');
};

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', ()=> {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I dont understand what you said ";

 if(message.includes('convert decimal number 7 into binary number')){
   const finalText  =  answer[0];
   speech.text = finalText; 
}

 else if (message.includes('convert decimal number 14 into binary number')){
    const finalText  =  answer[1];
    speech.text = finalText; 
   }

else if (message.includes('convert binary number 101 into decimal number')){
    const finalText  =  answer[2];
    speech.text = finalText; 
}

else if (message.includes('convert binary number 1010 into decimal number')){
    const finalText  =  answer[3];
    speech.text = finalText;
} 
else if (message.includes('convert binary number')){
    const finalText  =  answer[4];
    speech.text = finalText; 
}
else if (message.includes('convert decimal number')){
    const finalText  =  answer[5];
    speech.text = finalText;
}
else if (message.includes('hi system')){
    const finalText  =  answer[6];
    speech.text = finalText;
}


   speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
