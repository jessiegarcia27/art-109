const button = document.getElementById("submitBtn");
const input = document.getElementById("answerInput");
const responses = document.getElementById("responses");

const followUpQuestions = [
    "No, where are you REALLY from?",
    "But where are your parents from?",
    "You don't look American.",
    "What are you?",
    "So what ethnicity are you?",
    "Where do you actually belong?"
];

let count = 0;

button.addEventListener("click", () => {
    const userAnswer = input.value;

    if (userAnswer.trim() === "") return;

    createQuestion ();

    input.value = "";
});

function createQuestion() {
    const text = document.createElement("div");

    text.classList.add("floatingText");
     text.innerText =
    followUpQuestions[count % followUpQuestions.length];

  text.style.left = Math.random() * window.innerWidth + "px";
  text.style.top = Math.random() * window.innerHeight + "px";

  responses.appendChild(text);

  count++;
}
