const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    abrirLista: () => ipcRenderer.send('abrir-lista-produtos')
});
