// app/renderer/main/listaproduto.js
document.getElementById('btn-cadastrar').addEventListener('click', () => {
    // Aqui você usaria um IPC Send para o Electron abrir a janela de cadastro
    window.electron.send('abrir-cadastro'); 
});

// Lógica para listar do banco de dados viria aqui
const btn = document.getElementById('btn-lista');

if (btn) {
    btn.addEventListener('click', () => {
        console.log("Botão clicado no HTML!");
        if (window.electronAPI) {
            window.electronAPI.abrirLista();
        } else {
            console.error("ERRO: A ponte electronAPI não foi encontrada!");
        }
    });
} else {
    console.error("ERRO: O botão com ID 'btn-lista' não existe na página.");
}
