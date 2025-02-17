let currentLang = 'it';
let isTerminalMode = true;

function toggleMode() {
    isTerminalMode = !isTerminalMode;
    document.body.className = isTerminalMode ? 'terminal-mode' : 'normal-mode';
    document.getElementById('terminal-content').className = isTerminalMode ? '' : 'hidden';
    document.getElementById('normal-content').className = isTerminalMode ? 'hidden' : '';
    updateContent();
    updateButtonText();
}

function toggleLanguage() {
    // console.log('toggleLanguage', 'content', data)
    currentLang = currentLang === 'it' ? 'en' : 'it';
    // console.log('currentLang', currentLang) // ok
    updateContent();
    updateButtonText();
}

function updateButtonText() {
    document.getElementById('modeToggle').textContent = isTerminalMode ?
        data[currentLang].buttons.mode.terminal :
        data[currentLang].buttons.mode.normal;
    document.getElementById('langToggle').textContent =
        data[currentLang].buttons.lang;

    // document.getElementById('langToggle').style.display = 
    //    isTerminalMode ? 'none' : 'inline-block';            
}

function createUnorderedList(items) {
    const ul = document.createElement('ul');
    ul.className = 'horizontal-list';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    return ul;
}


function updateContent() {
    updateTerminalContent();
    updateNormalContent();
}
// Initial content update

//toggleMode()    // delete me

updateButtonText();
updateContent();
