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

const fakeProgressBtn = document.getElementById('fakeProgressBtn');

fakeProgressBtn,addEventListener('click', () => {
    const loader = document.createElement('div');
    loader.classList.add('loader');

    loader.innerHTML = `
    <p>Loading something important...</p>
        <div class="bar">
            <div class="progress"></div>
        </div>
    `;
    
    document.body.appendChild(loader);
    const progress = loader.querySelector('.progress');
    let width = 0;

    const interval = setInterval(() => {
        if (width <95) {
            width += Math.random() * 5;
            progress.style.width = width + '%';
    
        } else {
            clearInterval(interval);

            setTimeout(() => {
                progress.innerText = "almost done....";
            }, 500);
        }
    }, 200);
    });

    const ghost = document.getElementById('ghostCursor');
    let ghostX = 0;
    let ghostY = 0;

    document.addEventListener('mousemove', (e) => {
        const targetX = e.clientX;
        const targetY = e.clientY;

        setInterval(() => {
          ghostX += (targetX - ghostX) * 0.05;
        ghostY += (targetY - ghostY) * 0.05;

        ghost.style.left = ghostX + 'px';
        ghost.style.top = ghostY + 'px';
        }, 10);
    });

const img = document.getElementById('reactImage');

img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.2)";
});

img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
});

img.addEventListener("click", () => {
    const x = (Math.random() - 0.5) * 40;
    const y = (Math.random() - 0.5) * 40;

    img.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});





        


