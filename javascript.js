const BOUTON_PROJET_1 = document.getElementById("nom-projet1");
const BOUTON_PROJET_2 = document.getElementById("nom-projet2");
const BOUTON_PROJET_3 = document.getElementById("nom-projet3");
const BOUTON_PROJET_4 = document.getElementById("nom-projet4");
const BOUTON_PROJET_5 = document.getElementById("nom-projet5");
const BOUTON_PROJET_6 = document.getElementById("nom-projet6");

BOUTON_PROJET_1.addEventListener("change", affiche_projet);
BOUTON_PROJET_2.addEventListener("change", affiche_projet);
BOUTON_PROJET_3.addEventListener("change", affiche_projet);
BOUTON_PROJET_4.addEventListener("change", affiche_projet);
BOUTON_PROJET_5.addEventListener("change", affiche_projet);
BOUTON_PROJET_6.addEventListener("change", affiche_projet);

alert("Bonjour, ceci est un site web en construction. Des changements auront lieu prochainement, et la version mobile n'est pas encore adaptée. Merci.");

// Tableau des images à précharger
const imagesToPreload = [
    "./image/card_infra.webp",
    "./image/card_projet_prog.webp",
    "./image/card_raberrypi.webp",
    "./image/card_appMobile.webp",
    "./image/card_api.webp"
];


// Tableau pour stocker les images préchargées
const preloadedImages = [];

// Fonction pour précharger les images
function preloadImages(imageArray) {
    imageArray.forEach(src => {
        const img = new Image();
        img.src = src;
        preloadedImages.push(img); // On ajoute l'image au tableau pour la rendre accessible
    });
}

// Préchargement des images lorsque la page est chargée
window.addEventListener('load', function () {
    preloadImages(imagesToPreload);

});



function burgerMenu() {

    const burgerMenuBtn = document.querySelector('.burger-menu-btn')
    const burgerMenuBtnIcon = document.querySelector('.burger-menu-btn .fa-bars')
    const burgerMenu = document.querySelector('.burger-menu')

    burgerMenuBtn.onclick = function () {

        burgerMenu.classList.toggle('open')
        const isOpen = burgerMenu.classList.contains('open')
        burgerMenuBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

    }
}

