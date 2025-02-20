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
    contacts.innerHTML = '<h2>' + content.contacts.title + '</h2>';
    
    /*
    if (content.contacts.email !== null) {
        const normalEmail = document.createElement('p');
        normalEmail.innerHTML =
        '<b>Mail:</b> ' +
        content.contacts.email;
        contacts.appendChild(normalEmail)
    }
    */
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
