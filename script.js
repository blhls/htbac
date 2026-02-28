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
    }, 5000); 
}

// 3. Sidebar Toggle
document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
});

// 4. App Logic
function initApp() {
    changeSection('drafts'); // Default landing
}

// Handles clicking "INBOX", "DRAFTS", etc.
function changeSection(section) {
    document.body.className = `theme-${section}`;
    
    const filteredEmails = emails.filter(email => email.section === section);
    renderEmailList(filteredEmails);
    
    document.getElementById('content-view').innerHTML = `<p style="opacity: 0.5;">Select an item to view...</p>`;
}

// Handles clicking "Capitalism", "Patriarchy", etc. under Inbox
function filterCategory(category) {
    document.body.className = `theme-inbox`;
    
    // 1. Filter and show emails in the middle row
    const filteredEmails = emails.filter(email => email.category === category && email.section === 'inbox');
    renderEmailList(filteredEmails);
    
    // 2. Show the Demiurge Profile in the main view
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

// Renders the middle row
function renderEmailList(emailArray) {
    const listContainer = document.getElementById('email-list');
    listContainer.innerHTML = ''; // Clear current list
    
    if (emailArray.length === 0) {
        listContainer.innerHTML = `<div style="padding:10px; opacity:0.5;">No messages found.</div>`;
        return;
    }

    emailArray.forEach(email => {
        const item = document.createElement('div');
        item.className = 'email-item';
        // Basic styling applied directly via JS for now so you can see the boxes
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

// Handles clicking a specific email in the middle row
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
