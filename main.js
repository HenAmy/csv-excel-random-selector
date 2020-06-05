console.log("main processes");
console.log('main.js');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const Menu = electron.Menu

let win, win2;

function createwindow(){
    win = new BrowserWindow({
        show:false,
        icon:__dirname + `/images/coin.ico`,
        webPreferences: {
            nodeIntegration:true
        }
    });
    //win.setFullScreen(true);
    win.maximize(true);
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'site.html'),
        protocol: 'file',
        slashes: true
    }));

    // win2 = new BrowserWindow();
    // win2.loadURL(url.format({
    //     pathname: path.join(__dirname, 'upload.html'),
    //     protocol: 'file',
    //     slashes: true
    // }));

    
    

    win.once('ready-to-show', () => {
        win.show();
    })

    //win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    })
 

    // win2.webContents.openDevTools();
    // win2.on('closed', () => {
    //     win2 = null;
    // })
    
}
app.on('ready', function(){

    const template = [
        {
            label: 'File',
            submenu:[
                {
                    label: 'About the Author',
                    click:  function(){
                        electron.shell.openExternal('https://www.instagram.com/dauntless___ish/')
                    }
                }
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
});


app.on('ready', createwindow);