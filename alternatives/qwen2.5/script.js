// script.js

// Default language is Italian
let currentLanguage = 'it';

// Load data from local JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const italianData = data.it;
    const englishData = data.en;

    function displayText(text) {
      const output = document.getElementById('terminal-output');
      output.innerHTML += text + '\n';
      output.scrollTop = output.scrollHeight; // Auto-scroll
    }

    document.getElementById('terminal-input').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const input = this.value.trim();
        this.value = '';

        if (input === 'help') {
          displayText(currentLanguage === 'it' ? italianData.help : englishData.help);
        } else if (input === 'about') {
          displayText(currentLanguage === 'it' ? italianData.about : englishData.about);
        } else if (input === 'projects') {
          displayText(currentLanguage === 'it' ? italianData.projects : englishData.projects);
        } else {
          displayText('Comando non riconosciuto. Digita "help" per visualizzare i comandi disponibili.');
        }
      }
    });

    document.getElementById('switch-to-normal').addEventListener('click', function () {
      window.location.href = 'normal-portfolio.html'; // Redirect to normal portfolio
    });

    document.getElementById('language-toggle').addEventListener('click', function () {
      currentLanguage = currentLanguage === 'it' ? 'en' : 'it';
      displayText(`Lingua cambiata a ${currentLanguage === 'it' ? 'Italiano' : 'English'}.`);
    });
  })
  .catch(error => console.error('Errore nel caricamento dei dati:', error));