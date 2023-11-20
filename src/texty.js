var defaultLanguage = "english"
const texty = {
    "Ahoj, já jsem": {
        english: "Hello, I'm",
        czech: "Ahoj, já jsem"
    },
    "O mě": {
        english: "About me",
        czech: "O mně"
    },
    "cemusevenujimore": {
        czech: "Vytvářím vysoce škálovatelné a spolehlivé webové aplikace, programy a skripty. Pracuji s databázemi jako jsou MySQL. Umím vytvořit plně funkční aplikaci včetně designu a funkčnosti. Mám zkušenosti s React, NextJS, NodeJS a Python. Programuji už 5 let. Web developmentu se věnuji 3 roky.",
        english: "I build highly scalable and reliable web applications, programs and scripts. I work with databases such as MySQL. I can create fully working application including design and functionality. I have experience with React, NextJS, NodeJS and Python. I have been programming for 5 years. I have been involved in web development for 3 years."
    },
    "aboutme": {
        czech: "Ahoj, jmenuji se Jakub Žitník, Full Stack Web Developer.<br><br>Vytvářím vysoce škálovatelné a spolehlivé webové aplikace, programy a skripty. Pracuji s databázemi jako jsou MySQL. Umím vytvořit plně funkční aplikaci včetně designu a funkčnosti. Mám zkušenosti s React, NextJS, NodeJS a Python. Programuji už 5 let. Web developmentu se věnuji 3 roky.",
        english: "Hello, I'm Jakub Žitník, Full Stack Web Developer.<br><br>I build highly scalable and reliable web applications, programs and scripts. I work with databases such as MySQL. I can create fully working application including design and functionality. I have experience with React, NextJS, NodeJS and Python. I have been programming for 5 years. I have been involved in web development for 3 years."
    },
    "zkusenosti": {
        czech: "Zkušenosti",
        english: "Skills"
    },
    "ucimse": {
        czech: "Právě se učím",
        english: "Learning"
    },
    "certifikaty": {
        czech: "Certifikáty",
        english: "Certificates"
    },
    "projekty": {
        czech: "Projekty",
        english: "Projects"
    },
    "totoProjekty": {
        czech: "Toto jsou některé moje projekty",
        english: "These are some of my projects"
    },
    "kontakt": {
        czech: "Kontakt",
        english: "Contact"
    },
    "totoKontakt": {
        czech: "Zde mě můžete kontaktovat nebo na email: email@jzitnik.is-a.dev",
        english: "Here you can contact me. Or you can contact me on email@jzitnik.is-a.dev"
    },
    "submit": {
        czech: "Odeslat",
        english: "Submit"
    },
    "spatneVyplnenyFormular": {
        czech: "Toto je špatně vyplněný formulář!",
        english: "This is not a valid form content!"
    },
    "nastalachybaformular": {
        czech: "Aj, nastala chyba. Zkuste to znovu později.",
        english: "Error occurred. Please try again later."
    },
    "bylaodeslanaformular": {
        czech: "Zpráva byla odeslána",
        english: "Message was successfully sented."
    },
    "prosimpockejte": {
        czech: "Prosím počkejte",
        english: "Please wait"
    },
    "jmeno": {
        czech: "Jméno",
        english: "Name"
    },
    "zprava": {
        czech: "Zpráva",
        english: "Message"
    },
    "pravavyhrazena": {
        czech: "Všechna práva vyhrazena",
        english: "All rights reserved"
    },
    "legalniinfo": {
        czech: "Právní informace",
        english: "Legal information"
    },
    "cookiepreference": {
        czech: "Upravit cookie preference",
        english: "Edit cookie preferences"
    },
    "notfound": {
        czech: "Omlouváme se ale tato stránka nebyla nalezena!",
        english: "We are sorry but this site you are looking for does not exist."
    },
    "domov": {
        czech: "Domov",
        english: "Home"
    },
    "mamcertifikaty": {
        czech: "Mám i nějaké certifikáty",
        english: "I've also some certificates"
    },
    "zmenitJazyky": {
        czech: "Změnit jazyk",
        english: "Change language"
    },
    "vytvoril": {
        czech: "Vytvořil",
        english: "By"
    },
    "zobrazitVse": {
        czech: "Zobrazit vše",
        english: "Show all"
    },
    "aboutKLINDOS": {
        czech: "KLIND OS je můj největší projekt. Je to 'operační systém' v prohlížeči napsaný v JavaScript.",
        english: "KLIND OS is my biggest project. It is 'operating system' that can be used in your browser. It is written in JavaScript."
    },
    "aboutABC": {
        czech: "Automatic bio changer je program který automaticky změní vaše bio na podporovaných sociálních sítích.",
        english: "Automatic bio changer is program that will automatically change your bio on supported platforms."
    },
    "welcome": {
        czech: "Vítejte",
        english: "Welcome"
    },
    "longZacatkyAboutMe": {
        czech: "Už v 6 letech mě bavily počítače. Vytvářel jsem si 'programy' v excelu a powerpointu s interaktivními prvky jako například tlačítky. <a download href='/download/KLINDOWS 2.1.pptx'>Stáhnout</a><br><br>V roce 2018 jsem začal poprvé programovat. Začal jsem chodit do kroužku programování C#. Vytvářel jsem si svoje konzolové aplikace i aplikace s uživatelským rozhraním. <a download href='/download/app.zip'>Stáhnout</a>",
        english: "I was already interested in computers at the age of 6. I was creating 'programs' in excel and powerpoint with interactive elements such as buttons. <a download href='/download/KLINDOWS 2.1.pptx'>Download (in czech)</a><br><br>In 2018, I started programming for the first time. I started going to a C# programming club. I was creating my own console applications as well as user interface applications. <a download href='/download/app.zip'>Download (in czech)</a>"
    },
    "zacatky": {
        czech: "Začátky",
        english: "My beginnings"
    },
    "webdevelAboutMe": {
        czech: "V roce 2020 jsem se začal učit vytváření webových stránek. Začal jsem se učit HTML a CSS.",
        english: "In 2020, I started learning how to create websites. I started learning HTML and CSS."
    },
    "JavaScriptAboutMe": {
        czech: "V roce 2021 jsem se začal učit JavaScript. Vytvářel jsem si programy jako například <a href='/download/clickspeed.zip'>Click speed tester</a>.",
        english: "I started learning JavaScript in 2021. I was creating programs such as <a href='/download/clickspeed.zip'>Click speed tester (in czech)</a>."
    },
    "webdevelopment": {
        czech: "Web development",
        english: "Web development"
    },
    "webdevelopmentmore": {
        czech: "Získal jsem několik <a href='/certificates'>certifikátů</a>. Začal naučil jsem se hodně technologií týkajících se web developmentu. Také jsem si vytvořil <a href='/link/github'>GitHub</a> kde nahrávám svoje projekty.",
        english: "I have obtained several <a href='/certificates'>certificates</a>. I started learning a lot of technologies related to web development. I also created <a href='/link/github'>GitHub</a> where I upload my projects."
    },
    "qplaymore": {
       czech: "V říjnu jsem se stal web developerem na minecraft serveru Qplay.cz.",
       english: "In October, I became a web developer on the czech minecraft server Qplay.cz."
    },
    "avice": {
      czech: "A více",
      english: "And more"
    },
    "avicemore": {
      czech: "Znám i další. Umím vytvořit počítačové programy, mobilní aplikace, webscrapers, a další. Pokud mě chcete podpořit, dejte nějakému mému repozitáři ",
      english: "I know others. I can create computer programs, mobile applications, webscrapers, and more. If you want to support me, give one of my repositories a "
    },
    "star": {
        czech: "hvězdu",
        english: "star"
    },
    "more": {
        czech: "Více",
        english: "More"
    },
    "pockejte": {
        czech: "Prosím počkejte",
        english: "Please wait"
    },
    "souborstazen": {
        czech: "Soubor byl stažen",
        english: "File is downloaded"
    },
    "prispevky": {
        czech: "Příspěvky",
        english: "Blog posts"
    },
    "someblog": {
        czech: "Poslední příspěvky z mého blogu",
        english: "Latest posts from my blog"
    },
    "statuspage": {
        czech: "Status stránka",
        english: "Status page"
    },
    "aboutstatus": {
        czech: "Stránka na které zjistíte jestli jsou moje stránky dostupné.",
        english: "Website where you can find if my website is available."
    },
    "open": {
        czech: "Otevřít",
        english: "Open"
    },
    "prispevekNeexistuje": {
        czech: "Příspěvek neexistuje",
        english: "The post does not exist"
    },
    "prispevekNeexistujeMore": {
        czech: "Omlouváme se, příspěvek neexistuje.",
        english: "Sorry, the post does not exist."
    },
    "cemusevenuji": {
        czech: "Čemu se věnuji?",
        english: "What do I do?"
    },
    "aboutLanguager": {
        czech: "Languager je JavaScriptová knihovka ktera Vám umoží vytvářet webové stránky s více jazyky jednoduše.",
        english: "Languager is JavaScript library that helps you easily create multilingual websites."
    },
    "madewith": {
        czech: "Vytvořeno s",
        english: "Made with"
    },
    "inczechia": {
        czech: "v České Republice",
        english: "in Czech Republic"
    },
    "pages": {
        czech: "Stránky",
        english: "Pages"
    },
    "technologie": {
        czech: "Technologie",
        english: "Technologies"
    },
    "technologiepouzivam": {
        czech: "Technologie, které používám",
        english: "Technologies I use"
    },
    "fullstack": {
        czech: "Full Stack Web Developer",
        english: "Full Stack Web Developer and tech enthusiast"
    }
}
if (!localStorage.getItem("language")) ((navigator.language || navigator.userLanguage).split("-")[0] == "cs") ? localStorage.setItem("language","czech") : localStorage.setItem("language","english");
var final = {}
for (var i in texty)final[i]=texty[i][localStorage.getItem("language")||defaultLanguage]||texty[i][defaultLanguage]
export function switchLanguage(language) {
    localStorage.setItem("language",language);
    window.location.reload();
}
export default final;
