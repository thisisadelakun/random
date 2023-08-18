import '../../components/home/Home.css'

// import images
import profilepic from '../../assets/ade-pic.jpg'
import bmc from '../../assets/bmc-icon.svg'
import flipcoin from '../../assets/flipcoin.webp'
import calc from '../../assets/calc-app.svg'
import msf from '../../assets/msf.webp'
import portfolio from '../../assets/portfolio.webp'
import poslist from '../../assets/PostList.webp'

import { CgClose, CgMenuRight } from 'react-icons/cg';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaCodepen, FaArrowRight, FaJava } from 'react-icons/fa';
import { TbSquareRoundedFilled } from 'react-icons/tb';
import { TiArrowDownOutline } from 'react-icons/ti'
import { AiFillHeart } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import {
    SiFrontendmentor, SiFirebase, SiDjango, SiTypescript, SiAngular, SiJavascript,
    SiCss3, SiHtml5, SiReact, SiBootstrap, SiApachecordova, SiPython, SiWordpress
} from 'react-icons/si'
import { TfiAndroid, TfiWorld } from 'react-icons/tfi'

export const authorInfo = {
    name: "Abayomi Adelakun",
    firstName: "Abayomi",
    lastName: "Adelakun",
    email: "info@adelakunabayomi.com",
    number: "+234-810-3358-829",
    location: "Lagos, Nigeria",
    jobTitle: "Web & Mobile Developer",
    jobDescription: "Through constant practice & learning, I make things pretty and easy to use.",
    profilepic: profilepic,
    bmc: bmc,
    logo1: "A",
    logo2: "|",
}

export const authorDetails = {
    Detail1Title: "Development",
    Detail1Content: `When constructing applications, I come armed with precisely the tools needed. I have the ability to work 
                     harmoniously with them, or operate autonomously if required. My emphasis is on crafting rapid and robust solutions, 
                     with a sharp focus on delivering top-notch performance. Ensuring excellence is always at the forefront of my strategy.`,
    Detail2Title: "Design",
    Detail2Content: `I might not fit the mold of the traditional designer confined to an Illustrator canvas, meticulously adjusting 
                     pixels. However, I engrossed in the art of stylesheets, fine-tuning font nuances, and orchestrating layouts 
                     is my playground 🎨. My dedication lies in sculpting seamless user journeys, all while maintaining an aura of 
                     trendsetting flair.`,
    Detail3Title: "Contents",
    Detail3Content: `I craft words that capture hearts, blend ideas, and spark connection. From catchy headlines to thought-provoking 
                     prose, I weave content that leaves an indelible mark.`,
}

export const authorAbout = {
    About1Content: `As a versatile developer, driven by creativity, analytical thinking, and an insatiable curiosity. Focused on 
                    creating interactive digital experiences on the web. My work resides at the crossroads of design and technology, 
                    where I delve into the realms of problem-solving and innovation. Guided by the trifecta of curiosity, logic, and 
                    imagination, I unearth valuable insights, reframe challenges, and create purposeful solutions.`,

    AboutMain1Content: `Hi there, I am Abayomi Adelakun a web & Mobile developer, driven by creativity, analytical thinking, and an 
                        insatiable curiosity. Focused on creating interactive digital experiences on the web. My work resides at the 
                        crossroads of design and technology, where I delve into the realms of problem-solving and innovation. Guided by 
                        the trifecta of curiosity, logic, and imagination, I unearth valuable insights, reframe challenges, and 
                        create purposeful solutions.`,

    AboutMain2Content: ` With a dedicated focus on user experience and a knack for problem-solving, I'm committed to shaping digital 
                        experiences that seamlessly connect with people. Let's embark on a journey where innovation meets functionality, 
                        and where each line of code is a step toward enhancing the lives of users.`,

    AboutMain3Content: `I am also a graduate of Science Laboratory Technology (B.Tech). I am a person who is positive about every 
                        aspect of life. During my free time, you'll often find me immersed in the symphonies of music, challenging my 
                        mind with word games like Scrabble, enjoying a thrilling game of football, and delving into a diverse array of 
                        online and offline articles, fueling my passion for continuous learning.There are many things I like to do, 
                        to see, and to experience.  I am a trend learner.`,
}


