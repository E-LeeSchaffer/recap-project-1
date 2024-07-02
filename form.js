const form = document.querySelector('[data-js="form"]');
const cardsContainer = document.getElementById("cards-container");
// console.log("submit:", "it works");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   // Informationen aus dem Formular holen
  //   const formElements = event.target.elements;
  //   console.log(formElements);

  // Formular-Daten in ein Objekt umwandeln
  const formData = new FormData(event.target); //sammelt alle Daten, die in das Formular eingetragen wurden
  const data = Object.fromEntries(formData); //macht aus den Daten ein einfaches Objekt, das leichter zu verwenden ist
  console.log(data);

  const card = document.createElement("div");
  card.classList.add("card__box");

  const article = document.createElement("article");
  article.classList.add("card__content");

  const questionPara = document.createElement("p");
  questionPara.textContent = data.question;

  const answerPara = document.createElement("p");
  answerPara.textContent = data.answer;
  answerPara.hidden = true;

  const tagPara = document.createElement("p");
  tagPara.textContent = data.tag;

  //Button zum Anzeigen der Antwort
  const showAnswerButton = document.createElement("button");
  showAnswerButton.textContent = "Show Answer";
  showAnswerButton.addEventListener("click", () => {
    answerPara.hidden = !answerPara.hidden;
    showAnswerButton.textContent = answerPara.hidden
      ? "Show Answer"
      : "Hide Answer";
  });

  //   Elemente in die DOM einfügen
  article.appendChild(questionPara);
  article.appendChild(showAnswerButton);
  article.appendChild(answerPara);
  article.appendChild(tagPara);
  card.appendChild(article);
  cardsContainer.insertBefore(card, cardsContainer.firstChild);
});

// display remaining characters
const updateCharacters = (input, counter, maxLength) => {
  const remaining = maxLength - input.value.length;
  counter.textContent = `${remaining} characters left`;
};

const addCountListener = (inputId, counterId, maxLength) => {
  const input = document.getElementById(inputId);
  const counter = document.getElementById(counterId);
  input.addEventListener("input", () => {
    updateCharacters(input, counter, maxLength);
  });
};

addCountListener("yourQuestion", "questionCount", 150);
addCountListener("yourAnswer", "answerCount", 150);

// const questionInput = document.getElementById("yourQuestion");
// const questionCount = document.getElementById("questionCount");
// questionInput.addEventListener("input", () => {
//   updateCharacters(questionInput, questionCount, 150);
// });

// const answerInput = document.getElementById("yourAnswer");
// const answerCount = document.getElementById("answerCount");
// answerInput.addEventListener("input", () => {
//   updateCharacters(answerInput, answerCount, 150);
// });
