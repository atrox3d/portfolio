const common = {
    languages   : ["bash", "cmd", "powershell", "c", "python", "php", "sql"],
    tools       : ["mysql", "git", "docker", "llm", "pycharm", "vscode", "devcontainers", "github", "tdd", "ollama"],
    os          : ["linux", "windows", "macos"],
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
                languages   : common.languages,
                tools       : common.tools,
                os          : common.os,
            },
            projects: [
                {
                    title   : '1. ETL lottery',
                    stack   : 'python, pandas, mysql , sqlite',
                    repo    : 'https://github.com/atrox3d/etl_lottery',
                    url     : 'https://atrox3dlottery.streamlit.app/',
                },
            ],
            contacts: [
                "Email: mario.rossi@example.com",
                "GitHub: github.com/mariorossi",
                "LinkedIn: linkedin.com/in/mariorossi"
            ]
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
                languages   : common.languages,
                tools       : common.tools,
                os          : common.os,
            },
            projects: {
                title       : "Progetti",
                items       : [
                    {
                        title: '1. ETL lottery',
                        stack: 'python, pandas, mysql , sqlite',
                        repo:  'https://github.com/atrox3d/etl_lottery',
                        url:   'https://atrox3dlottery.streamlit.app/',
                    },
                ],
            },
            contacts: {
                title       : "Contatti",
                email       : null,
                github      : 'https://github/atrox3d',
                linkedin    : 'https://linkedin',
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
                languages   : common.languages,
                tools       : common.tools,
                os          : common.os,
            },
            projects: [
                {
                    title   : '1. ETL lottery',
                    stack   : 'python, pandas, mysql , sqlite',
                    repo    : 'https://github.com/atrox3d/etl_lottery',
                    url     : 'https://atrox3dlottery.streamlit.app/',
                },
            ],
            contacts: [
                "Email: mario.rossi@example.com",
                "GitHub: github.com/mariorossi",
                "LinkedIn: linkedin.com/in/mariorossi"
            ]
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
                languages   : common.languages,
                tools       : common.tools,
                os          : common.os,
            },
            projects: {
                title       : "Projects",
                items       : [
                    {
                        title: '1. ETL lottery',
                        stack: 'python, pandas, mysql , sqlite',
                        repo:  'https://github.com/atrox3d/etl_lottery',
                        url:   'https://atrox3dlottery.streamlit.app/',
                    },
                ]
            },
            contacts: {
                title       : "Contacts",
                email       : null,
                github      : 'https://github/atrox3d',
            linkedin        : 'https://linkedin',
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
