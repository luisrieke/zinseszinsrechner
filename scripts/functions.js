{

	"use strict";

    /* Rechner Input erfassen */
    const rechnerForm = document.getElementById("rechnerForm");
    const anfangskapital = document.getElementById("anfangskapital");
    const sparrate = document.getElementById("sparrate");
    const spardauer = document.getElementById("spardauer");
    const zinssatz = document.getElementById("zinssatz");

    /* hier wird das Enkapital berechnet */

    let computeZinsesZins = () => {
        let anfangskapitalZins = anfangskapital.valueAsNumber * (Math.pow((1+(zinssatz.valueAsNumber/100)),spardauer.valueAsNumber));
        let sparenZins = 12*sparrate.valueAsNumber*((Math.pow((1+(zinssatz.valueAsNumber/100)),spardauer.valueAsNumber)-1)/((1+(zinssatz.valueAsNumber/100))-1));
        let zwischenspeicher = anfangskapitalZins + sparenZins;
        return Math.round(zwischenspeicher);
    }

    /* zeigt Rechner Output */

    const showRechnerMessage = (el,text,classText,idText) => {
        let parent = el.parentNode;
        if(parent.lastChild.nodeName.toLowerCase()=="span"){
            parent.lastChild.remove();
        }
        let span = document.createElement("span");
        span.setAttribute("class",classText);
        span.setAttribute("id",idText)
        let message = document.createTextNode(text);
        span.appendChild(message);
        parent.appendChild(span);
    }

    /* Überprüfung Rechner */
    const initRechner = () => {

        /*mit dem Absenden werden noch einmal alle Felder gecheckt*/
        rechnerForm.addEventListener("submit",function(e){
            e.preventDefault();
            
            /* an dieser Stelle könnten wir mit validateRechner(rechnerForm) überprüfen ob
            alle Eingaben korrekt gemacht sind. Da aber bereits in der index.html Datei
            ausschließlich Zahlen in Einserschritten größer Null möglich sind als Input
            (siehe Datei) + required, macht eine Überprüfung an dieser Stelle keinen Sinn,
            alle Eingaben sind bereits geprüft und der Input wird korrekt sein. */

            /* Rechnung */

            showRechnerMessage(rechnerForm,"Dein Endkapital beträgt " + computeZinsesZins() + "€ ! 🎉","rechnerOutput");

            },false);
    }

    /* hier wird die Überprüfung angestoßen */
    initRechner();
    
}