// Sélection de toutes les sections
let section = document.querySelectorAll("section");

// Fonction de debounce pour limiter la fréquence d'appel de la fonction onscroll
function debounce(func, delay = 20) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Gestion de l'animation sur le scroll avec un déclenchement anticipé
window.onscroll = debounce(() => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let windowHeight = window.innerHeight;
        let triggerPoint = offset - windowHeight / 2; // Déclenche avant que la section n'entre complètement en vue

        // Ajoute ou retire la classe d'animation
        if (top > triggerPoint && top < offset + height) {
            sec.classList.add("show-animate");
        } else {
            sec.classList.remove("show-animate");
        }
    });
}, 10); // Ajustez le délai de debounce si nécessaire
