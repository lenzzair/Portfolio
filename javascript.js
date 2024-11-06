const BOUTON_PROJET_1 = document.getElementById("nom-projet1");
const BOUTON_PROJET_2 = document.getElementById("nom-projet2");
const BOUTON_PROJET_3 = document.getElementById("nom-projet3");

BOUTON_PROJET_1.addEventListener("change", affiche_projet);
BOUTON_PROJET_2.addEventListener("change", affiche_projet);
BOUTON_PROJET_3.addEventListener("change", affiche_projet);

document.getElementById("button_1").addEventListener("click", competence);
document.getElementById("button_2").addEventListener("click", competence);
document.getElementById("button_3").addEventListener("click", competence);
document.getElementById("button_4").addEventListener("click", competence);
document.getElementById("button_5").addEventListener("click", competence);
document.getElementById("button_6").addEventListener("click", competence);

alert("Bonjour, ceci est un site web en construction. Des changements auront lieu prochainement, et la version mobile n'est pas encore adaptée. Merci.");

// Tableau des images à précharger
const imagesToPreload = [
    "./image/card_infra.webp", 
    "./image/card_projet_prog.webp", 
    "./image/card_raberrypi.webp"
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
window.addEventListener('load', function() {
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

    document.getElementById("obj_update").innerHTML = "<strong>Bilan Personnel:</strong>";
    document.getElementById("h4_update").innerHTML = "Compétences aquises:";

    switch (event.target.id) {
        case "nom-projet1":
            //Concevoir un réseau informatique sécurisé pour une entreprise
            document.getElementById("h3_update").innerHTML = "Concevoir un réseau informatique sécurisé pour une entreprise:";
            document.getElementById("para_update").innerHTML = "J'ai mis en place un réseaux sécurisé fonctionnel pour une entreprise avec un serveur windows server 2019 qui gère Active Directory, DHCP et serveur de fichier. J'ai aussi mis en place un server web linux extranet.";
            document.getElementById("img_id_1").src = preloadedImages[0].src;
            document.getElementById("text_1").innerHTML = "<ul><li class='li_style'>Infrasture Windows et Linux:</li><ul><li>Gestion des services Active Directory, DHCP et DNS</li><li>Mise en place d'un serveur web sous Apache2</li><li>Automatisation Active Directory avec Power Shell</li></ul><li class='li_style'>Réseaux:</li><ul><li>Routage Inter-Vlan</li><li>Téléphonie IP</li></ul></ul>";

            break;
        case "nom-projet2":

            document.getElementById("h3_update").innerHTML = "Mettre en place un site web dynamique et sécurisé pour une entreprise"
            document.getElementById("para_update").innerHTML = "J'ai dévlopper un site web pour une entreprise qui gère une activité de location de karting avec une gestion des réservations en ligne et possibilité aux utilisateur de crée un compte.";
            document.getElementById("img_id_1").src = preloadedImages[1].src;
            document.getElementById("text_1").innerHTML = "<ul><li class='li_style'>Monté en compétence de language de balisage:</li><ul><li>HTML et CSS</li></ul><li class='li_style'>Monté en compétence de language de programation web:</li><ul><li>PHP et découverte de JavaScript</li></ul></ul>";

            break;
        case "nom-projet3":
            document.getElementById("h3_update").innerHTML = "Montez mon site web en ligne"
            document.getElementById("para_update").innerHTML = "J'ai installé Apache2 sur mon rasberry pi 4, puis je l'ai configuer pour accéder a mon site en http puis j'ai mis en place un certificat TLS (auto signer) pour pouvoir utiliser HTTPS mais que sont depuis l'@IP (<a href='https://88.126.180.103:16444'>https://mon_adresse_ip</a>), j'ai aussi mis en place a nom de domaine pour y acceder depuis l-lambert.fr";
            document.getElementById("img_id_1").src = preloadedImages[2].src;
            document.getElementById("text_1").innerHTML = "<ul><li class='li_style'>Connaissance Système</li><ul><li>Configuration fichier de conf Apache2</li><li>Sécurisation d'un serveur Linux</li></ul><li class='li_style'>Mise en application des connaissance Réseaux:</li><ul><li>Redirection de port avec l'utilisation de NAT</li><li>Utilisation d'un nom de domaine</li></ul><li class='li_style'>Dévloppement web:</li><ul><li>Utilisation de JavaScript </li></ul></ul>";
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