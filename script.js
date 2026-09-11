function adicionarTarefa() {    const campo = document.getElementById("tarefa");    const lista = document.getElementById("lista");
    const texto = campo.value.trim();
    if (texto === "") {        alert("Digite uma tarefa!");        return;    }
    const item = document.createElement("li");
    item.textContent = texto;
    item.addEventListener("click", function() {        item.style.textDecoration = "line-through";        item.style.opacity = "0.5";    });
    lista.appendChild(item);
    campo.value = "";}
