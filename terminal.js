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
    languages.textContent = content.skills.languages.join(', ');
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

        if (project.url !== null) {
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
