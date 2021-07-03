function getData() {
    var request = new XMLHttpRequest();
    request.open("GET", "data/dados.json", false);
    request.send(null)
    var dataObj = JSON.parse(request.responseText);

    return dataObj;
   
}

function printData(dataObj) {
    for (const element of dataObj) {

        document.getElementById("maincardwrapper").innerHTML =  document.getElementById("maincardwrapper").innerHTML
        + "<div class='maincard' id='mainCard"
        + element.id
        + "'><div class='imgwrapper'><img src='assets/images/"
        + element.foto 
        + "' alt='' class='profilepic' id='mainCardImg'></div><div class='wrapper'><div class='left'>NOME:</div><div class='right'><b>"
        + element.nome
        + "</b></div><div class='left'>CARGO:</div><div class='right'><b>"
        + element.cargo
        +"</b></div><div class='left'>IDADE:</div><div class='right'><b>"
        + element.idade
        + "</b></div></div></div>";

        if(element.id == 1) {

            document.getElementById("row").innerHTML = document.getElementById("row").innerHTML
            + "<div class='column'><div class='card' id='defaultOpen' onclick='openMainCard(" + element.id + ", this);'><div class='imgwrap'><img src='assets/images/"
            + element.foto
            + "' alt='' class='profilepic'><span class='badge'><b>"
            + element.id
            + "</b></span></div><p><b id='title' class='title'>"
            + element.nome
            + "</b><br>"
            + element.cargo
            + "</p>"
            + "</div></div>";

        } else {

            document.getElementById("row").innerHTML = document.getElementById("row").innerHTML
            + "<div class='column'><div class='card'  onclick='openMainCard(" + element.id + ", this);'><div class='imgwrap'><img src='assets/images/"
            + element.foto
            + "' alt='' class='profilepic'><span class='badge'><b>"
            + element.id
            + "</b></span></div><p><b id='title' class='title'>"
            + element.nome
            + "</b><br>"
            + element.cargo
            + "</p>"
            + "</div></div>";
        }
        
    }
}

function openMainCard(id, elmt) {
    var i, maincard, card, maincardid;
    maincardid = "mainCard" + id;
    maincard = document.getElementsByClassName("maincard");
    for (i = 0; i < maincard.length; i++) {
        maincard[i].style.display = "none";
    }

    card = document.getElementsByClassName("card");
    for (i = 0; i < card.length; i++) {
        card[i].style.backgroundColor = '#f0f1ef';
        card[i].querySelector("#title").style.color = '#002b50';
    }
    document.getElementById(maincardid).style.display = "block";
    elmt.style.backgroundColor = '#002b50';
    elmt.querySelector("#title").style.color = '#f0f1ef';


}