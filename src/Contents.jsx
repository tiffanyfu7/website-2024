export const projectsList = [{
        title: "🕹️ i [squared]",
        description: "A recreational space designed for students at the new Columbia Engineering building",
        imgPath: "./assets/images/isquared.png",
        imgAlt: "i [squared] Cover Image",
        tags: ["Human-Centered Design"],
        url: "https://drive.google.com/file/d/1Bm2TyNkDKrPmLmioo1amDHZAp3xDt6Z5/view?usp=sharing",
        urlType: "Video"
    }, {
        title: "📈 WiDS Datathon",
        description: "Built ML models to predict individual's sex and ADHD Diagnosis. Placed 19 nationally",
        imgPath: "./assets/images/datathon.png",
        imgAlt: "Datathon Overview Image",
        tags: ["ML", "Colab"],
        url: "https://github.com/wids-teamConscious/WIDS-Datathon-2025?tab=readme-ov-file",
        urlType: "Github"
    }, {
        title: "🤖 CHAD",
        description: "Integrated HCI application using AI chatbots to streamline healthcare processes",
        imgPath: "./assets/images/chad.png",
        imgAlt: "CHAD Prototype Cover Image",
        tags: ["Streamlit", "HCI"],
        url: "https://github.com/tiffanyfu7/hci-p2-healthcare-chatbots",
        urlType: "Github"
    }, {
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
Incoming Data Engineering Intern @ Meta
I am interested in IoT + SWE + HCI + AI.
I also enjoy playing tennis + listening to music + traveling.

tiffanyfu@TFHUB:~$ cat Current-Classes
 🖥️ Computer Science Theory
 🤖 Machine Learning
 🌐 Introduction to Databases
Previously: Advanced Programming, OS, HCI, IoT, DSA, Fundamentals of Computer Systems, NLP

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