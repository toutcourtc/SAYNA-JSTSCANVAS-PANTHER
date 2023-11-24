
// Effet d'apparition fade-in des éléments grâce à l'API Intersection Observer
const threshold = .1
const options = {
root: null,
rootMargin: '0px',
threshold
}

const handleIntersect = function (entries, observer) {
entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
    const steps = [{transform : "translate(-1200px)"}, {transform : "translate(0px)"}];
    entry.target.animate(steps, 1000);
    observer.unobserve(entry.target)
    }
})
}

window.addEventListener("DOMContentLoaded", function () {
const observer = new IntersectionObserver(handleIntersect, options)
const targets = document.querySelectorAll('*')
targets.forEach(function (target) {
    observer.observe(target)
})
})

// Apparition de pop up de confirmation lors d'envoi de message
window.addEventListener("load", function(){
    var formElt = document.querySelector('#home-contact');
    if (formElt!=null){    
        // console.log("c bon");  
        // console.log(formElt);
        formElt.addEventListener("submit", function(event){
            event.preventDefault();
            // console.log("On y est");
            // Construction popup confirmation message
            const confirmBodyElt = document.createElement("div");
            confirmBodyElt.className = "confirm-body";
            confirmBodyElt.setAttribute("onclick", "this.parentNode.removeChild(this); document.body.style.overflow = 'auto';"); // Frmeture de la popup au click
            // confirmBodyElt.style.marginTop="250px";

            const confirmContainer = document.createElement("div");
            confirmContainer.setAttribute("id", "confirm-container");
            confirmContainer.setAttribute("onclick", "event.stopPropagation()");

            const confirmTitle=document.createElement("h2");
            confirmTitle.innerText = "Votre message a bien été envoyé";

            const homeLinkElt = document.createElement('a');
            homeLinkElt.setAttribute("href", "./");
            homeLinkElt.setAttribute("class", "btn btn-primary");
            // homeLinkElt.setAttribute("onclick", "event.stopPropagation()");
            homeLinkElt.innerText = "Revenir à l'accueil";

            confirmContainer.appendChild(confirmTitle);
            confirmContainer.appendChild(homeLinkElt);
            confirmBodyElt.appendChild(confirmContainer);
            sectionElt = document.querySelector("#contact-section");
            // sectionElt.style.position = "relative";
            // this.style.position = "relative";
            sectionElt.appendChild(confirmBodyElt);
            document.body.style.overflow = "hidden";

            // formElt = document.querySelector("#home-contact");

    
        });
    }

    // Apparition des icones
    var fixedIconsElt = document.querySelector("#icons-container");
    fixedIconsElt.style.display="block";
});