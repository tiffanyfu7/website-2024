export const repo = "website-2024"

export const projectsList = [{
        title: "💧 WaterBoy",
        description: "An AI-Powered ChatBot for Babylon Micro-Farms built using React and Assistants API",
        imgPath: repo + "/assets/images/babylon.png",
        imgAlt: "WaterBoy Homepage",
        tags: ["React", "OpenAI", "Git"],
        url: "https://github.com/tiffanyfu7/babylon-microfarms-chatbot",
        urlType: "Github"
    }, {
        title: "🚗 TripSplit",
        description: "A hackathon project to track, calculate, and display shared expenses on a group trip.",
        imgPath: repo + "/assets/images/tripsplit.png",
        imgAlt: "TripSplit Homepage",
        tags: ["HTML/CSS/JS", "Firebase"],
        url: "https://github.com/tiffanyfu7/devfestproject",
        urlType: "GitHub"
    }, {
        title: "🖼️ Media Portfolio",
        description: "A compilation of my media and communications passion projects.",
        imgPath: repo + "/assets/images/cnwt.JPG",
        imgAlt: "A Graphic Design",
        tags: ["Adobe", "Design", "Video"],
        url: repo + "/portfolio.pdf",
        urlType: "Portfolio"
    }
]

export const factsList = [
    "I have a bifid uvula.",
    "Mike Pence and Chuck Taylor went to my high school",
    "Hats are my favorite accessories",
    "I play the violin, alto-saxophone, and guitar",
    "I have mild scoliosis :(",
    "I love ice cream and chocolate chip cookies",
    "I have great music taste",
    "Everything Everywhere All at Once is my favorite movie"
]

export const readingList = [{
        title: "The Almanak of Naval Ravikant",
        author: "Eric Jorgenson"
    }, {
        title:"Range: Why Generalists Triumph in a Specialized World",
        author:"David Epstein"
    }
]

export const CurrentPoints = () => {
    return (
        <ul style={{ listStyleType: "none", padding:"0"}} >
          <li>⛰️ Studying Abroad at HKUST</li>
          <li>📹 Storytelling + Open Building + Filmmaking on <span> </span>
            <a href="https://www.youtube.com/@tiffanyfu" target="_blank">YouTube</a>
          </li>
          <li>🏃🏻‍♀️ <a>Training</a> for the NYC Marathon</li>
          <li>🖋️ Writing on <span> </span>
            <a href="https://substack.com/@tiffanyfu" target="_blank">Substack</a>
          </li>
        </ul>
    )
}

export const TerminalHeader = () => {
    return (<pre>{`Welcome To Tiffany Fu's Personal Website.
(c) 2024 TF Inc. All Rights Reserved.
[#########################################################################################]
[hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh]
[eeeeeeeeeeeeeeeeeeeeee    eeee    eee         ee    eeee    eee    eeeeeeeeeeeeeeeeeeeeee]
[llllllllllllllllllllll    llll    lll    llllllll    ll    llll    llllllllllllllllllllll]
[llllllllllllllllllllll            lll        lllll        lllll    llllllllllllllllllllll]
[oooooooooooooooooooooo    oooo    ooo    ooooooooooo    ooooooooooooooooooooooooooooooooo]
[iiiiiiiiiiiiiiiiiiiiii    iiii    iii         iiiiii    iiiiiii    iiiiiiiiiiiiiiiiiiiiii]
[mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm]
[ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt]
[iiiii    ii            ii  iii        iiiiii            ii    ii         ii         iiiii]
[fffff    ffffff    fffffff ff    fffffffffffffff    ffffff    ff    fffffff    ffffffffff]
[fffff    ffffff    fffffffffff       fffffffffff    ffffff    ff       ffff       fffffff]
[aaaaa    aaaaaa    aaaaaaaaaaaaaa     aaaaaaaaaa    aaaaaa    aa    aaaaaaa    aaaaaaaaaa]
[nnnnn    nnnnnn    nnnnnnnnny        nnnnnnnnnnn    nnnnnn    nn    nnnnnnn    nnnnnnnnnn]
[yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy]
[!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!]
        `}</pre>
    )
} 

export const TerminalConstants = () => {
    return (<pre>{`tiffanyfu@TFHUB:~$ whoami
I am a second year CS student at Columbia University!
I am interested in HCI + AI.
I also enjoy playing tennis, listening to music, and traveling. 

tiffanyfu@TFHUB:~$ cat Current-Classes
I am taking the following classes abroad at HKUST
 🖥️ Operating Systems
 🤖 Exploring Artificial Intelligence
 🦾 Human-Computer Interaction
 🌐 Integrated Systems Design: IoT
In the past I've taken: Advanced Systems Programming, DSA, Discrete Math, MTV Calculus

tiffanyfu@TFHUB:~$ cat Current-Projects
My current CS Tinkerings
~ Adding Guest Book to GitHub profile
~ Building a Crossword Puzzle Generator
~ Learning Unreal Engine

tiffanyfu@TFHUB:~$ exit
Thanks for Visiting! 👋
Exit the Terminal to Learn More
    `} </pre>)
}

export const mediaIcons = [{
        title: "Resume",
        imgPath: repo + "/assets/icons/resume.png",
        imgAlt: "Resume Icon",
        url: repo + "/resume.pdf"
    }, {
        title: "GitHub",
        imgPath: repo + "/assets/icons/github.png",
        imgAlt: "GitHub Icon",
        url: "https://github.com/tiffanyfu7/"
    }, {
        title: "LinkedIn",
        imgPath: repo + "/assets/icons/linkedin.png",
        imgAlt: "LinkedIn Icon",
        url: "https://www.linkedin.com/in/tiffanyfu7/"
    }, {
        title: "YouTube",
        imgPath: repo + "/assets/icons/youtube.png",
        imgAlt: "YouTube Icon",
        url: "https://www.youtube.com/@tiffanyfu"
    }, {
        title: "Substack",
        imgPath: repo + "/assets/icons/substack.png",
        imgAlt: "Substack Icon",
        url: "https://substack.com/@tiffanyfu"
    }
]

export const projImg = repo + "/assets/icons/projects.png"
export const termImg = repo + "/assets/icons/terminal.png"
export const mailImg = repo + "/assets/icons/mail.png"