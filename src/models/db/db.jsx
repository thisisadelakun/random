import '../../components/home/Home.css'

// import images
import profilepic from '../../assets/ade-pic.webp'
import bmc from '../../assets/bmc-icon.svg'
import flipcoin from '../../assets/flipcoin.webp'
import calc from '../../assets/calc-app.svg'
import msf from '../../assets/msf.webp'
import portfolio from '../../assets/folio.webp'
import poslist from '../../assets/PostList.webp'
import profilepic2 from '../../assets/ade-pic-2.webp'
import loop from '../../assets/loop.webp'
import trad from '../../assets/trad.webp'
import angfolio from '../../assets/angfolio.webp'
import gtg from '../../assets/gtg.webp'

// import resume
import resume from '../../assets/Abayomi_Adelakun_Resume.pdf'

// import react-icons
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaCodepen, FaArrowRight, FaJava } from 'react-icons/fa';
import { TbSquareRoundedFilled } from 'react-icons/tb';
import { TiArrowDownOutline } from 'react-icons/ti'
import { AiFillHeart } from 'react-icons/ai'
import { RiTwitterXLine } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'
import {
    SiFrontendmentor, SiFirebase, SiDjango, SiTypescript, SiAngular, SiJavascript, SiFacebook,
    SiCss3, SiHtml5, SiReact, SiBootstrap, SiApachecordova, SiPython, SiWordpress
} from 'react-icons/si'
import { TfiAndroid, TfiWorld } from 'react-icons/tfi'
import { IoIosSend } from 'react-icons/io'

export const authorInfo = {
    "name": "Abayomi Adelakun",
    "firstName": "Abayomi",
    "lastName": "Adelakun",
    "email": "contact@adelakunabayomi.com",
    "number": "+234-810-3358-829",
    "location": "Lagos, Nigeria",
    "jobTitle": "Web & Mobile Developer",
    "jobDescription": "Through constant practice & learning, I make things pretty and easy to use.",
    "profilepic": profilepic,
    "profilepic2": profilepic2,
    "bmc": bmc,
    "logo1": "A",
    "logo2": "|",
    "resume": resume,
}

export const images = [
    {
        "id": 0,
        "url": "https://github.com/thisisadelakun/Interactive_rating/raw/main/src/assets/Rating_DSS_1.JPG",
    },
    {
        "id": 1,
        "url": flipcoin,
    },
    {
        "id": 2,
        "url": calc,
    },
    {
        "id": 3,
        "url": msf,
    },
    {
        "id": 4,
        "url": portfolio,
    },
    {
        "id": 5,
        "url": loop,
    },

    {
        "id": 6,
        "url": "https://github.com/thisisadelakun/advice-generator-app/raw/main/Assets/Advice%20Desktop%20SS.PNG",
    },
    {
        "id": 7,
        "url": "https://raw.githubusercontent.com/thisisadelakun/countdown/main/src/screenshots/countdown_desktop.png",
    },

    {
        "id": 8,
        "url": trad,
    },

    {
        "id": 9,
        "url": trad,
    },

    {
        "id": 10,
        "url": trad,
    },
]

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

export const authorAboutContent = {
    "title": "About Me",
    "subTitle": `"Life is not about finding yourself, it's about creating yourself." - George Bernard Shaw`,
}

