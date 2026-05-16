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
        setTimeout(showEnding, 800);
    }
}

/* =========================
   STAGE 1: INTRO ENDING
========================= */

function showEnding() {

    document.body.innerHTML = `
        <div id="endingScreen">
            <div id="finalMessage">No answer was ever enough.</div>
        </div>
    `;

    const screen = document.getElementById("endingScreen");

    const sequence = [
        {
            src: "images/family.jpg",
            text: "Families building lives"
        },
        {
            src: "images/community.jpg",
            text: "Communities thriving together"
        },
        {
            src: "images/graduation.jpg",
            text: "Success earned, not given"
        }
    ];

    let i = 0;

    function showNext() {

        if (i < sequence.length) {

            const item = sequence[i];

            const container = document.createElement("div");
            container.classList.add("endingItem");

            const img = document.createElement("img");
            img.src = item.src;
            img.classList.add("endingImage");

            const caption = document.createElement("div");
            caption.classList.add("endingText");
            caption.innerText = item.text;

            container.appendChild(img);
            container.appendChild(caption);

            screen.appendChild(container);

            i++;

            setTimeout(showNext, 1200);

        } else {
            showRevealButton();
        }
    }

    showNext();
}

/* =========================
   STAGE 2: BUTTON
========================= */

function showRevealButton() {

    const screen = document.getElementById("endingScreen");

    const button = document.createElement("button");
    button.id = "revealButton";
    button.innerText = "Becoming Latino";

    screen.appendChild(button);

    button.addEventListener("click", startFinalSequence);
}

function startFinalSequence() {

    const screen = document.getElementById("endingScreen");
    screen.innerHTML = "";

    const grid = document.createElement("div");
    grid.classList.add("finalGrid");
    screen.appendChild(grid);

    const images = [
        "images/family1.jpg",
        "images/family2.jpg",
        "images/work.jpg",
        "images/passport.jpg",
        "images/mexcity.jpg",
        "images/culture1.jpg",
        "images/culture2.jpg",
        "images/culture3.jpg",
        "images/mexico1.jpg",
        "images/mexico2.jpg",   


    ];


    let i = 0;

    function spawn() {

        if (i < images.length) {

            const img = document.createElement("img");
            img.src = images[i];

            grid.appendChild(img);

            i++;
            setTimeout(spawn, 300);

        } else {

            const finalText = document.createElement("div");
            finalText.classList.add("finalMessage");
            

            finalText.innerText =
                "We are not questions. We are histories already here.";

            screen.appendChild(finalText);


            const overlay = document.createElement("div");
overlay.classList.add("finalOverlayText");
overlay.innerText = "seguimos aqui";

screen.appendChild(overlay);
        }
    }

    spawn();
}