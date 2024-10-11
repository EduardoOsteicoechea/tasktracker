import * as fs from 'fs';
import AssetManager from './AssetManager.js';
const asstMngr = new AssetManager();
let newLine = '';
newLine += asstMngr.tskSys.inWorkBreak;
newLine += "\n";
setTimeout(() => {
    newLine += asstMngr.timSys.currentTime;
    newLine += process.env.CONTENT;
    newLine += "\n";
    const fileName = asstMngr.fnmSys.fileName1;
    fs.appendFile(fileName, newLine, (err) => {
        if (err) {
            asstMngr.finSys.error(err, asstMngr.tabSys, asstMngr.timSys);
        }
        else {
            asstMngr.finSys.success(newLine, asstMngr.tabSys, asstMngr.timSys, true, false);
        }
    });
}, 500);
//# sourceMappingURL=addInWorkBreak.js.map