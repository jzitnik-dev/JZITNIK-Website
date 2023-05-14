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
        czech: "Ahoj, jsem Jakub Žitník, Full Stack Web Developer. Můj zájem o programování začal v 9 letech, kdy jsem začal chodit na koužek programování C#. Chytlo mě to! A nyní programuji webové stránky.<br><br>Věřím v technologie zítřka! V ty, které nehází návštěvníkům klacky pod nohy. Ty které přináši to, co návštěvníci chtějí; informace. Mám rád nové, ale přínosné technologie. Nemám rád ty, které vývoj brzdí.",
        english: "Hello, I'm Jakub Žitník, Full Stack Web Developer. My interest in programming started at the age of 9, when I started attending a C# programming class. I liked it! And now I program websites.<br><br>I believe in the technology of tomorrow. In those that don't throw curve balls at you. The ones that bring what visitors want; information. I like new but helpful technologies.  I don't like ones which slow down evolution."
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
        czech: "Zde mě můžete kontaktovat",
        english: "Here you can contact me"
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