function affiche_projet(event) {
    console.log(event.target.id);

    const labels_color = [
        document.querySelector("label[for='nom-projet1']"),
        document.querySelector("label[for='nom-projet2']"),
        document.querySelector("label[for='nom-projet3']"),
        document.querySelector("label[for='nom-projet4']"),
        document.querySelector("label[for='nom-projet5']"),
        document.querySelector("label[for='nom-projet6']")
    ];

    labels_color.forEach(labels_color => labels_color.classList.remove('bouton-actif'));

    // Ajouter la classe 'bouton-actif' au label associé au bouton cliqué
    const labelActif = document.querySelector(`label[for='${event.target.id}']`);
    if (labelActif) labelActif.classList.add('bouton-actif');

    document.getElementById("obj_update").innerHTML = "<strong>Bilan Personnel:</strong>";
    document.getElementById("h4_update").innerHTML = "Compétences aquises:";

    switch (event.target.id) {
        case "nom-projet1":
            //Concevoir un réseau informatique sécurisé pour une entreprise
            document.getElementById("h3_update").innerHTML = "Concevoir un réseau informatique sécurisé pour une entreprise:";
            document.getElementById("para_update").innerHTML = "Dans le cadre de la SAÉ (Situation d'Apprentissage et d'Évaluation), ce projet consistait à concevoir un réseau informatique sécurisé pour une entreprise. L'objectif principal était de créer une infrastructure réseau fiable, évolutive et sécurisée, capable de protéger les données sensibles de l’entreprise tout en assurant un accès fluide aux ressources internes pour les employés.";
            document.getElementById("img_id_1").src = preloadedImages[0].src;
            document.getElementById("text_1").innerHTML = "<ul><li class='li_style'>Infrasture Windows et Linux:</li><ul><li>Gestion des services Active Directory, DHCP et DNS</li><li>Mise en place d'un serveur web sous Apache2</li><li>Automatisation Active Directory avec Power Shell</li></ul><li class='li_style'>Réseaux:</li><ul><li>Routage Inter-Vlan</li><li>Téléphonie IP</li></ul></ul>";

            
            break;
        case "nom-projet2":

            document.getElementById("h3_update").innerHTML = "Mettre en place un site web dynamique et sécurisé pour une entreprise"
            document.getElementById("para_update").innerHTML = "Dans le cadre d'une SAÉ, j'ai développé un site web pour une entreprise de karting, intégrant des fonctionnalités de gestion de créneaux pour les clients et un planning pour l'administrateur. Ce projet avait pour but de concevoir une plateforme intuitive et sécurisée permettant aux clients de réserver des créneaux en ligne, tout en offrant à l’entreprise un système de gestion interne efficace pour l'organisation des activités.";
            document.getElementById("img_id_1").src = preloadedImages[1].src;
            document.getElementById("text_1").innerHTML = "<ul><li class='li_style'>Monté en compétence de language de balisage:</li><ul><li>HTML et CSS</li></ul><li class='li_style'>Monté en compétence de language de programation web:</li><ul><li>PHP et découverte de JavaScript</li></ul><ul><li class='li_style'>Sécurisation:</li><li>Gestion de session et de cookie</li><li>Utilisation de PostgreSQL</li></ul></ul>";

            break;
        case "nom-projet3":
            document.getElementById("h3_update").innerHTML = "Hébergement de site web sur un serveur Apache2 avec Raspberry Pi"
            document.getElementById("para_update").innerHTML = "Dans le cadre de mes projets personnels, j’ai configuré et déployé un serveur Apache2 sur un Raspberry Pi à domicile pour héberger mon site web, accessible via un nom de domaine. J'ai automatisé plusieurs tâches en Bash pour simplifier la gestion et la maintenance du serveur.";
            document.getElementById("img_id_1").src = preloadedImages[2].src;
            document.getElementById("text_1").innerHTML = "<ul><li class='li_style'>Connaissance Système</li><ul><li>Mettre en place un environnement d’hébergement stable et sécurisé sur un Raspberry Pi</li><li>Automatiser les mises à jour du serveur et du site web via des scripts Bash</li><li>Synchroniser le code source avec GitHub pour un déploiement continu</li></ul><li class='li_style'>Recevoir un rapport de mise à jour automatique par email pour suivre les modifications</li></ul></ul>";
            break;


        case "nom-projet4":
            document.getElementById("h3_update").innerHTML = "Développement d’une application Android communicante"
            document.getElementById("para_update").innerHTML = "Dans le cadre d'une SAÉ, je développe une application Android sous Cordova permettant de récupérer et d’exploiter des informations via une API. Cette application intègre plusieurs fonctionnalités système du téléphone, comme la caméra et le GPS, pour offrir une expérience utilisateur complète.<p>Mon objectif personnel est de permettre à l’application de gérer et surveiller mon serveur web Raspberry Pi en temps réel en récupérant des informations système via une API dédiée. L'application affichera des données telles que l’utilisation du CPU, l’espace disque, la mémoire, l’état réseau, et les logs du serveur.</p>";
            document.getElementById("img_id_1").src = preloadedImages[3].src;
            document.getElementById("text_1").innerHTML = "<ul><li class='li_style'>Développement mobile sous Cordova </li><ul><li>Intégration d’API</li><li>Utilisation des fonctionnalités système </li><li class='li_style'>Automatisation et administration système</li><li >Surveillance serveur</li></ul></ul>";
            break;

        case "nom-projet5":
            document.getElementById("h3_update").innerHTML = "Développement d'une API pour la récupération d'informations système et réseau"
            document.getElementById("para_update").innerHTML = "Dans le cadre d’un projet personnel en cours, je développe une API permettant de récupérer des informations système et réseau depuis mon serveur Raspberry Pi. Ce projet est étroitement lié à mon autre projet de création d'une application Android, qui exploitera cette API pour accéder aux données en temps réel. L'API fournit des informations détaillées sur l'état du CPU, la mémoire, le disque, le réseau, ainsi que les logs du serveur, permettant ainsi une surveillance complète et centralisée.";
            document.getElementById("img_id_1").src = preloadedImages[4].src;
            document.getElementById("text_1").innerHTML = "<ul><li>Créer une API robuste permettant la récupération sécurisée d’informations système et réseau</li><li>Fournir une interface fiable pour l'application Android, qui interrogera l'API pour obtenir des informations en temps réel</li><li>Assurer la sécurité de l'API pour éviter tout accès non autorisé aux données sensibles du serveur<li>Utilisation des fonctionnalités système </li></ul>";
            break;

        case "nom-projet6":
            document.getElementById("h3_update").innerHTML = "Création d'un CTF 'very-easy' Linux pour la journée des lycéens à l'IUT"
            document.getElementById("para_update").innerHTML = "Dans le cadre d’une collaboration avec plusieurs étudiants et professeurs pour la journée des lycéens à l’IUT, je suis chargé de créer un challenge (Capture The Flag) sur le thème Linux. Ces différents challenges a pour but d'introduire les lycéens aux différentes matières enseignées en Réseaux et Télécoms, en proposant des défis simples et adaptés. <p>J'ai crée un CTF 'very-easy' qui vise à faire découvrir aux participants les commandes de base sous Linux, où je l'ai configuré dans un environnement Docker, où ils devront retrouver un fichier caché (.flag.txt) contenant le flag. </p>";
            document.getElementById("img_id_1").src = preloadedImages[2].src;
            document.getElementById("text_1").innerHTML = "<ul><li>Utilisation de Docker</li><li class='li_style'>Cybersécurité et CTF</li><ul><li>Conception d'un CTF accessible, axé sur la découverte des fichiers et des commandes Linux de base</li><li>Pédagogie en informatique</li></ul></ul>";
            break;
    }

}

function competence(event) {
    console.log(event.target.id);
    switch (event.target.id) {
        case "button_1":
            document.getElementById("overlay_1").style.opacity = 1;
            console.log(document.getElementById("overlay_1"));
            break;

        case "button_2":
            document.getElementById("overlay_2").style.opacity = 1;
            break;
        case "button_3":
            document.getElementById("overlay_3").style.opacity = 1;
            break;
        case "button_4":
            document.getElementById("overlay_4").style.opacity = 1;
            break;
        case "button_5":
            document.getElementById("overlay_5").style.opacity = 1;
            break;
        case "button_6":
            document.getElementById("overlay_6").style.opacity = 1;
            break;
    }
}



// Écoutez le changement sur les boutons radio
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        // Cache toutes les overlays
        document.querySelectorAll('.overlay').forEach((overlay) => {
            overlay.style.opacity = 0; // Réinitialiser les overlays
        });

        // Affiche l'overlay correspondant au radio sélectionné
        const overlayId = radio.id.replace('card_inputs', 'overlay');
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            overlay.style.opacity = 1; // Rendre l'overlay visible
        }
    });
});
