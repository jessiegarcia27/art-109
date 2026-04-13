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

const popupBtn = document.getElementById('popupBtn');

function createPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    popup.innerHTML = `
    <p> are you sure you want to close this?</p>
    <button class="closeBtn">Exit</button>

    `;
    document.body.appendChild(popup);
    const closeBtn = popup.querySelector('.closeBtn');
    closeBtn.addEventListener('click', () => {
        popup.remove();
    });

setTimeout(() => {
    createPopup();
    createPopup ();
}, 300);
   }
popupBtn.addEventListener("click", () => {
    createPopup();
});

