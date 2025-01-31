// Sélection de toutes les sections
let section = document.querySelectorAll("section");

// Fonction de debounce pour limiter la fréquence d'appel de la fonction onscroll
function debounce(func, delay = 20) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInView(el) {
    let top = window.scrollY;
    let offset = el.offsetTop;
    let height = el.offsetHeight;
    let windowHeight = window.innerHeight;
    let triggerPoint = offset - windowHeight / 2; // Déclenche avant que la section n'entre complètement en vue
    return top > triggerPoint && top < offset + height;
}

// Gestion de l'animation sur le scroll avec un déclenchement anticipé
window.onscroll = debounce(() => {
    // Vérifie la largeur de l'écran
    if (window.innerWidth < 768) {
        section.forEach(sec => sec.classList.add("show-animate"));
        return; // Arrête la fonction ici sur mobile
    }

    // Gestion normale des animations sur desktop
    section.forEach(sec => {
        if (isElementInView(sec)) {
            sec.classList.add("show-animate");
        } else {
            sec.classList.remove("show-animate");
        }
    });
}, 10); // Ajuste le délai de debounce si nécessaire
