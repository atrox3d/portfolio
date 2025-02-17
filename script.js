let currentLang = 'it';
let isTerminalMode = true;
// console.log('main', 'content', data)

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

function updateTerminalContent() {
    // console.log('updateTerminalContent', 'currentLang', currentLang)
    // console.log('updateTerminalContent', 'isTerminalMode', isTerminalMode)

    const content = data[currentLang].terminal;

    // Update terminal content
    const terminalContent = document.getElementById('terminal-content');
    //
    // whoami
    //
    const whoami = document.getElementById('whoami-output');

    const [name, description] = whoami.querySelectorAll('p');
    name.textContent = content.whoami.name;
    description.textContent = content.whoami.description;
    //
    // skills
    //
    const skills = document.getElementById('skills-output');

    skills.innerHTML = '';
    const languages = document.createElement('p');
    languages.textContent = content.skills.languages.join(', ')
    skills.appendChild(languages);

    const tools = document.createElement('p');
    tools.textContent = content.skills.tools.join(', ');
    skills.appendChild(tools);

    const os = document.createElement('p');
    os.textContent = content.skills.os.join(', ');
    skills.appendChild(os);
    //
    // projects
    //
    const projects = document.getElementById('projects-output');

    projects.innerHTML = '';
    // console.log('contents.projects', content.projects)

    content.projects.forEach(project => {
        const title = document.createElement('p');
        title.textContent = project.title;

        const stack = document.createElement('p');
        stack.textContent = project.stack;

        const repo = document.createElement('p');
        // repo.textContent = project.repo;
        const repoLink = document.createElement('a');
        repoLink.textContent = project.repo;
        repoLink.href = project.repo;
        repo.appendChild(repoLink);

        const pdiv = document.createElement('div');
        pdiv.appendChild(title);
        pdiv.appendChild(stack);
        pdiv.appendChild(repo);

        if (project.url !== null){
            const url = document.createElement('p');
            const urlLink = document.createElement('a');
            urlLink.textContent = project.url;
            urlLink.href = project.url;
            url.appendChild(urlLink);
            pdiv.appendChild(url);
        }
        projects.appendChild(pdiv);
    });
    // console.log('projects', projects)
}

function updateNormalContent() {
    // console.log('updateNormalContent', 'currentLang', currentLang)
    // console.log('updateNormalContent', 'isTerminalMode', isTerminalMode)

    const content = data[currentLang].normal;

    // Update terminal content
    //const terminalContent = document.getElementById('terminal-content');
    // ... (Update terminal content based on language)



    // Update normal content
    const normalContent = document.getElementById('normal-content');
    const name = document.getElementById('normal-name');
    const sections = normalContent.querySelectorAll('section');
    const about = sections[0];
    const skills = sections[1];
    const projects = sections[2];
    const contacts = sections[3];

    // normalContent.querySelector('h1').textContent = content[currentLang].title;
    name.textContent = content.name;

    // About section
    about.querySelector('h2').textContent =
    content.about.title;

    about.querySelector('p').innerHTML =
    content.about.content.replace(/\n/g, '<br>');

    // Skills section
    // skill title
    const normalSkillsTitle = skills.querySelector('h2');
    normalSkillsTitle.textContent =
    content.skills.title;

    const oldSkills = skills.querySelector('ul');
    skills.innerHTML = ''
    skills.appendChild(normalSkillsTitle);
    skills.appendChild(
        createUnorderedList(
            content.skills.languages
        )
    );
    skills.appendChild(
        createUnorderedList(
            content.skills.tools
        )
    );
    skills.appendChild(
        createUnorderedList(
            content.skills.os
        )
    );
    // Projects section
    // normalProjects.querySelector('h2').textContent = 
    // currentContent.projects.title;

    // Clear existing project items
    projects.innerHTML = '<h2>' + content.projects.title + '</h2>';

    content.projects.items.forEach(project => {
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        projects.appendChild(projectTitle);

        const projectStack = document.createElement('p');
        projectStack.textContent = 'Stack: ' + project.stack;
        projects.appendChild(projectStack);

        const projectRepo = document.createElement('p');
        projectRepo.textContent = 'Repository: ';
        const repoURL = document.createElement('a');
        repoURL.textContent = project.repo
        repoURL.href =  project.repo;
        projectRepo.appendChild(repoURL)
        projects.appendChild(projectRepo);
    });

    // Contacts section
    //normalContacts.querySelector('h2').textContent = 
    //currentContent.contacts.title;
    contacts.innerHTML = '<h2>' + content.contacts.title + '</h2>';

    if (content.contacts.email !== null) {
        const normalEmail = document.createElement('p');
        normalEmail.innerHTML =
        '<b>Mail:</b> ' +
        content.contacts.email;
        contacts.appendChild(normalEmail)
    }

    const normalGithub = document.createElement('p')
    const gh = content.contacts.github
    normalGithub.innerHTML =
        '<b>Github:</b> <a href="' + gh + '">'+gh+'</a>';
    contacts.appendChild(normalGithub)

    const normalLinkedin = document.createElement('p')
    const li = content.contacts.linkedin;
    normalLinkedin.innerHTML =
        '<b>Linkedin:</b> <a href="' + li + '">'+li+'</a>';
    contacts.appendChild(normalLinkedin)


}

function updateContent() {
    updateTerminalContent();
    updateNormalContent();
}
// Initial content update

//toggleMode()    // delete me

updateButtonText();
updateContent();
