document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');
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
            updatePortfolioView();
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
        switchLanguageButton.textContent = language === 'it' ? 'Switch to English' : 'Switch to Italian';
        document.documentElement.lang = language;
        updatePortfolioView();
    });

    function handleCommand(command) {
        let response = '';
        switch (command) {
            case 'help':
                response = language === 'it' ? data.help.it : data.help.en;
                break;
            case 'about':
                response = language === 'it' ? data.about.it : data.about.en;
                break;
            case 'skills':
                response = language === 'it' ? data.skills.it : data.skills.en;
                break;
            case 'projects':
                response = language === 'it' ? data.projects.it : data.projects.en;
                break;
            default:
                response = language === 'it' ? 'Comando non riconosciuto' : 'Command not recognized';
        }
        output.innerHTML += `<p>${response}</p>`;
        window.scrollTo(0, document.body.scrollHeight);
    }

    function updatePortfolioView() {
        if (nameElement) nameElement.textContent = language === 'it' ? data.name.it : data.name.en;
        if (aboutElement) aboutElement.textContent = language === 'it' ? data.about.it : data.about.en;
        if (skillsElement) skillsElement.textContent = language === 'it' ? data.skills.it : data.skills.en;
        if (projectsElement) projectsElement.textContent = language === 'it' ? data.projects.it : data.projects.en;
    }
});
