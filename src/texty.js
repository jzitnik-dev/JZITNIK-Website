var defaultLanguage = "english"
const texty = {
    "Ahoj, já jsem": {
        english: "Hello, I'm",
        czech: "Ahoj, já jsem"
    },
    "O mě": {
        english: "About me",
        czech: "O mě"
    },
    "aboutme": {
        czech: "Ahoj, jsem Jakub Žitník, Full Stack Web Developer. Můj zájem o programování začal v 9 letech, kdy jsem začal chodit na koužek programování C#.<br><br>Vytvářím vysoce škálovatelné a spolehlivé webové aplikace, programy a skripty. Pracuji s databázemi jako jsou MySQL a MongoDB. Umím vytvořit plně funkční aplikaci včetně designu a funkčnosti.",
        english: "Hello, I'm Jakub Žitník, Full Stack Web Developer. My interest in programming started at the age of 9, when I started attending a C# programming class.<br><br>I build highly scalable and reliable web applications, programs and scripts. I work with databases such as MySQL and MongoDB. I can create fully working application including design and functionality."
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
        czech: "Už v 6 letech mě bavily počítače. Vytvářel jsem si 'programy' v excelu a powerpointu s interaktivními prvky jako například tlačítky. <a download href='/download/KLINDOWS 2.1.pptx'>Stáhnout</a><br>V té době jsem chtěl umět víc. Chtel jsem aby ten program mohl upravovat soubory a další věci. To ale PowerPoint nepodporuje.<br><br>V roce 2018 jsem začal poprvé programovat. Začal jsem chodit do kroužku programování C#. Bavilo mě to. Vytvářel jsem si svoje konzolové aplikace i aplikace s uživatelským rozhraním. <a download href='/download/app.zip'>Stáhnout</a>",
        english: "I was already interested in computers at the age of 6. I was creating 'programs' in excel and powerpoint with interactive elements such as buttons. <a download href='/download/KLINDOWS 2.1.pptx'>Download (in czech)</a><br>At that time I wanted to know more. I wanted the program to be able to edit files and more. But PowerPoint doesn't support that.<br><br>In 2018, I started programming for the first time. I started going to a C# programming club. I enjoyed that. I was creating my own console applications as well as user interface applications. <a download href='/download/app.zip'>Download (in czech)</a>"
    },
    "zacatky": {
        czech: "Začátky",
        english: "My beginnings"
    },
    "webdevelAboutMe": {
        czech: "Protože kroužek C# dále nepokračoval na rok jsem přestal se učit programovat. Stále jsem si programoval svoje programy ale nic nového jsem se neučil. V roce 2020 jsem se rozhodl že se začnu učit vytváření webových stránek. Začal jsem se učit HTML a CSS. Bohužel z této doby nemám žádný projekt.",
        english: "Since the C# club didn't continue for a year, I stopped learning programming. I was still programming my programs but I wasn't learning anything new. In 2020, I decided to start learning how to create websites. I started learning HTML and CSS. Unfortunately, I don't have any projects at this time."
    },
    "JavaScriptAboutMe": {
        czech: "V roce 2021 jsem se začal učit JavaScript. Vytvářel jsem si prográmky jako například <a href='/download/clickspeed.zip'>Click speed tester</a>.",
        english: "I started learning JavaScript in 2021. I was creating programs such as <a href='/download/clickspeed.zip'>Click speed tester (in czech)</a>."
    },
    "klindosAboutMe": {
        czech: "Na začátku roku 2021 jsem vytvořil svůj největší projekt, KLIND OS. Je to 'operační systém' napsaný v JavaScriptu. Na tomto projektu pracuji dodnes. <a href='https://klindos.jzitnik.is-a.dev'>Zobrazit</a>",
        english: "At the beginning of 2021, I created my biggest project, KLIND OS. It's an 'operating system' written in JavaScript. I am still working on this project today. <a href='https://klindos.jzitnik.is-a.dev'>View (in czech)</a>"
    },
    "avice": {
        czech: "A více",
        english: "And more"
    },
    "aviceAboutMe": {
        czech: "Získal jsem několik <a href='/certificates'>certifikátů</a>. Naučil jsem se hodně nových programovacích jazyků. Vytvořil jsem hodně projektů a zlepšil se v programování. Programování beru jako koníček. Baví mě a rád se zlepšuji. Vytvořil jsem si <a href='/link/github'>GitHub</a> kde nahrávám své kódy. Pokud by jste mě chtěli podpořit, dejte nějakému repozitáři ",
        english: "I have obtained several <a href='/certificates'>certificates</a>. I learned a lot of new programming languages. I created a lot of projects and got better at programming. I take programming as a hobby. I enjoy it and I like to improve. I created a <a href='/link/github'>GitHub</a> where I upload my codes. If you would like to support me, give some of my repositories a "
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
    "resume": {
        czech: "Moje cesta",
        english: "Resume"
    },
    "cemusevenuji": {
        czech: "Čemu se věnuji?",
        english: "What do I do?"
    },
    "cemusevenujimore": {
        czech: "Vytvářím vysoce škálovatelné a spolehlivé webové aplikace, programy a skripty. Pracuji s databázemi jako jsou MySQL a MongoDB. Umím vytvořit plně funkční aplikaci včetně designu a funkčnosti.",
        english: "I build highly scalable and reliable web applications, programs and scripts. I work with databases such as MySQL and MongoDB. I can create fully working application including design and functionality."
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