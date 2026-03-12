import { BrowserWindow } from "electron";
import path from "path";

export default class MainWindowFactory {

    // Adicionamos 'file' como parâmetro, com a index.html como padrão (default)
    static createWindow(file = "index.html") {

        const mainWindow = new BrowserWindow({
            width: 1200,
            height: 800,
            show: false,
            webPreferences: {
                // Mantemos o preload fixo, pois ele serve para todas as janelas
                preload: path.join(process.cwd(), "app/preload/preload.js"),
                contextIsolation: true,
                nodeIntegration: false
            }
        });

        // O caminho agora monta dinamicamente com base no arquivo pedido
        const filePath = path.join(process.cwd(), "app", "renderer", "main", file);
        
        mainWindow.loadFile(filePath);

        mainWindow.once("ready-to-show", () => {
            mainWindow.show();
        });

        // Opcional: Abre o console para depurar se a página não carregar
        // mainWindow.webContents.openDevTools();

        return mainWindow;
    }
}
