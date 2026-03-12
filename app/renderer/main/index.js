import { app, ipcMain } from "electron"; // Importe o ipcMain aqui
import dotenv from "dotenv";
import MainWindowFactory from "./windows/MainWindowFactory.js"; 
import { connectDatabase } from "../../database/connection.js";

dotenv.config();

let mainWindow;

app.whenReady().then(async () => {
    await connectDatabase();

    // Abre a janela principal (index.html) por padrão
    mainWindow = MainWindowFactory.createWindow("index.html");

    // --- CONFIGURAÇÃO DE ROTAS (EVENTOS) ---
// Dentro do app.whenReady()
ipcMain.on("abrir-lista-produtos", () => {
    console.log("Recebi o pedido para abrir a lista!"); // Veja se isso aparece no terminal do VS Code
    MainWindowFactory.createWindow("listaproduto.html");
});

    // Ouvinte para abrir a Lista de Produtos
    ipcMain.on("abrir-lista-produtos", () => {
        MainWindowFactory.createWindow("listaproduto.html");
    });

    // Ouvinte para abrir a página de Cadastro
    ipcMain.on("abrir-cadastro-produto", () => {
        MainWindowFactory.createWindow("produto.html");
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
