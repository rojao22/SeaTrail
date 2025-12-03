const form = document.getElementById("formUsuario");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const tipo = document.getElementById("tipo").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const tipoTexto = tipo === "1" ? "Professor" : "Aluno";

    resultado.style.display = "block";
    resultado.innerHTML = `
        <strong>Usuário cadastrado com sucesso!</strong><br><br>
        <b>Nome:</b> ${nome}<br>
        <b>Tipo:</b> ${tipoTexto}<br>
        <b>Email:</b> ${email}<br>
        <b>Telefone:</b> ${telefone}
    `;

    form.reset();
});
