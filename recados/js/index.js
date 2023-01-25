window.onload = function () {
    console.log("Olá mundo!");
    limparLista();
    listarRecados();
};

async function listarRecados() {
    const lista = document.getElementById("recados-lista");
    if (!lista) {
        return;
    }

    try {
        const result = await api.get(
            "/tasks/e9a40f4d-ec7d-495c-a50e-0ff40d6c400a/tasks"
        );
        const recados = result.data.data;
        montaLista(recados);
    } catch (error) {
        console.error(error);
        lista.innerHTML = "Erro ao listar recados";
    }
}

async function excluirRecado(id) {
    try {
        await api.delete("/tasks/" + id + "/tasks");

        alert("recado excluído com sucesso");

        window.location.reload();
    } catch (error) {
        console.error(error);
    }
}

function abrirAtualizacaoRecado(recado) {
    localStorage.setItem("edit-recado", JSON.stringify(recado));
    localStorage.setItem("edicao", true);

    window.location.href = "criar-recado.html";
}

function limparLista() {
    const lista = document.getElementById("recados-lista");

    if (lista) {
        lista.innerHTML = "";
        localStorage.removeItem("edit-recado");
    }
}

function montaLista(recados) {
    const lista = document.getElementById("recados-lista");

    for (let recado of recados) {
        const item = document.createElement("li");
        item.setAttribute("class", "card");

        const texto = document.createElement("p");
        texto.setAttribute("class", "first-child");
        texto.innerText = `Recado: ${recado.description} - ${recado.detail}`;
        item.appendChild(texto);

        const botaoEditar = document.createElement("button");
        botaoEditar.innerText = "Edit";
        botaoEditar.onclick = () => abrirAtualizacaoRecado(recado);
        item.appendChild(botaoEditar);

        const botaoExcluir = document.createElement("button");
        botaoExcluir.innerText = "Delete";
        botaoExcluir.onclick = () => excluirRecado(recado.id);
        item.appendChild(botaoExcluir);

        lista.appendChild(item);
    }
}
