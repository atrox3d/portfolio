const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const switchPortfolioButton = document.getElementById('switch-portfolio');
const switchTerminalButton = document.getElementById('switch-terminal'); // For portfolio.html
const switchLanguageButton = document.getElementById('switch-language');
let currentLanguage = 'it'; // Default language
let data = null; // Store loaded data

// Function to load data from JSON
async function loadData() {
  try {
    const response = await fetch('data/data.json');
    data = await response.json();
    updateContent(); // Initial content update
  } catch (error) {
    console.error('Error loading data:', error);
    displayOutput('Error: Could not load data.  Check data/data.json.');
  }
}

// Function to update content based on current language and view
function updateContent() {
  if (!data) return; // Don't update if data hasn't loaded

  const langData = data[currentLanguage];

  if (window.location.pathname.includes('portfolio.html')) {
    // Update portfolio.html elements
    document.getElementById('name').textContent = langData.name;
    document.getElementById('title').textContent = langData.title;
    document.getElementById('about-text').textContent = langData.about;
    document.getElementById('contact-text').textContent = langData.contact;

    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ''; // Clear existing projects
    langData.projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
      projectList.appendChild(projectDiv);
    });

  } else {
    // Update terminal output (only if on index.html)
    terminalOutput.innerHTML = ''; // Clear terminal
    displayOutput(`${langData.terminal_welcome}<br>${langData.terminal_name} ${langData.name}<br>${langData.terminal_title} ${langData.title}<br>${langData.terminal_instructions}`); // Initial welcome message.
  }

  // Update language button text
  switchLanguageButton.textContent = currentLanguage === 'it' ? 'Switch to English' : 'Passa all\'italiano';

  //Update the HTML tag language
  document.documentElement.setAttribute('lang', currentLanguage);
}

// Function to display output in the terminal
function displayOutput(text) {
  terminalOutput.innerHTML += `<p>${text}</p>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to bottom
}

// Terminal command handling
function handleCommand(command) {
  if (!data) {
    displayOutput('Error: Data not loaded yet.');
    return;
  }
  const langData = data[currentLanguage];

  switch (command.toLowerCase()) {
    case 'help':
      displayOutput("Available commands: about, projects, contact, clear");
      break;
    case 'about':
      displayOutput(langData.about);
      break;
    case 'projects':
      langData.projects.forEach(project => {
        displayOutput(`- ${project.name}: ${project.description}`);
      });
      break;
    case 'contact':
      displayOutput(langData.contact);
      break;
    case 'clear':
      terminalOutput.innerHTML = '';
      break;
    default:
      displayOutput(`Command not recognized. Type 'help' for available commands.`);
  }
}

// Event listener for terminal input
if (terminalInput) { //Only if terminalInput exists
  terminalInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const command = terminalInput.value;
      displayOutput(`<span class="prompt">$</span> ${command}`); // Echo the command
      handleCommand(command);
      terminalInput.value = ''; // Clear input
    }
  });
}

// Event listener for switch to portfolio view button
if (switchPortfolioButton) {
  switchPortfolioButton.addEventListener('click', () => {
    window.location.href = 'portfolio.html';
  });
}

// Event listener for switch to terminal view button (on portfolio.html)
if (switchTerminalButton) {
  switchTerminalButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// Event listener for switch language button
switchLanguageButton.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'it' ? 'en' : 'it';
  updateContent();
});

// Load data when the page loads
loadData();