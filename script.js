const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const targetId = link.getAttribute("href").substring(1); // Récupère l'ID de l'attribut href

        // Met à jour les classes actives
        allLinks.forEach(l => l.classList.toggle("active", l === link));
        allTabs.forEach(tab => tab.classList.toggle("active-tab-content", tab.id === targetId));
    });
});
