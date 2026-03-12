document.getElementById('btn-lista').addEventListener('click', () => {
    // Chama a função que criamos na ponte (preload.js)
    window.electronAPI.abrirLista();
});
