// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { IPCKeys } from "./definitions/electron";

contextBridge.exposeInMainWorld("electron", {
  chatgptApi: {
    async getCompletion(prompt: string) {
      const res = await ipcRenderer.invoke(IPCKeys.getCompletion, prompt);
      return res;
    },
  },
});
