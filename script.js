let clickCount = 0;
const breakBtn = document.getElementById('break-button');

breakBtn.addEventListener('click', () => {
    clickCount++;
    if (clickCount < 6) {
        breakBtn.style.transform = `scale(${1 + clickCount * 0.1}) rotate(${clickCount * 2}deg)`;
        breakBtn.innerText = "UNCLOGGING" + ".".repeat(clickCount);
    } else {
        startLoading();
    }
});

function startLoading() {
    document.getElementById('screen-login').style.display = 'none';
    document.getElementById('screen-loading').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('screen-loading').style.display = 'none';
        document.getElementById('screen-app').style.display = 'block';
        initApp();
    }, 5000); 
}

document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
});

// Clears highlights from sidebar
function clearActiveNav() {
    document.querySelectorAll('.nav-item, .nav-sub div').forEach(el => el.classList.remove('active'));
}

function initApp() {
    changeSection('drafts'); // Default landing
}

// Handles clicking INBOX, DRAFTS, SHELL, etc.
function changeSection(section) {
    clearActiveNav();
    const navElement = document.getElementById(`nav-${section}`);
    if (navElement) navElement.classList.add('active'); // Highlight where we are

    document.body.className = `theme-${section}`;
    
    const middleRow = document.getElementById('email-list');
    const viewContainer = document.getElementById('content-view');

    // POINT 11: "YOUR SHELL" logic (No middle row)
    if (section === 'shell') {
        middleRow.style.display = 'none';
        viewContainer.innerHTML = shellContent; // We will define this in data.js
        return;
    }

    // Normal sections
    middleRow.style.display = 'block';
    const filteredEmails = emails.filter(email => email.section === section);
    renderEmailList(filteredEmails);
    viewContainer.innerHTML = `<p style="opacity: 0.5;">Select an item to view...</p>`;
}

function filterCategory(category) {
    clearActiveNav();
    const navElement = document.getElementById(`nav-${category}`);
    if (navElement) navElement.classList.add('active');

    document.body.className = `theme-inbox`;
    const middleRow = document.getElementById('email-list');
    middleRow.style.display = 'block';
    
    const filteredEmails = emails.filter(email => email.category === category && email.section === 'inbox');
    renderEmailList(filteredEmails);
    
    const demiurge = demiurges[category];
    const viewContainer = document.getElementById('content-view');
    
    if (demiurge) {
        viewContainer.innerHTML = `
            <div class="demiurge-profile">
                <h2>CONTACT INFO: ${demiurge.name}</h2>
                <p><strong>Status:</strong> [ ${demiurge.status} ]</p>
                <hr>
                <p><strong>Bio:</strong> ${demiurge.description}</p>
            </div>
        `;
    }
}

// POINT 7: UNREAD Logic
function viewUnread() {
    clearActiveNav();
    const navElement = document.getElementById('nav-unread');
    if (navElement) navElement.classList.add('active');
    
    document.body.className = `theme-inbox`;
    const middleRow = document.getElementById('email-list');
    middleRow.style.display = 'block';

    // Math magic to find the absolute newest date in the array
    const newestEmail = emails.reduce((latest, current) => {
        return new Date(latest.date) > new Date(current.date) ? latest : current;
    });

    renderEmailList([newestEmail]);
    viewEmail(newestEmail.id);
}

function renderEmailList(emailArray) {
    const listContainer = document.getElementById('email-list');
    listContainer.innerHTML = ''; 
    
    if (emailArray.length === 0) {
        listContainer.innerHTML = `<div style="padding:10px; opacity:0.5;">Folder empty.</div>`;
        return;
    }

    emailArray.forEach(email => {
        const item = document.createElement('div');
        item.className = 'email-item';
        item.style.padding = "10px";
        item.style.borderBottom = "1px solid #555";
        item.style.cursor = "pointer";
        
        item.innerHTML = `
            <div style="font-weight: bold;">${email.subject}</div>
            <div style="font-size: 0.8em; opacity: 0.8;">From: ${email.from}</div>
            <div style="font-size: 0.8em; opacity: 0.5;">${email.date}</div>
        `;
        item.onclick = () => viewEmail(email.id);
        listContainer.appendChild(item);
    });
}

function viewEmail(id) {
    const email = emails.find(e => e.id === id);
    const viewContainer = document.getElementById('content-view');
    
    viewContainer.innerHTML = `
        <div class="email-header" style="margin-bottom: 20px;">
            <h2 style="margin: 0 0 10px 0;">Subject: ${email.subject}</h2>
            <p style="margin: 2px 0;"><strong>From:</strong> ${email.from}</p>
            <p style="margin: 2px 0;"><strong>To:</strong> ${email.to}</p>
            <p style="margin: 2px 0;"><strong>Date:</strong> ${email.date}</p>
        </div>
        <hr>
        <div class="email-body" style="margin-top: 20px; line-height: 1.6;">
            ${email.body}
        </div>
    `;
}

function moult() {
    if(confirm("Are you sure you want to moult your current shell?")) {
        location.reload(); 
    }
}
