let currentLang = 'it';
let isTerminal = true;
let portfolioData = {};

async function loadData() {
    const response = await fetch('data.json');
    portfolioData = await response.json();
    initTerminal();
}

function initTerminal() {
    const output = document.getElementById('output');
    output.innerHTML = portfolioData[currentLang].welcome;
}

document.getElementById('toggleView').addEventListener('click', () => {
    isTerminal = !isTerminal;
    document.getElementById('terminal').classList.toggle('hidden');
    document.getElementById('normalPortfolio').classList.toggle('hidden');
    document.getElementById('toggleView').textContent = 
        isTerminal ? portfolioData[currentLang].normalView : portfolioData[currentLang].terminalView;
});

document.getElementById('toggleLang').addEventListener('click', () => {
    currentLang = currentLang === 'it' ? 'en' : 'it';
    document.getElementById('toggleLang').textContent = currentLang === 'it' ? 'English' : 'Italiano';
    updateContent();
});

function updateContent() {
    if(isTerminal) {
        initTerminal();
    } else {
        document.getElementById('normalName').textContent = portfolioData[currentLang].name;
        document.getElementById('normalBio').textContent = portfolioData[currentLang].bio;
        document.getElementById('normalProjects').innerHTML = 
            portfolioData[currentLang].projects.map(p => `<h3>${p.title}</h3><p>${p.description}</p>`).join('');
    }
}

document.getElementById('commandInput').addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        processCommand(e.target.value);
        e.target.value = '';
    }
});

function processCommand(cmd) {
    const output = document.getElementById('output');
    const response = portfolioData[currentLang].commands[cmd] || portfolioData[currentLang].error;
    output.innerHTML += `<div class="command">${document.getElementById('prompt').textContent} ${cmd}</div>`;
    output.innerHTML += `<div class="response">${response}</div>`;
    output.scrollTop = output.scrollHeight;
}

loadData();
