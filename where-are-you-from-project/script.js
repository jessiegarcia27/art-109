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

        setTimeout(() => {
            showEnding();
        }, 1000);

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


    const row = document.createElement("div");
row.classList.add("imageRow");


    const screen = document.getElementById("endingScreen");

    const sequence = [
        {
            type: "image",
            src: "images/family.jpg",
            text: "Families building lives"
        },
        {
            type: "image",
            src: "images/community.jpg",
            text: "Communities thriving together"
        },
        {
            type: "image",
            src: "images/graduation.jpg",
            text: "Success earned, not given"
        },
        {
            type: "final",
            text: "No answer was ever enough."
        }
    ];

    let delay = 0;

    sequence.forEach((item) => {
        screen.appendChild(row);
        delay += 1500;

        setTimeout(() => {

            const container = document.createElement("div");
            container.classList.add("endingItem");

            if (item.type === "image") {

                const img = document.createElement("img");
                img.src = item.src;
                img.classList.add("endingImage");

                const caption = document.createElement("div");
                caption.classList.add("endingText");
                caption.innerText = item.text;

                container.appendChild(img);
                container.appendChild(caption);

            } else if (item.type === "final") {

                const text = document.createElement("div");
                text.classList.add("finalMessage");
                text.innerText = item.text;

                container.appendChild(text);
            }

        row.appendChild(container);


        }, delay);
    });
}

