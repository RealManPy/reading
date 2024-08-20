const words = [
    { correct: "מחודד", incorrect: "מחדד", start: "עיפרון" },
    { correct: "ארוכה", incorrect: "ארומה", start: "שורה" },
	{ correct: "פלסטי", incorrect: "פלסטיק", start: "דבק" },
	{ correct: "גדול", incorrect: "גדולה", start: "מנהיג" },
	{ correct: "חם", incorrect: "חום", start: "בית" },
	{ correct: "בר", incorrect: "בור", start: "פרח" },
	{ correct: "שנתי", incorrect: "שנה", start: "חד" },
	{ correct: "כחול", incorrect: "כחולה", start: "ים" },
	{ correct: "רושמת", incorrect: "מרשים", start: "קופה" },
	{ correct: "יקרה", incorrect: "יקר", start: "חנות" },
	{ correct: "תורה", incorrect: "תודה", start: "ספר" },
    // Add more word pairs as needed
];

let currentWordIndex = 0;

function showNextWord() {
    const startWord = document.getElementById('start-word');
    const buttons = document.querySelectorAll('.word');
    
    startWord.textContent = words[currentWordIndex].start;
    buttons[0].textContent = words[currentWordIndex].correct;
    buttons[1].textContent = words[currentWordIndex].incorrect;
	
	buttons[0].setAttribute("style", "background-color: #f0f0f0");
	buttons[1].setAttribute("style", "background-color: #f0f0f0");
	
    // Randomize button order
    if (Math.random() > 0.5) {
        buttons[0].textContent = words[currentWordIndex].incorrect;
        buttons[1].textContent = words[currentWordIndex].correct;
    }
}

function checkAnswer(button) {
	
    if (button.textContent === words[currentWordIndex].correct) {
		const audio = new Audio("sec.mp3");
		audio.play();
		button.setAttribute("style", "background-color: #1fc600");
        setTimeout(() => {
            currentWordIndex++;
            if (currentWordIndex < words.length) {
                showNextWord();
            } else {
                alert("כל הכבוד! סיימת את המשחק.");
            }
        }, 500);
    } else {
        button.setAttribute("style", "background-color: #f44336");
    }
}

window.onload = showNextWord;
