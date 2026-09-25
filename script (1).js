// Attendre que le document HTML soit complètement chargé
document.addEventListener("DOMContentLoaded", function() {
    
    // Sélectionner tous les liens du menu de navigation
    const liensMenu = document.querySelectorAll("nav ul li a");

    // Ajouter une action (événement) sur chaque lien
    liensMenu.forEach(function(lien) {
        lien.addEventListener("click", function(evenement) {
            
            // Empêcher le comportement par défaut (le saut brusque vers la section)
            evenement.preventDefault();
            
            // Récupérer la cible (l'id de la section, par exemple #projets)
            const cibleId = this.getAttribute("href");
            const sectionCible = document.querySelector(cibleId);
            
            // Faire défiler la page en douceur vers cette section
            if(sectionCible) {
                window.scrollTo({
                    top: sectionCible.offsetTop - 60, // -60 pour ne pas cacher le titre sous le menu fixe
                    behavior: "smooth"
                });
            }
        });
    });
});