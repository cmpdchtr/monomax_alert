function playSound() {
    const audio = new Audio("music.mp3"); // Замініть на шлях до вашого звукового файлу
    audio.play();
  }
  
  function checkTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    console.log(hours);
    console.log(minutes);
  
    if (hours === 19 && minutes === 13) {
      playSound();
    }
  }
  
  setInterval(checkTime, 1000); // Перевіряти час щосекунди
  