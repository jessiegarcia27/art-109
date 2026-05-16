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
const maxQuestions = 5;

button.addEventListener("click", () => {
    const userAnswer = input.value;

    if (userAnswer.trim() === "") return;

    createQuestion ();
      if (count >= maxQuestions) {
          setTimeout(() => {

            showEnding();

        }, 1000);

    }

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

  function showEnding () {
    }

 document.body.innerHTML = `
<div id="endingScreen">

<div class="imageContainer">

<img src="images/family.jpg" class="endingImage">

 <img src="images/community.jpg" class="endingImage">

            <img src="images/graduation.jpg" class="endingImage">

</div>

<h1 class="finalMessage">
No answer was ever enough.
</h1>

<p class="subMessage">
We should not have to justify our belonging.
</p>

</div>
`;
  }

