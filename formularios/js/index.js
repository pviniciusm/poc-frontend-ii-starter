window.onload = function () {
    const formulario = document.getElementById("formulario-cadastro");
    console.log(formulario.curriculo.value);

    formulario.salvar.addEventListener("click", (event) => {
        event.preventDefault();

        console.log(formulario.curriculo.value);
    });
};
