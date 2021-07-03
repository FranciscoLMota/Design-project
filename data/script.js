function getData() {
    var request = new XMLHttpRequest();
    request.open("GET", "data/dados.json", false);
    request.send(null)
    var my_JSON_object = JSON.parse(request.responseText);
    console.log(my_JSON_object);

    for (const element of my_JSON_object) {
        document.getElementById("row").innerHTML = document.getElementById("row").innerHTML + "<div class='column'><div class='card'><div class='imgwrap'><img src='assets/images/"+ element.foto + "' alt='' class='profilepic'><span class='badge'><b>" + element.id + "</b></span></div><p><b class='title'>" + element.nome + "</b><br>" + element.cargo + "</p></div></div>";
    }
}