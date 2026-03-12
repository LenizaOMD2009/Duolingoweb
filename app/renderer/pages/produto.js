// app/renderer/main/produto.js
document.getElementById('form-produto').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    console.log("Salvando produto:", nome);
    // Enviar para o banco via IPC
});