export const authorAbout = {
    About1Content: `As a versatile developer, driven by creativity, analytical thinking, and an insatiable curiosity. Focused on 
                    creating interactive digital experiences on the web. My work resides at the crossroads of design and technology, 
                    where I delve into the realms of problem-solving and innovation. Guided by the trifecta of curiosity, logic, and 
                    imagination, I unearth valuable insights, reframe challenges, and create purposeful solutions.`,

    AboutMain1Content: `Hi there, I am Abayomi Adelakun a web developer, driven by creativity, analytical thinking, and an 
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
    "in": <FaLinkedin className='card-icon-in' />,
    "fb": <SiFacebook className='card-icon-fb' title='Facebook' />,
    "tw": <RiTwitterXLine className='card-icon-tw' title='X (FKA Twitter)' />,
    "ig": <FaInstagram className='card-icon-ig' />,
    "gt": <FaGithub className='card-icon-gt' />,
    "fm": <SiFrontendmentor className='card-icon-fem' title="Frontend Mentor" />,
    "yt": <FaYoutube className='card-icon-yt' />,
    "cx": <CgClose className='custom-close-button' />,
    "cm": <CgMenuRight />,
    "link": <FiExternalLink />,
    "like": <AiFillHeart className="svg" title='love' />,
    "adwn": <TiArrowDownOutline className="arrow-scroll-dw" />,
    "argt": < FaArrowRight className='arrow-right' />,
    "cdpen": <FaCodepen />,
    "theme1": <TbSquareRoundedFilled className="theme-1" />,
    "theme2": <TbSquareRoundedFilled className="theme-2" />,
    "theme3": <TbSquareRoundedFilled className="theme-3" />,
}

export const icons2 = {
    "in": <FaLinkedin className='card-icon-in2' />,
    "fb": <SiFacebook className='card-icon-fb' title='Facebook' />,
    "tw": <RiTwitterXLine className='card-icon-tw2' title='X(FKA Twitter)' />,
    "ig": <FaInstagram className='card-icon-ig2' />,
    "gt": <FaGithub className='card-icon-gt2' />,
    "fm": <SiFrontendmentor className='card-icon-fem2' title="Frontend Mentor" />,
    "yt": <FaYoutube className='card-icon-yt2' />,
    "like": <AiFillHeart className="svg2" title='love' />,
    "adwn": <TiArrowDownOutline className="arrow-scroll-dw2" />,
    "cdpen": <FaCodepen />,
    "send": <IoIosSend />,
}

export const projectsContents = {
    "title": "PORTFOLIO",
    "subTitle": `"Your portfolio is a mirror reflecting your best work, a showcase of your skills, and a testament to your dedication." 
               - Abayomi Adelakun`

}

export const projects = [

    {
        "id": 0,
        "projectTitle": "Calculator App",
        "backgroundImage": calc,
        "category": 'web',
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://adelakuncalculator.netlify.app/",
        "source": "https://github.com/thisisadelakun/calc-app",
        "projectContent": "Built with HTML5, CSS3, & JS.",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "js": <SiJavascript />
    },

    {
        "id": 1,
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
        "rjs": <SiReact />
    },

    {
        "id": 2,
        "projectTitle": "ADVICE GENERATOR",
        "backgroundImage": "https://github.com/thisisadelakun/advice-generator-app/raw/main/Assets/Advice%20Desktop%20SS.PNG",
        "category": 'web',
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://adelakunadvice.netlify.app/",
        "source": "https://github.com/thisisadelakun/advice-generator-app",
        "projectContent": "Built with HTML5, CSS3, JS, & Bootstrap.",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "js": <SiJavascript />
    },

    {
        "id": 3,
        "projectTitle": "NURTURE REACH",
        "backgroundImage": "https://github.com/thisisadelakun/scrod/raw/main/nurtureassets/nurture.webp",
        "category": 'web',
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://nurturereach.netlify.app/",
        "source": "https://github.com/thisisadelakun/nurtureach",
        "projectContent": "Built with HTML5, CSS3, JS, ReactJs, Bootstrap, & Firebase.",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "js": <SiJavascript />,
        "rjs": <SiReact />,
        "fb": <SiFirebase />,
        "bs": <SiBootstrap />
    },

    {
        "id": 6,
        "projectTitle": "Coin Flip Game",
        "category": 'web',
        "backgroundImage": flipcoin,
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://adelakuncoinflip.netlify.app/",
        "source": "https://github.com/thisisadelakun/coinFlipJS",
        "projectContent": "Built using HTML,CSS, & JS.",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "js": <SiJavascript />
    },

    {
        "id": 7,
        "projectTitle": "Blog Post",
        "category": 'web',
        "backgroundImage": poslist,
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://github.com/thisisadelakun/PostList",
        "source": "https://github.com/thisisadelakun/PostList",
        "projectContent": "Built using HTML, CSS, JS, Reactjs, Python & Django.",
        "ht": <SiHtml5 />,
        "js": <SiJavascript />,
        "rjs": <SiReact />,
        "py": <SiDjango />,
        "dj": <SiPython />
    },

    {
        "id": 8,
        "projectTitle": "City Blog App",
        "category": 'mobile',
        "catIcon": <TfiAndroid className="svg" title='Android' />,
        "backgroundImage": "https://github.com/thisisadelakun/CityBlogApp/raw/main/www/img/CityBlog.png",
        "live": "https://drive.google.com/file/d/1Ib2SEf8ME3LGbTlSY0gWuw0CjcVDKXxx/view?usp=drive_link",
        "source": "https://github.com/thisisadelakun/CityBlogApp",
        "projectContent": "Built using Apache-Cordova(ANDROID) with HTML5, CSS3, JS, & Wordpress.",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "jv": <FaJava />,
        "cd": <SiApachecordova />,
        "js": <SiJavascript />,
        "wp": <SiWordpress />
    },

    {
        "id": 11,
        "projectTitle": "COUNT DOWN",
        "category": 'web',
        "backgroundImage": "https://raw.githubusercontent.com/thisisadelakun/countdown/main/src/screenshots/countdown_desktop.png",
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://adelakuncountdown.netlify.app/",
        "source": "https://github.com/thisisadelakun/countdown",
        "projectContent": "Built with HTML5, CSS3, JS, & ReactJs.",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "js": <SiJavascript />,
        "rjs": <SiReact />
    },

    {
        "id": 12,
        "projectTitle": "TRADEXPRESS",
        "category": 'web',
        "backgroundImage": trad,
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://adelakuntradexpress.netlify.app/",
        "source": "https://github.com/thisisadelakun/TradExpress",
        "projectContent": "Built with HTML5, CSS3, JS, & ReactJs.",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "js": <SiJavascript />,
        "rjs": <SiReact />
    },

    {
        "id": 13,
        "projectTitle": "LOOP STUDIO",
        "category": 'web',
        "backgroundImage": loop,
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://adelakunloopstudio.netlify.app/",
        "source": "https://github.com/thisisadelakun/LoopStudio",
        "projectContent": "Built with HTML5, CSS3, JS, & Bootstrap",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "js": <SiJavascript />,
        "rjs": <SiReact />
    },

    {
        "id": 14,
        "projectTitle": "INTERACTIVE RATING",
        "category": 'web',
        "backgroundImage": "https://github.com/thisisadelakun/Interactive_rating/raw/main/src/assets/Rating_DSS_1.JPG",
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://adelakun-interactive-rating.netlify.app/",
        "source": "https://github.com/thisisadelakun/Interactive_rating",
        "projectContent": "Built with HTML5, CSS3, JS, & ReactJs.",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "js": <SiJavascript />,
        "rjs": <SiReact />
    },

    {
        "id": 15,
        "projectTitle": "PORTFOLIO",
        "category": 'web',
        "backgroundImage": portfolio,
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://adelakunfolio.netlify.app/",
        "source": "https://github.com/thisisadelakun/mynewportfolio",
        "projectContent": "Built with HTML5, CSS3, JS, & Bootstrap.",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "js": <SiJavascript />,
        "bs": <SiBootstrap />,
    },

    {
        "id": 16,
        "projectTitle": "PORTFOLIO (ANGULAR)",
        "category": 'web',
        "backgroundImage": angfolio,
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://thisisadelakun.github.io/Angular-cv-app/home",
        "source": "https://github.com/thisisadelakun/Angular-cv-app",
        "projectContent": "Built with HTML5, CSS3, TS, & Angular",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "ts": <SiTypescript />,
        "ang": <SiAngular />
    },

    {
        "id": 17,
        "projectTitle": "PORTFOLIO (ANDROID)",
        "category": 'mobile',
        "catIcon": <TfiAndroid className='svg' title='Android' />,
        "backgroundImage": "https://github.com/thisisadelakun/CV-APP/raw/main/www/img/screenshot.png",
        "live": "https://drive.google.com/file/d/147r6RlMJSFuavGVkL85CcI8HFIBIdW2Z/view?usp=drive_link/",
        "source": "https://github.com/thisisadelakun/CV-APP",
        "projectContent": "Built using Apache-Cordova with HTML5, CSS3, AppJs, & Wordpress.",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "jv": <FaJava />,
        "cd": <SiApachecordova />,
        "js": <SiJavascript />,
        "bs": <SiBootstrap />
    },


    {
        "id": 18,
        "projectTitle": "GUESS THE WORD GAME",
        "category": 'web',
        "backgroundImage": gtg,
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://adelakunguessthegame.netlify.app/",
        "source": "https://github.com/thisisadelakun/Guess-The-Word-Game",
        "projectContent": "Built with HTML5, CSS3, & JS.",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />,
        "js": <SiJavascript />
    },

    {
        "id": 19,
        "projectTitle": "   QR CODE CARD",
        "category": 'web',
        "backgroundImage": "https://github.com/thisisadelakun/Product-preview-card/raw/main/Screenshots/Perfume%20Desktop%20.jpg",
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://adelakunpreviewcard.netlify.app/",
        "source": "https://github.com/thisisadelakun/Product-preview-card",
        "projectContent": "Built with HTML5, CSS3, JS, & Bootstrap",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />
    },

    {
        "id": 20,
        "projectTitle": "   QR CODE CARD",
        "category": 'web',
        "backgroundImage": "https://github.com/thisisadelakun/QR-Code-Design/raw/main/Screenshots/Desktop%20Screenshot.jpg",
        "catIcon": <TfiWorld className="svg" title='Web' />,
        "live": "https://adelakunqr.netlify.app/",
        "source": "https://github.com/thisisadelakun/QR-Code-Design",
        "projectContent": "Built with HTML5 & CSS3",
        "ht": <SiHtml5 />,
        "css": <SiCss3 />
    },
]


export const workContent = {
    "homeTitle": "Featured Works",
    "homeSubtitle": "Some open source projects, experimentals, web & Mobile apps.",

}

export const libraryContent = {
    "homeTitle": "Library",
    "homeSubtitle": "Contents about web development, design, trends and stories.",
}

export const mySkills = [
    {
        "id": 0,
        "skillsTitle": "Frontend",
        "skills1": "HTML",
        "skills2": "CSS",
        "skills3": "Bootstrap",
        "skills4": "Javascript",
        "skills5": "Typescript",
        "skills6": "Angular",
        "skills7": "Reactjs",
    },

    {
        "id": 1,
        "skillsTitle": "Backend",
        "skills1": "Firebase",
        "skills2": "Python",
        "skills3": "Django",
    },

    {
        "id": 2,
        "skillsTitle": "Tools",
        "skills1": "VSC",
        "skills2": "Git",
        "skills3": "Apache Cordova",
        "skills4": "Vite",
    },

    {
        "id": 3,
        "skillsTitle": "Others",
        "skills1": "Good team - working skills",
        "skills2": "Analytical skills",
        "skills3": "Content Writing",
    }
]

export const myFaqContent = {
    "title": "Frequently Asked Questions"
}

export const myFaq = [
    {
        "id": 0,
        "faqTitle": "What is the difference between front-end and back-end development?",
        "faq1": `Front-end development deals with the user interface and user experience of a website or application, focusing on what 
                 users see and interact with in their browsers. `,
        "faq2": `Back-end development manages server-side processes, databases, and server infrastructure, handling data storage, 
                 retrieval, and business logic.`,
        "faq3": `Front-end makes things look good and functional, while back-end makes them work and store data.`,
    },

    {
        "id": 1,
        "faqTitle": "What is web development, and what does a web developer do?",
        "faq1": `Web development is the process of creating and maintaining websites or web applications.`,
        "faq2": "Web developers design, code, and maintain websites to ensure they function properly and provide a great user experience.",
    },

    {
        "id": 2,
        "faqTitle": "What is the difference between a website and a web application?",
        "faq1": `A website typically consists of static content and provides information or displays content to visitors `,
        "faq2": `A web application, on the other hand, is interactive and allows users to perform specific tasks, often involving data 
                 input, processing, and manipulation.`,
        "faq3": `Web apps are more dynamic and user-driven compared to static websites.`
    },

    {
        "id": 3,
        "faqTitle": "What is SEO (Search Engine Optimization) and Why is it Important for Web Development?",
        "faq1": `SEO (Search Engine Optimization) is the practice of optimizing your website's content and structure to rank higher in 
                 search engine results, making it more visible to users `,
        "faq2": `It's crucial for driving organic (unpaid) traffic to your site, improving its visibility, and attracting potential 
                 customers or visitors.`,
    },
]

export const myFaq2 = [
    {
        "id": 0,
        "faqTitle": "Can you help me with a specific web development issue or project?",
        "faq1": `I'd be delighted to assist you with your web development issue or project!`,
        "faq2": "You can go ahead to provide me with the details of your project or describe the specific issue you're facing, through my email, or through the contact page and I'll do my best to offer guidance, solutions, or code samples to help you achieve your goals.",
    },

    {
        "id": 1,
        "faqTitle": "Do you have experience with responsive web design?",
        "faq1": "Yes, I prioritize responsive web design to ensure that websites look and function well on different devices, including smartphones, tablets, and desktops.",
    },

    {
        "id": 2,
        "faqTitle": "Can you work with existing websites and provide maintenance and updates",
        "faq1": "Yes, I offer website maintenance and updates. Whether it's fixing issues, adding new features, or keeping software up to date, I ensure websites remain in excellent condition.",
        "faq2": "",
    },

    {
        "id": 3,
        "faqTitle": "What is the cost of building a website?",
        "faq1": "The cost of building a website can vary significantly depending on factors like complexity, features and design.",
        "faq2": "Simple websites may cost a few hundred dollars, while complex ones with custom features can range from several thousand to tens of thousands of dollars.",
    },
]

export const contactContent = {
    "title": "Contact Me",
    "subTitle": `"Good communication is the bridge between confusion and clarity." - Abayomi Adelakun`,
    "mainTitle": "Hi there,",
    "mainSubTitle1": "Let's discuss your project.",
    "leftTitle": "Want to get in touch or talk about a project? Feel free to contact me via the form below",
    "rightTitle": "Feel free to contact me via email",
    "messagePH": "e.g., Hi, I need a web application for my Company 'X'. How soon can you get this done?",
    "find": "Or find me on"
}

