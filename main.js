const { app, BrowserWindow } = require('electron')

//在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口
app.on('ready', () => {

  //创建一个窗口
  const mainWindow = new BrowserWindow()
  //窗口加载html文件
  mainWindow.loadFile('./src/index.html')
  
})
