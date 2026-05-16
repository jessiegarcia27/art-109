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

    input.value = "";

    createQuestion();

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

    if (count >= maxQuestions) {
        setTimeout(showEnding, 1000);
    }
}

function showEnding() {

    document.body.innerHTML = `
        <div id="endingScreen">

            <div id="finalMessage">
                No answer was ever enough.
            </div>

            <button id="revealButton">
                Becoming Latino
            </button>

        </div>
    `;

    const button = document.getElementById("revealButton");
    button.addEventListener("click", startImageSequence);
}

function startImageSequence() {

    const screen = document.getElementById("endingScreen");
    screen.innerHTML = "";

    const images = [
        "images/family1.jpg",
        "images/family2.jpg",
        "images/work.jpg",
        "images/passport.jpg",
        "images/mexcity.jpg"
    ];

    let delay = 0;

    images.forEach((src) => {

        delay += 300;

        setTimeout(() => {

            const img = document.createElement("img");
            img.src = src;
            img.classList.add("popImage");

            img.style.position = "absolute";
            img.style.left = Math.random() * window.innerWidth * 0.7 + "px";
            img.style.top = Math.random() * window.innerHeight * 0.7 + "px";

            screen.appendChild(img);

        }, delay);

    });

    setTimeout(() => {

        const finalText = document.createElement("div");
        finalText.classList.add("finalMessage");

        finalText.innerText =
            "We are not questions. We are histories already here.";

        screen.appendChild(finalText);

    }, delay + 1200);
}