export const icons = {
    in: <FaLinkedin className='card-icon-in' />,
    tw: <FaTwitter className='card-icon-tw' />,
    ig: <FaInstagram className='card-icon-ig' />,
    gt: <FaGithub className='card-icon-gt' />,
    fm: <SiFrontendmentor className='card-icon-fem' title="Frontend Mentor" />,
    yt: <FaYoutube className='card-icon-yt' />,
    cx: <CgClose className='custom-close-button' />,
    cm: <CgMenuRight />,
    link: <FiExternalLink />,
    like: <AiFillHeart className="svg" title='love' />,
    adwn: <TiArrowDownOutline className="arrow-scroll-dw" />,
    argt: < FaArrowRight className='arrow-right' />,
    cdpen: <FaCodepen />,
    theme1: <TbSquareRoundedFilled className="theme-1" />,
    theme2: <TbSquareRoundedFilled className="theme-2" />,
    theme3: <TbSquareRoundedFilled className="theme-3" />,
}

export const projects = [

    {
        id: 2,
        "projectTitle": "MULTI STEP FORM",
        "backgroundImage": msf,
        "category": 'web',
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://multi-step-form-pi-ten.vercel.app/",
        "source": "https://github.com/thisisadelakun/multi-step-form",
        "projectContent": "Built with HTML5, CSS3, TS, & React(Typescript).",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "ts": <SiTypescript />,
        "rjs": <SiReact />,
        "tag1": "typescript",
        "tag2": "react",
        "tag3": "form",
    },

    {
        id: 1,
        projectTitle: "Calculator App",
        backgroundImage: calc,
        category: 'web',
        catIcon: <TfiWorld className="svg" title='Web' />,
        live: "https://adelakuncalculator.netlify.app/",
        source: "https://github.com/thisisadelakun/calc-app",
        projectContent: "Built with HTML5, CSS3, & JS.",
        ht: <SiHtml5 />,
        css: <SiCss3 />,
        js: <SiJavascript />,
        tag1: "javascript",
        tag2: "html",
        tag3: "game",
    },

    {
        id: 3,
        projectTitle: "ADVICE GENERATOR",
        backgroundImage: "https://github.com/thisisadelakun/advice-generator-app/raw/main/Assets/Advice%20Desktop%20SS.PNG",
        category: 'web',
        catIcon: <TfiWorld className="svg" title='Web' />,
        live: "https://adelakunadvice.netlify.app/",
        source: "https://github.com/thisisadelakun/advice-generator-app",
        projectContent: "Built with HTML5, CSS3, JS, & Bootstrap.",
        ht: <SiHtml5 />,
        css: <SiCss3 />,
        js: <SiJavascript />,
        tag1: "javascript",
        tag2: "html",
        tag3: "advice",
    },

    {
        id: 4,
        projectTitle: "Coin Flip Game",
        category: 'web',
        backgroundImage: flipcoin,
        catIcon: <TfiWorld className="svg" title='Web' />,
        live: "https://adelakuncoinflip.netlify.app/",
        source: "https://github.com/thisisadelakun/coinFlipJS",
        projectContent: "Built using HTML,CSS, & JS.",
        ht: <SiHtml5 />,
        css: <SiCss3 />,
        js: <SiJavascript />,
        tag1: "javascript",
        tag2: "html",
        tag3: "game",
    },

    {
        id: 5,
        projectTitle: "Blog Post",
        category: 'web',
        backgroundImage: poslist,
        catIcon: <TfiWorld className="svg" title='Web' />,
        live: "https://github.com/thisisadelakun/PostList",
        source: "https://github.com/thisisadelakun/PostList",
        projectContent: "Built using HTML, CSS, JS, Reactjs, Python & Django.",
        ht: <SiHtml5 />,
        js: <SiJavascript />,
        rjs: <SiReact />,
        py: <SiDjango />,
        dj: <SiPython />,
        tag1: "Python",
        tag2: "ReactJs",
        tag3: "Django",
    },

    {
        id: 6,
        projectTitle: "City Blog App",
        category: 'mobile',
        catIcon: <TfiAndroid className="svg" title='Android' />,
        backgroundImage: "https://github.com/thisisadelakun/CityBlogApp/raw/main/www/img/CityBlog.png",
        live: "https://drive.google.com/file/d/1Ib2SEf8ME3LGbTlSY0gWuw0CjcVDKXxx/view?usp=drive_link",
        source: "https://github.com/thisisadelakun/CityBlogApp",
        projectContent: "Built using Apache-Cordova with HTML5, CSS3, Bootstrap, & Wordpress.",
        ht: <SiHtml5 />,
        css: <SiCss3 />,
        jv: <FaJava />,
        cd: <SiApachecordova />,
        js: <SiJavascript />,
        wp: <SiWordpress />,
        bs: <SiBootstrap />,
        tag1: "Android",
        tag2: "java",
        tag3: "cordova",
    },

    {
        id: 7,
        projectTitle: "Personal Portfolio",
        category: 'web',
        backgroundImage: portfolio,
        catIcon: <TfiWorld className="svg" title='Web' />,
        live: "https://adelakuncoinflip.netlify.app/",
        source: "https://github.com/thisisadelakun/coinFlipJS",
        projectContent: "Built with HTML5, CSS3, JS, ReactJs, Bootstrap and Firebase.",
        ht: <SiHtml5 />,
        css: <SiCss3 />,
        js: <SiJavascript />,
        rjs: <SiReact />,
        bs: <SiBootstrap />,
        fb: <SiFirebase />,
        tag1: "portfolio",
        tag2: "firebase",
        tag3: "javascript",
    },

    {
        id: 8,
        "projectTitle": "CV-APP",
        category: 'mobile',
        catIcon: <TfiAndroid className='svg' title='Android' />,
        backgroundImage: "https://github.com/thisisadelakun/CV-APP/raw/main/www/img/screenshot.png",
        live: "https://drive.google.com/file/d/147r6RlMJSFuavGVkL85CcI8HFIBIdW2Z/view?usp=drive_link/",
        "source": "https://github.com/thisisadelakun/CV-APP",
        projectContent: "Built using Apache-Cordova with HTML5, CSS3, AppJs, & Wordpress.",
        ht: <SiHtml5 />,
        css: <SiCss3 />,
        jv: <FaJava />,
        cd: <SiApachecordova />,
        js: <SiJavascript />,
        bs: <SiBootstrap />,
        tag1: "cv",
        tag2: "android",
        tag3: "java",
    },

    {
        id: 9,
        projectTitle: "Coin Flip Game",
        category: 'web',
        live: "https://adelakuncoinflip.netlify.app/",
        source: "https://github.com/thisisadelakun/coinFlipJS",
        catIcon1: "",
        tag1: "",
        tag2: "",
        tag3: "",
    },

    {
        id: 10,
        projectTitle: "Coin Flip Game",
        category: 'web',
        live: "https://adelakuncoinflip.netlify.app/",
        source: "https://github.com/thisisadelakun/coinFlipJS",
        catIcon1: "",
        tag1: "",
        tag2: "",
        tag3: "",
    },

    {
        id: 11,
        projectTitle: "Coin Flip Game",
        category: 'web',
        live: "https://adelakuncoinflip.netlify.app/",
        "source": "https://github.com/thisisadelakun/coinFlipJS",
        catIcon1: "",
        tag1: "",
        tag2: "",
        tag3: "",
    },

    {
        id: 12,
        projectTitle: "INTERACTIVE RATING",
        category: 'web',
        backgroundImage: "https://github.com/thisisadelakun/Interactive_rating/raw/main/src/assets/Rating_DSS_1.JPG",
        catIcon: <TfiWorld className="svg" title='Web' />,
        live: "https://adelakun-interactive-rating.netlify.app/",
        source: "https://github.com/thisisadelakun/Interactive_rating",
        projectContent: "Built with HTML5, CSS3, JS, & ReactJs.",
        ht: <SiHtml5 />,
        css: <SiCss3 />,
        js: <SiJavascript />,
        rjs: <SiReact />,
        tag1: "",
        tag2: "",
        tag3: "",
    },
]