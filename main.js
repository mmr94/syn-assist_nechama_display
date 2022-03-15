const { app, BrowserWindow } = require("electron");
const APP_URL="https://app.nechama.syn-assist.fr/"

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        kiosk:true,
        webPreferences: {
            devTools: false
        }
    });

    mainWindow.loadURL(APP_URL);
}

app.on("ready", loadMainWindow);