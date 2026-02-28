const demiurges = {
    patriarchy: {
        name: "The Father Figure",
        status: "Online",
        description: "A profile of the system that built the room you're sitting in. He thinks he owns the place. Expect unsolicited advice and rigid structures."
    },
    imperialism: {
        name: "The Map Drawer",
        status: "Busy",
        description: "Always looking over your shoulder. Likes straight lines, borders, and taking things that don't belong to them."
    },
    capitalism: {
        name: "The Invisible Hand",
        status: "Idle",
        description: "Constantly trying to sell you a slightly worse version of what you already have. Will charge you for your own chitin if you let it."
    },
    notes: {
        name: "Your Inner Monologue",
        status: "Confused",
        description: "A fourre-tout of chitinous thoughts, half-baked ideas, recipes, and reminders to drink water."
    }
};

const emails = [
    {
        id: 1,
        section: "inbox",
        category: "capitalism",
        from: "The Invisible Hand",
        to: "you@moultlook.com",
        subject: "URGENT: Your Chitin Subscription is Expiring",
        date: "2026-02-28",
        body: "Dear consumer,<br><br>We noticed you haven't monetized your recent moult. <b>This is a violation of Terms & Conditions.</b><br><br>Please remit payment immediately or we will repossess your shell."
    },
    {
        id: 2,
        section: "inbox",
        category: "patriarchy",
        from: "The Father Figure",
        to: "you@moultlook.com",
        subject: "Smile more (and other unsolicited advice)",
        date: "2026-02-27",
        body: "Have you considered that maybe your claws are just a bit too aggressive?<br><br>Best,<br>Dad"
    },
    {
        id: 3,
        section: "drafts",
        category: "crabs",
        from: "you@moultlook.com",
        to: "birt@moultlook.com",
        subject: "Are we doing this?",
        date: "2026-03-01",
        body: "I think the pincers are finally coming in. I'm ready to leave the soft-body life behind."
    }
];

// POINT 11: Legal & FAQ text for "YOUR SHELL"
const shellContent = `
    <div class="demiurge-profile">
        <h2>USER PROFILE: YOU</h2>
        <p><strong>Species:</strong> Transitional Crab</p>
        <p><strong>Email:</strong> you@moultlook.com</p>
    </div>
    
    <div class="legal-box">
        <h3>FAQ & SUPPORT</h3>
        <p>For help/support contact: <strong>contact@moultlook.com</strong></p>
        <hr style="border:0; border-top: 1px solid #555;">
        <p><strong>Q: How do I become a crab?</strong><br>A: Just wait. Time and pressure will do the work.</p>
        <p><strong>Q: Recipe for Rouille?</strong><br>A: 2 egg yolks, 4 cloves garlic, olive oil, saffron, salt. Whip violently.</p>
    </div>

    <div class="legal-box">
        <h3>LEGAL / COPYRIGHT</h3>
        <p>All rights reserved. © 2026 MOULTLOOK.COM</p>
        <p style="font-size: 0.8em; opacity: 0.7;">By using this shell, you agree to inevitable carcinisation. The management is not responsible for loss of digits, sudden urges to scuttle sideways, or anti-capitalist sentiments.</p>
    </div>
`;
