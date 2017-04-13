const {app,BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


let loginWindow = null
const createWindow = () => {
  loginWindow = new BrowserWindow({
    height:400,
    width:300,
  })
  loginWindow.loadURL(url.format({
    pathname:path.join(__dirname,'app','login','index.html'),
    protocol:'file',
    slashes:true,
  }))
}

app.on('ready',createWindow)
app.on('window-all-closed',()=> {
  if(process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate',()=>{
  if(loginWindow === null){
    createWindow()
  }
})