const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  flashTaskbar: () => ipcRenderer.send('flash-taskbar')
});
