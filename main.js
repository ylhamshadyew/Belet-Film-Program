const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  // сразу отключаю стандартное верхнее меню с кнопками file, edit и т.д.
  Menu.setApplicationMenu(null);

  // создаю главное окно программы
  const win = new BrowserWindow({
    width: 1200,   
    height: 800,   
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration: false, // отключаю node.js внутри страницы (ради безопасности)
      contextIsolation: true  // включаю изоляцию контекста (чтобы сайт не трогал electron напрямую)
    }
  });

  // загружаю в окно сайт белета
  win.loadURL('https://film.belet.tm/');
}

// жду, пока electron полностью готов, и запускаю создание окна
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
