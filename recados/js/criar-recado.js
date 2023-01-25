let edicao = false;

window.onload = function () {
    console.log("Olá mundo!");
    verificarEdicao();
};

function verificarEdicao() {
    const recadoEditar = localStorage.getItem("edit-recado");
    console.log(recadoEditar);

    const tituloPagina = document.getElementById("titulo");

    if (recadoEditar != null) {
        edicao = true;
        const recado = JSON.parse(recadoEditar);

        console.log("ATUALIZAÇÃO de RECADO");
        tituloPagina.innerText = "Atualizar o recado " + recado.id;

        const detailInput = document.getElementById("detail");
        const descriptionInput = document.getElementById("description");

        detailInput.value = recado.detail;
        descriptionInput.value = recado.description;
    } else {
        console.log("criação de RECADO");
    }
}

async function criarRecado() {
    if (edicao) {
        return atualizarRecado();
    }

    try {
        const form = document.getElementById("form-recado");

        await api.post("/tasks/e9a40f4d-ec7d-495c-a50e-0ff40d6c400a/tasks", {
            description: form.description.value,
            detail: form.detail.value,
        });

        window.location.href = "/recados";
    } catch (error) {
        console.error(error.response);
    }
}

async function atualizarRecado() {
    try {
        const form = document.getElementById("form-recado");
        const recado = JSON.parse(localStorage.getItem("edit-recado"));

        await api.put("/tasks/" + recado.id + "/tasks", {
            description: form.description.value,
            detail: form.detail.value,
        });

        alert("recado alterado com sucesso");

        window.location.href = "/recados";
    } catch (error) {
        console.error(error.response);
    }
}
