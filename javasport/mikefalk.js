document.write("vem är han");
let answer = Math.floor(Math.random()*20)+1;
let incorrect = true;



while(incorrect){
    let svar = Number(prompt("gissa ett tal mellan 1 och 20"));

    if(svar>20){
        alert("Mellan 1 och 20 sa jag retard");
    }

    else if (svar>answer){
        alert("för högt ");
    }
    else if (svar<answer){
        alert("för högt");
    }
    else if(svar==answer){
        alert("bra");
        incorrect = false;
    }
    else {
        alert("ok");
    }
}