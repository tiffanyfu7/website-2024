export const projectsList = [{
        title: "💧 WaterBoy",
        description: "An AI-Powered ChatBot for Babylon Micro-Farms built using React and Assistants API",
        imgPath: "./assets/images/babylon.png",
        imgAlt: "WaterBoy Homepage",
        tags: ["React", "OpenAI", "Git"],
        url: "https://github.com/tiffanyfu7/babylon-microfarms-chatbot",
        urlType: "Github"
    }, {
        title: "🚗 TripSplit",
        description: "A hackathon project to track, calculate, and display shared expenses on a group trip.",
        imgPath: "./assets/images/tripsplit.png",
        imgAlt: "TripSplit Homepage",
        tags: ["HTML/CSS/JS", "Firebase"],
        url: "https://github.com/tiffanyfu7/devfestproject",
        urlType: "GitHub"
    }, {
        title: "🖼️ Media Portfolio",
        description: "A compilation of my media and communications passion projects.",
        imgPath: "./assets/images/cnwt.JPG",
        imgAlt: "A Graphic Design",
        tags: ["Adobe", "Design", "Video"],
        url: "./portfolio.pdf",
        urlType: "Portfolio"
    }
]

export const readingList = [{
        title: "The Almanak of Naval Ravikant",
        author: "Eric Jorgenson"
    }, {
        title:"Range: Why Generalists Triumph in a Specialized World",
        author:"David Epstein"
    }, {
        title:"The Nicomachean Ethics",
        author:"Aristotle"
    }
]

export const CurrentPoints = () => {
    return (
        <ul style={{ listStyleType: "none", padding:"0"}} >
          <li>📹 Storytelling on <span> </span>
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
I am a third year CS student at Columbia University!
Currently an AI/ML Break Through Tech Fellow + Interview Prep Student with CodePath
I am interested in IoT + SWE + HCI + AI.
I also enjoy playing tennis + listening to music + traveling.

tiffanyfu@TFHUB:~$ cat Current-Classes
 🖥️ Fundamentals of Computer Systems
 🤖 Natural Language Processing
 🌐 Elements of Data Science
 📐 Ordinary Differential Equations
Previously: Advanced Programming, OS, HCI, IoT, DSA

tiffanyfu@TFHUB:~$ cat Current-Projects
My current CS Tinkerings
~ Hacking a WatchOS App
~ Building Mondrianette
~ Learning CAD

tiffanyfu@TFHUB:~$ exit
Thanks for Visiting! 👋
Exit the Terminal to Learn More
    `} </pre>)
}

export const mediaIcons = [{
        title: "Resume",
        imgPath: "./assets/icons/resume.png",
        imgAlt: "Resume Icon",
        url: "./resume.pdf"
    }, {
        title: "GitHub",
        imgPath: "./assets/icons/github.png",
        imgAlt: "GitHub Icon",
        url: "https://github.com/tiffanyfu7/"
    }, {
        title: "LinkedIn",
        imgPath: "./assets/icons/linkedin.png",
        imgAlt: "LinkedIn Icon",
        url: "https://www.linkedin.com/in/tiffanyfu7/"
    }, {
        title: "YouTube",
        imgPath: "./assets/icons/youtube.png",
        imgAlt: "YouTube Icon",
        url: "https://www.youtube.com/@tiffanyfu"
    }, {
        title: "Substack",
        imgPath: "./assets/icons/substack.png",
        imgAlt: "Substack Icon",
        url: "https://substack.com/@tiffanyfu"
    }
]

export const projImg = "./assets/icons/projects.png"
export const termImg = "./assets/icons/terminal.png"
export const mailImg = "./assets/icons/mail.png"