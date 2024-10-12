import * as fs from 'fs';
import AssetManager from './AssetManager.js';
const asstMngr = new AssetManager();
const tab = asstMngr.tabSys.tab4;
let newLine = "";
setTimeout(() => {
    newLine += tab + asstMngr.timSys.currentTime + process.env.CONTENT;
    newLine += "\n";
    const fileName = asstMngr.fnmSys.fileName1;
    fs.appendFile(fileName, newLine, (err) => {
        if (err) {
            // asstMngr.finSys.error(err, asstMngr.tabSys, asstMngr.timSys);
        }
        else {
            asstMngr.finSys.success(newLine, asstMngr.tabSys, asstMngr.timSys);
        }
    });
}, 500);
//# sourceMappingURL=addSubTask1ItemItem.js.map