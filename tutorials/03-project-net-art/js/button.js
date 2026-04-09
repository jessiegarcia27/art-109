const btn = document.getElementById('submitBtn');

btn.addEventListener('mouseover', () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
   btn.style.left = x + 'px';
   btn.style.top = y + 'px';    
});

const input = document.getElementById('nameInput');

input.addEventListener('input', () => {
    setTimeout(() => {
        input.value = '';
    }, 500);
});

// const almostBtn = document.getElementById('almostBtn');

// document.addEventListener('mousemove', () => {
//     almostBtn.style.left = Math.random() * 500 + 'px';
//     almostBtn.style.top = Math.random() * 500 + 'px';
// });



// const almostBtn = document.getElementById('almostBtn');

// document.addEventListener('mousemove', (e) => {
//     const rect = almostBtn.getBoundingClientRect();

//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;

//     const distanceX = Math.abs(e.clientX - centerX);
//     const distanceY = Math.abs(e.clientY - centerY);

//     if (distanceX < 150 && distanceY < 100) {
//         const newX = Math.random() * (window.innerWidth - rect.width);
//         const newY = Math.random() * (window.innerHeight - rect.height);
//         almostBtn.style.left = newX + 'px';
//         almostBtn.style.top = newY + 'px';
//     }
// });

const almostBtn = document.getElementById('almostBtn');

almostBtn.addEventListener('click', () => {
    const messages = ["Nope!", "Try again!", "Almost there!", "You Wish!", "So close!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    almostBtn.textContent = randomMessage;
});