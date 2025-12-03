// Seleciona o formulário
const form = document.getElementById("formUsuario");
const resultado = document.getElementById("resultado");

// Quando o formulário for enviado
form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede o envio tradicional

    // Pega os valores dos inputs
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Validação simples
    if (!nome || !email || !senha) {
        resultado.innerHTML = "<p style='color:red;'>Preencha todos os campos.</p>";
        return;
    }

    // Simulando cadastro (poderia salvar no localStorage, banco, API, etc.)
    const usuario = {
        nome,
        email,
        senha
    };

    // Salva no localStorage (opcional)
    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));

    // Mostra mensagem de sucesso
    resultado.innerHTML = "<p style='color:green;'>Cadastro realizado com sucesso!</p>";

    // Redireciona após 1 segundo
    setTimeout(() => {
        window.location.href = "login.html"; // coloque aqui a página desejada
    }, 1000);
});
