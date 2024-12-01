import { Tray, Menu, BrowserWindow, nativeImage } from "electron";
import path from "node:path";

export function createTray(window: BrowserWindow) {
  const trayIconPath = path.resolve(
    process.env.NODE_ENV === "development"
      ? path.join(__dirname, "..", "..", "resources")
      : path.join(process.resourcesPath, "resources"),
    "rotionTemplate.png"
  );

  const tray = new Tray(trayIconPath);

  const menu = Menu.buildFromTemplate([
    { label: "Rotion", enabled: false },
    { type: "separator" },
    {
      label: "Criar novo documento",
      click: () => {
        window.webContents.send("new-document");
      },
    },
    { type: "separator" },
    { label: "Documentos Recentes", enabled: false },
    {
      label: "Discover",
      accelerator: "CommandOrControl+1",
      acceleratorWorksWhenHidden: false,
    },
    {
      label: "Ignite",
      accelerator: "CommandOrControl+2",
      acceleratorWorksWhenHidden: false,
    },
    {
      label: "Rocketseat",
      accelerator: "CommandOrControl+3",
      acceleratorWorksWhenHidden: false,
    },
    { type: "separator" },
    { label: "Sair do Rotion", role: "quit" },
  ]);

  tray.setContextMenu(menu);
}
