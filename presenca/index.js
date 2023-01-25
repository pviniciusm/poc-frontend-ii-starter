window.onload = function () {
    console.log("olá mundo");

    // console.log("Teste");
    // alert("Olá mundo!!");

    const presenca = document.getElementById("programa");
    console.log(presenca);
    console.log(presenca.getAttribute("id"));

    // presenca.setAttribute("class", "verde");

    const novoElemento = document.createElement("div");
    novoElemento.innerHTML = "<p>Novo elemento criado via JS</p>";
    novoElemento.setAttribute("class", "verde");

    presenca.appendChild(novoElemento);

    const texto = document.querySelector("#programa > p");
    presenca.removeChild(texto);
};

function getPresentes() {
    let presentes = document.getElementById("presentes").innerText;
    return Number(presentes);
}

function addPresenca(event) {
    console.log(event);

    let presencaMinima = 10;
    let presentes = getPresentes();
    presentes = presentes + 1;

    document.getElementById("presentes").innerText = presentes;

    if (presentes >= presencaMinima) {
        let aviso = document.getElementById("mensagem-presenca");
        aviso.setAttribute("class", "verde");
        aviso.innerText = "A aula pode começar";
    }
}

console.log(document.getElementById("programa").innerHTML);
