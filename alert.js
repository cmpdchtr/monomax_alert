// Створення звукового повідомлення
const msg = new SpeechSynthesisUtterance('Час прозвучав!');

// Встановлення часу для відтворення звуку о 8:30
const now = new Date();
const millisTill830 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 30, 0, 0) - now;
print(millisTill830);
if (millisTill830 < 0) {
    millisTill830 += 86400000; // якщо час вже минув, встановлюємо наступний день
}
setTimeout(function(){
    window.speechSynthesis.speak(msg); // Відтворення звукового повідомлення
}, millisTill830);
