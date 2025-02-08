document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');
    const welcomeMessage = document.getElementById('welcome-message');
    const switchViewButton = document.getElementById('switch-view');
    const switchLanguageButton = document.getElementById('switch-language');
    const nameElement = document.getElementById('name');
    const aboutElement = document.getElementById('about');
    const skillsElement = document.getElementById('skills');
    const projectsElement = document.getElementById('projects');
    let language = 'it';
    let data = {};

    fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            displayWelcomeMessage();
            updatePortfolioView();
            updateButtonCaptions();
        });

    commandInput?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim().toLowerCase();
            handleCommand(command);
            commandInput.value = '';
        }
    });

    switchViewButton?.addEventListener('click', () => {
        const currentPage = window.location.pathname.split('/').pop();
        const targetPage = currentPage === 'index.html' ? 'portfolio.html' : 'index.html';
        window.location.href = targetPage;
    });

    switchLanguageButton?.addEventListener('click', () => {
        language = language === 'it' ? 'en' : 'it';
        updateButtonCaptions();
        displayWelcomeMessage();
        updatePortfolioView();
    });

    function handleCommand(command) {
        let response = '';
        switch (command) {
            case 'help':
            case 'about':
            case 'skills':
            case 'projects':
                response = data[command][language];
                break;
            default:
                response = language === 'it' ? 'Comando non riconosciuto' : 'Command not recognized';
        }
        appendOutput(command, response);
        window.scrollTo(0, document.body.scrollHeight);
    }

    function appendOutput(command, response) {
        const promptElement = document.createElement('div');
        promptElement.classList.add('prompt-line');
        promptElement.innerHTML = `<span class="prompt">user@portfolio:~$</span> <span class="command">${command}</span>`;

        const responseElement = document.createElement('div');
        responseElement.classList.add('response-line');
        responseElement.textContent = response;

        output.appendChild(promptElement);
        output.appendChild(responseElement);
    }

    function displayWelcomeMessage() {
        if (welcomeMessage) {
            welcomeMessage.innerHTML = `<span class="prompt">${language === 'it' ? data.welcome.it : data.welcome.en}</span>`;
        }
    }

    function updatePortfolioView() {
        if (nameElement) nameElement.textContent = language === 'it' ? data.name.it : data.name.en;
        if (aboutElement) aboutElement.textContent = language === 'it' ? data.about.it : data.about.en;
        if (skillsElement) {
            const skills = language === 'it' ? data.skills.it : data.skills.en;
            skillsElement.innerHTML = skills.split(', ').map(skill => `<span class="skill">${skill}</span>`).join('');
        }
        if (projectsElement) projectsElement.textContent = language === 'it' ? data.projects.it : data.projects.en;
    }

    function updateButtonCaptions() {
        if (switchViewButton) {
            switchViewButton.textContent = language === 'it' ?
                (window.location.pathname.includes('index.html') ? 'Passa alla vista Portfolio' : 'Passa alla vista Terminale') :
                (window.location.pathname.includes('index.html') ? 'Switch to Normal Portfolio' : 'Switch to Terminal View');
        }
        if (switchLanguageButton) {
            switchLanguageButton.textContent = language === 'it' ? 'Cambia lingua in Inglese' : 'Switch to Italian';
        }
    }
});
