document.getElementById("formUsuario").addEventListener("submit", function (event) {
    event.preventDefault(); // impede o formulário de recarregar a página

    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const resultado = document.getElementById("resultado");

    // ---- CONFIGURAÇÃO DO LOGIN ----
    const usuarioCorreto = "admin"; 
    const senhaCorreta = "1234";   
    // -------------------------------

    if (nome === usuarioCorreto && senha === senhaCorreta) {
        resultado.style.color = "green";
        resultado.textContent = "Login realizado com sucesso! Redirecionando...";

        // Redireciona após 1.5 segundo
        setTimeout(() => {
            window.location.href = "tela_inicial_seaTrail.html"; // altere para a página desejada
        }, 1500);

    } else {
        resultado.style.color = "red";
        resultado.textContent = "Nome ou senha incorretos.";
    }
});
