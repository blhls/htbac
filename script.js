let clickCount = 0;
const breakBtn = document.getElementById('break-button');

// 1. The Break Logic
breakBtn.addEventListener('click', () => {
    clickCount++;
    if (clickCount < 6) {
        breakBtn.style.transform = `scale(${1 + clickCount * 0.1}) rotate(${clickCount * 2}deg)`;
        breakBtn.innerText = "UNCLOGGING" + ".".repeat(clickCount);
    } else {
        startLoading();
    }
});

// 2. The Loading Screen
function startLoading() {
    document.getElementById('screen-login').style.display = 'none';
    document.getElementById('screen-loading').style.display = 'flex';
    
    setTimeout(() => {
        document.getElementById('screen-loading').style.display = 'none';
        document.getElementById('screen-app').style.display = 'block';
        initApp();
    }, 5000); // 5 seconds
}

// 3. Sidebar Toggle
document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
});

// 4. App Logic
function initApp() {
    // Default land on Drafts as requested
    changeSection('drafts');
}

function changeSection(section) {
    // Change theme colors based on section
    document.body.className = `theme-${section}`;
    
    // Logic to filter emails from data.js
    renderEmailList(section);
}

function moult() {
    if(confirm("Are you sure you want to moult your current shell?")) {
        location.reload(); // Returns to login
    }
}
