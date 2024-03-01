// const lesson1 = "hours === 8 && minutes === 30 && seconds === 1";

function playSound() {
    const audio = new Audio("music.mp3"); // Замініть на шлях до вашого звукового файлу
    audio.play();
  }
  
  function checkTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    console.log(hours + " " + minutes + " " + seconds);
  
    if (hours === 19 && minutes === 48 && seconds === 1 ) {
      playSound();
    }
  }
  
  setInterval(checkTime, 1000); // Перевіряти час щосекунди
  