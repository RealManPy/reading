// Array of word analogies
const analogies = [
    { question: "שם", answer: "שמה" },
    { question: "רץ", answer: "רצה" },
    { question: "עף", answer: "עפה" },
    { question: "גדל", answer: "גדלה" },
    { question: "עצר", answer: "עצרה" }
];

let currentAnalogy = 0;

document.getElementById("submit-btn").addEventListener("click", checkAnswer);
document.getElementById("next-btn").addEventListener("click", loadNextAnalogy);

// Load initial analogy
loadAnalogy();

function loadAnalogy() {
    const questionWord = analogies[currentAnalogy].question;
    document.getElementById("question-word").innerHTML = `${questionWord} : ____`;
    document.getElementById("user-answer").value = "";  // Clear previous answer
    document.getElementById("result-message").innerHTML = "";  // Clear previous result
    document.getElementById("next-btn").style.display = "none";  // Hide next button until answer is correct
}

function checkAnswer() {
    const userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();
    const correctAnswer = analogies[currentAnalogy].answer;

    if (userAnswer === correctAnswer) {
		const audio = new Audio("./src/sec.mp3");
		audio.play();
        document.getElementById("result-message").innerHTML = `<span style="color:green;">נכון מאוד!</span>`;
        document.getElementById("next-btn").style.display = "inline-block";  // Show next button
    } else {
        document.getElementById("result-message").innerHTML = `<span style="color:red;">נסה שוב</span>`;
    }
}

function loadNextAnalogy() {
    currentAnalogy++;
    if (currentAnalogy >= analogies.length) {
        currentAnalogy = 0;  // Restart from the first analogy
    }
    loadAnalogy();
}
