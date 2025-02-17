const common = {
    skills: {
        languages   : ["bash", "cmd", "powershell", "c", "python", "php", "sql"],
        tools       : ["mysql", "git", "docker", "llm", "pycharm", "vscode", "devcontainers", "github", "tdd", "ollama"],
        os          : ["linux", "windows", "macos"],
    },
    projects: [
        {
            stack   : 'python, pandas, streamlit, mysql, sqlite',
            repo    : 'https://github.com/atrox3d/etl_lottery',
            url     : 'https://atrox3dlottery.streamlit.app/',
        },
    ],
    contacts: {
        email       : 'ANONYMIZED_EMAIL',
        github      : 'https://github/atrox3d',
        linkedin    : 'http://www.linkedin.com/in/giuseppe-roberto-lombardo',
    }
}

const data = {
    it: {
        terminal: {
            whoami: {
                name        : "Roberto Lombardo",
                description : "Sviluppatore backend"
            },
            skills: {
                filename    : 'competenze.txt',
                languages   : common.skills.languages,
                tools       : common.skills.tools,
                os          : common.skills.os,
            },
            projects: [
                {
                    title   : '1. ETL lottery',
                    stack   : common.projects[0].stack,
                    repo    : common.projects[0].repo,
                    url     : common.projects[0].url,
                },
            ],
            contacts: {
                title       : "Contatti",
                email       : common.contacts.email,
                github      : common.contacts.github,
                linkedin    : common.contacts.linkedin,
            }
        },
        normal: {
            name: "Roberto Lombardo",
            about: {
                title       : "Chi sono",
                content     : `Sono un informatico programmatore con un’esperienza ventennale nello sviluppo di software backend con focus sulle nuove tecnologie (attualmente LLM).
                                L’attitudine che mi contraddistingue è la voglia di imparare continuamente quanto c’è di nuovo nel mondo IT.
                                Desidero infatti fornire il migliore e più aggiornato supporto alle aziende con cui lavoro.`
            },
            skills: {
                title       : "Linguaggi, tecnologie, strumenti e sistemi operativi",
                languages   : common.skills.languages,
                tools       : common.skills.tools,
                os          : common.skills.os,
            },
            projects: {
                title       : "Progetti",
                items       : [
                    {
                        title: '1. ETL lottery',
                        stack   : common.projects[0].stack,
                        repo    : common.projects[0].repo,
                        url     : common.projects[0].url,
                        },
                ],
            },
            contacts: {
                title       : "Contatti",
                email       : common.contacts.email,
                github      : common.contacts.github,
                linkedin    : common.contacts.linkedin,
            }
        },
        buttons: {
            mode: {
                    terminal: "Modalità Normale",
                    normal:   "Modalità Terminale"
                },
            lang: "English"
        }
    },
    en: {
        terminal: {
            whoami: {
                name        : "Roberto Lombardo",
                description : "Backend developer"
            },
            skills: {
                languages   : common.skills.languages,
                tools       : common.skills.tools,
                os          : common.skills.os,
            },
            projects: [
                {
                    title   : '1. ETL lottery',
                    stack   : common.projects[0].stack,
                    repo    : common.projects[0].repo,
                    url     : common.projects[0].url,
                },
            ],
            contacts: {
                title       : "Contatti",
                email       : common.contacts.email,
                github      : common.contacts.github,
                linkedin    : common.contacts.linkedin,
            }
        },
        normal: {
            name            : "Roberto Lombardo",
            about           : {
                title       : "About Me",
                content     : `I am a computer programmer with twenty years of experience in backend software development with a focus on new technologies (currently LLM).
                                The attitude that distinguishes me is the desire to continuously learn what is new in the IT world.
                                In fact, I want to provide the best and most up-to-date support to the companies I work with.`
            },
            skills: {
                title       : "Languages, technologies, tools, and operating systems",
                languages   : common.skills.languages,
                tools       : common.skills.tools,
                os          : common.skills.os,
            },
            projects: {
                title       : "Projects",
                items       : [
                    {
                        title: '1. ETL lottery',
                        stack   : common.projects[0].stack,
                        repo    : common.projects[0].repo,
                        url     : common.projects[0].url,
                    },
                ]
            },
            contacts: {
                title       : "Contatti",
                email       : common.contacts.email,
                github      : common.contacts.github,
                linkedin    : common.contacts.linkedin,
            }
        },
        buttons: {
            mode: {
                terminal    : "Normal Mode",
                normal      : "Terminal Mode"
            },
            lang            : "Italiano"
        }
    }
};
