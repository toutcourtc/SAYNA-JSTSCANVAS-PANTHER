// Variables globales
let formEnigme, nEnigme
nEnigme = 1;

enigme1Elt = document.createElement("p");
enigme1Elt.className = "pEnigme";
enigme1Elt.innerHTML = "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d’une Dora Milaje !<br>Le savais tu ?<br> Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent ?";

enigme2Elt = document.createElement("p");
enigme2Elt.className = "pEnigme";
enigme2Elt.innerHTML = "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de “chiffrement par décalage”. L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase <br><br>Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza";

enigme3Elt = document.createElement("p");
enigme3Elt.className = "pEnigme";
enigme3Elt.innerHTML = "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ? 01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010";

window.addEventListener("load", function(){
    formEnigme = document.querySelector("#form-enigme");

    if(formEnigme!=null){
        formEnigme.addEventListener("submit", function(event){
            event.preventDefault();

            answer = document.querySelector("#reponse").value;

            if(nEnigme==1){
                if(answer=="E"||answer=="e"){
                test=true;
                }
                else{
                    test=false;
                }
            }
            else if(nEnigme==2){
                if(answer==18){
                    test=true;
                }
                else{
                    test=false;
                }
            }
            else if(nEnigme==3){
                if(answer=='01001100'){
                    test=true;
                }
                else{
                    test=false;
                }
            }
            

            sectionElt = document.querySelector("section.enigme");
            dispResult(sectionElt, test);           

        });
    }
    

});

// Affichage du résultat
function dispResult(elt, test){
    const dispBodyElt = document.createElement("div");
    dispBodyElt.className = "display-body";
    // dispBodyElt.setAttribute("onclick", "this.parentNode.removeChild(this); document.body.style.overflow = 'auto';"); // Frmeture de la popup au click
    // confirmBodyElt.style.marginTop="250px";

    const resultContainer = document.createElement("div");
    resultContainer.setAttribute("id", "result-container");
    // resultContainer.setAttribute("onclick", "event.stopPropagation()");

    
    if(test){
        msg=" Bien joué !";
        boutonValue = "Question suivante";
        resultClass = "msg-success";
        retryOrNextBtn="Enigme suivante";
        result = true;
    }
    else{
        msg="Mauvaise réponse !";
        boutonValue = "Réessayer";
        resultClass="msg-error";
        retryOrNextBtn = "Réessayer";
        result=false;
    }
    const resultTitle=document.createElement("h2");
    resultTitle.className=resultClass;
    if(nEnigme==3){
        resultTitle.innerText = "Ton initiation est terminée !";
    }
    else{
        resultTitle.innerText = msg;
    }
    

    
    
    retryOrNextElt = document.createElement("a");
    retryOrNextElt.setAttribute("href", "enigme.html");
    retryOrNextElt.setAttribute("class", "btn btn-primary");
    retryOrNextElt.setAttribute("onclick", "retryOrNext(event,"+result+")");
    retryOrNextElt.innerText = retryOrNextBtn;
    
    

    const homeLinkElt = document.createElement('a');
    homeLinkElt.setAttribute("href", "../");
    homeLinkElt.setAttribute("class", "btn btn-primary");
    // homeLinkElt.setAttribute("onclick", "event.stopPropagation()");
    homeLinkElt.innerText = "Revenir à l'accueil";

    buttonsContainerElt = document.createElement("div");
    buttonsContainerElt.className = "buttons-container";
    if(nEnigme!=3){
        buttonsContainerElt.appendChild(retryOrNextElt);
    }
    
    buttonsContainerElt.appendChild(homeLinkElt);

    resultContainer.appendChild(resultTitle);
    resultContainer.appendChild(buttonsContainerElt);

    dispBodyElt.appendChild(resultContainer);
    elt.appendChild(dispBodyElt);
    document.body.style.overflow = "hidden";
}

function retryOrNext(event, test){
    event.preventDefault();
    if(test==false){
        dispBodyElt = document.querySelector(".display-body");
        reponseElt = document.querySelector("#reponse");
        reponseElt.value='';
        dispBodyElt.parentNode.removeChild(dispBodyElt);
        document.body.style.overflow = "auto";
    }
    else{
        nEnigme++;
        console.log(nEnigme);
        questionElt = document.querySelector('.question');
        numEnigmeElt = document.querySelector('.numbers');
        numEnigmeElt.innerText = nEnigme;
        pToDel = questionElt.querySelector(".pEnigme");
        pToDel.parentNode.removeChild(pToDel);
        h2 = questionElt.querySelector("h2");
        if(nEnigme==2){
            h2.after(enigme2Elt);
        }
        else if(nEnigme==3){
            h2.after(enigme3Elt);
        }        

        dispElt = document.querySelector(".display-body");
        dispElt.parentNode.removeChild(dispElt);
        document.body.style.overflow = "auto";

        reponseElt = document.querySelector("#reponse");
        reponseElt.value='';

    }
    
}