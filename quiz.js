class Question {
  constructor(statement, correctAnswer) {
    this.statement = statement;
    this.correctAnswer = correctAnswer;
  }
}

const questions = [];
const questionList = document.querySelector("#question-list");
const scoreDisplay = document.querySelector("#score-display");
let score = 0;

function startButtonClick(){
    questions.splice(0, questions.length);

    questions.push(
        new Question("Skiter björnen i skogen?", "True"),
        new Question("Är snus viktigare än mat?", "True"),
        new Question("Borde designare få programmera?", "False"),
    );
      while (questionList.childElementCount > 0){
            questionList.children[0].remove();
      }
      displayQuestions();
}

function displayQuestions() {

  for (const question of questions) {
    // Skapa element
    const card = document.createElement("li");
    const cardHeader = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardText = document.createElement("h4");
    const cardFooter = document.createElement("div");
    const trueButton = document.createElement("button");
    const falseButton = document.createElement("button");

    // Styla element
    card.classList.add("card", "border-0", "mb-2");
    cardHeader.classList.add("card-header", "fw-bold", "bg-info");
    cardBody.classList.add("card-body", "bg-dark", "text-warning");
    cardText.classList.add("card-text");
    cardFooter.classList.add("card-footer", "bg-info");
    trueButton.classList.add(
      "btn",
      "mx-1",
      "border",
      "border-2",
      "border-dark",
      "btn-success"
    );
    falseButton.classList.add(
      "btn",
      "mx-1",
      "border",
      "border-2",
      "border-dark",
      "btn-danger"
    );

    // Innehåll i event
    cardHeader.innerText = questions.indexOf(question) + 1;
    cardText.innerText = question.statement;
    trueButton.innerText = "True";
    falseButton.innerText = "False";

    // Sätta upp event på element
    trueButton.onclick = () => {
      guessButtonClick(question, "True", cardBody, falseButton, trueButton);
    };

    falseButton.onclick = () => {
      guessButtonClick(question, "False", cardBody, falseButton, trueButton);
    };

    // Lägg till element hirearki
    cardFooter.append(trueButton, falseButton);
    cardBody.append(cardText);
    card.append(cardHeader, cardBody, cardFooter);
    questionList.append(card);
  }
}

function guessButtonClick(question, guess, cardBody, falseButton, trueButton) {
  if (question.correctAnswer === guess) {
    score++;
    cardBody.classList.remove("bg-dark");
    cardBody.classList.remove("text-warning");
    cardBody.classList.add("bg-success");
    cardBody.classList.add("text-white");
  } else {
    score--;
    cardBody.classList.remove("bg-dark");
    cardBody.classList.remove("text-warning");
    cardBody.classList.add("bg-danger");
  }
  scoreDisplay.innerText = score;
  trueButton.disabled = true;
  falseButton.disabled = true;
}