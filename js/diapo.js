// Variables globales
let  elements, selectedElt, diapo

window.addEventListener("load", function(){

    // On récupère le diaporama
    var diapo = document.querySelector(".diapo");
    elements = diapo.querySelector(".elements");

    // On récupère les flèches
    let next = document.querySelector("#nav-droite");
    let prev = document.querySelector("#nav-gauche");

    // On gère le clic
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);
});

// Clonage du premier slide
function cloneFirstElt(){
    var elementsElt = document.querySelector('.elements');
    var firstElt= elementsElt.querySelector('.element').cloneNode(true);
    return firstElt;
}

// Clonage du 2e slide
function cloneLastElt(){
    var elementsElt = document.querySelector('.elements');
    var elements= elementsElt.querySelectorAll('.element');
    l = elements.length;
    result = elements[l-1].cloneNode(true);
    return result;
}

// Défilement vers la droite
function slideNext(){

    // On clone le premier élément
    var firstClone = cloneFirstElt();

    // On l'ajoute à la fin
    elements.appendChild(firstClone);

    //On récupère le premier elt pour suppression
    toDelElt = elements.querySelector('.element');

    // On fait défiler les éléments et à la fin, on supprime l'élément à supprimer
    var steps = [{transform : `translateX(-590px)`}];
    elements.animate(steps, 500);

    setTimeout(function(){
        toDelElt.parentNode.removeChild(toDelElt);
        zoomSelectedImg();
    }, 500);
}

// Défilement vers la gauche
function slidePrev(){

    // On clone le dernier élément
    var lastClone = cloneLastElt();

    // On l'ajoute au début des slides
    var firstElt = elements.querySelector('.element');
    elements.insertBefore(lastClone, firstElt);

    // On récupère le dernier élément pour suppression
    var elts = elements.querySelectorAll('.element');
    var l = elts.length;
    var toDelElt = elts[l-1];

    // On fait défiler vers la gauche
    var steps = [{transform : `translateX(-590px)`}, {transform : `translateX(0px)`}];
    elements.animate(steps, 500);

    // Une fois le défilement fini, on supprime l'élément à supprimer
    setTimeout(function(){
        toDelElt.parentNode.removeChild(toDelElt);
        zoomSelectedImg();
    }, 500);
}

// Agrandissement à 20% de l'image de la slide sélectionnée
function zoomSelectedImg(){
    slides = elements.querySelectorAll('.element');
    firstImg = slides[0].querySelector('img');
    firstImg.style.transform = "scale(1.2, 1.2)";
    slides.forEach((elt)=>{
        imgElt = elt.querySelector('img');
        if(imgElt.getAttribute('src')!=firstImg.getAttribute('src')){
            imgElt.style.transform = "unset";
        }
        
    })
}

