import * as fs from 'fs';
import moment from 'moment';
import open from 'open';
import AssetManager from './AssetManager.js';
const asstMngr = new AssetManager();

let newLine = "";

newLine += `Tasks${moment().format('YYYYMMDD')}`;



const fileName = asstMngr.fnmSys.fileName1;
fs.appendFile(fileName, newLine, (err) => {
   if (err) {
      asstMngr.finSys.error(err, asstMngr.tabSys, asstMngr.timSys);
   } else {
      asstMngr.finSys.success(newLine, asstMngr.tabSys, asstMngr.timSys);
   }
});

// open(fileName);