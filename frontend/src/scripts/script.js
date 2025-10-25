const questions = [
  // 6 perguntas com imagens
  { question: "1️⃣ Nestlé anuncia demissões em massa: 16 mil vão perder seus empregos. É fake ou verdade?", image: "imagens/nestle.jpeg", answers: [{ text: "Fake", correct: true }, { text: "Verdade", correct: false }] },
  { question: "2️⃣ Apertar o braço contra a parede serve para medir a pressão. É fake ou verdade?", image: "imagens/pressaõ.jpg", answers: [{ text: "Fake", correct: true }, { text: "Verdade", correct: false }] },
  { question: "3️⃣ Barracões desabam após erosão forte no Rio de Janeiro. É fake ou verdade?", image: "imagens/deslizamento.jpg", answers: [{ text: "Fake", correct: true }, { text: "Verdade", correct: false }] },
  { question: "4️⃣ Agência Brasil: Brasil e Indonésia assinam comunicado sobre parceria multilateral.", image: "imagens/bandeiras.jpg", answers: [{ text: "Fake", correct: false }, { text: "Verdade", correct: true }] },
  { question: "5️⃣ Embarcação com 21 pessoas naufraga em Angra dos Reis.", image: "imagens/embarcação.jpg", answers: [{ text: "Fake", correct: false }, { text: "Verdade", correct: true }] },
  { question: "6️⃣ Netflix sofre impacto bilionário por disputa tributária no Brasil.", image: "imagens/netflix.jpg", answers: [{ text: "Fake", correct: false }, { text: "Verdade", correct: true }] },
  // 4 perguntas teóricas
  { question: "7️⃣ Uma notícia sem fonte confiável pode ser verdadeira?", answers: [{ text: "Sim, se estiver no WhatsApp!", correct: false }, { text: "Não, sempre desconfie sem fonte!", correct: true }] },
  { question: "8️⃣ Um título muito exagerado geralmente é...", answers: [{ text: "Sinal de fake news", correct: true }, { text: "Apenas jornalismo criativo", correct: false }] },
  { question: "9️⃣ O que fazer ao receber uma notícia duvidosa?", answers: [{ text: "Compartilhar rápido!", correct: false }, { text: "Verificar antes de repassar", correct: true }] },
  { question: "🔟 Se a notícia for boa demais pra ser verdade...", answers: [{ text: "Já compartilha porque é top!", correct: false }, { text: "Para, respira e checa a fonte.", correct: true }] }
];

// Seletores
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart-btn");
const questionImg = document.getElementById("question-img");

let currentQuestionIndex = 0;
let score = 0;

// COMEÇAR QUIZ
startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  showQuestion();
});

// PRÓXIMA PERGUNTA
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) showQuestion();
  else showResult();
});

// REINICIAR QUIZ
restartButton.addEventListener("click", () => {
  restartButton.classList.add("hidden");
  resultElement.classList.add("hidden");
  currentQuestionIndex = 0;
  score = 0;
  startScreen.classList.remove("hidden");
});

// MOSTRA PERGUNTA
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion.image) {
    questionImg.src = currentQuestion.image;
    questionImg.classList.remove("hidden");
  } else {
    questionImg.classList.add("hidden");
  }

  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answersElement.appendChild(button);
  });
}

// RESET DE ESTADO
function resetState() {
  nextButton.classList.add("hidden");
  while (answersElement.firstChild) answersElement.removeChild(answersElement.firstChild);
}

// SELECIONAR RESPOSTA
function selectAnswer(button, correct) {
  Array.from(answersElement.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === button.textContent) btn.classList.add(correct ? "correct" : "wrong");
  });

  if (correct) score++;
  nextButton.classList.remove("hidden");
}

// MOSTRA RESULTADO FINAL
function showResult() {
  questionContainer.classList.add("hidden");
  resultElement.classList.remove("hidden");
  nextButton.classList.add("hidden");

  let message = "";
  if (score === 10) message = "🧠 Detetive digital! Você manja de checagem total!";
  else if (score >= 8) message = "👏 Quase perfeito! Você sabe separar fato de ficção!";
  else if (score >= 4) message = "🤔 Tá quase! Só não confie em prints...";
  else message = "⚠️ Cuidado! Essas fake news te pegaram!";

  resultElement.innerHTML = `<p>Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas!</p>
                             <p>${message}</p>`;

  restartButton.classList.remove("hidden");
}