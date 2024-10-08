import * as fs from 'fs';
import AssetManager from './AssetManager.js';
const asstMngr = new AssetManager();
let newLine = "";
setTimeout(() => {
   newLine += "\n";
   newLine += "-----------------------------";
   newLine += "\n";
   newLine += asstMngr.tskSys.task;
   newLine += "\n";
   newLine += asstMngr.timSys.currentTime;
   newLine += process.env.CONTENT;
   newLine += "\n";
   const fileName = asstMngr.fnmSys.fileName1;
   fs.appendFile(fileName, newLine, (err) => {
      if (err) {
         asstMngr.finSys.error(err, asstMngr.tabSys, asstMngr.timSys);
      } else {
         asstMngr.finSys.success(newLine, asstMngr.tabSys, asstMngr.timSys);
      }
   });
}, 500);