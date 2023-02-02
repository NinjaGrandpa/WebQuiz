class Question {
  constructor(statement, correctAnswer) {
    this.statement = statement;
    this.correctAnswer = correctAnswer;
  }
}

const questionList = document.querySelector("#question-list");

const questions = [
  new Question("Skiter björnen i skogen?", true),
  new Question("Är snus viktigare än vatten?", true),
  new Question("Borde designare få programmera?", false),
];

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
    "border",
    "border-2",
    "border-dark",
    "btn-success"
  );
  falseButton.classList.add(
    "btn",
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

  // Lägg till element hirearki
  cardFooter.append(trueButton, falseButton);
  cardBody.append(cardText);
  card.append(cardHeader, cardBody, cardFooter);
  questionList.append(card);
}
