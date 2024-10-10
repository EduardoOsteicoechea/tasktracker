import * as fs from 'fs';
import AssetManager from './AssetManager.js';
const asstMngr = new AssetManager();
const tab = asstMngr.tabSys.tab2;
let newLine = "";
setTimeout(() => {
    newLine += tab + asstMngr.tskSys.failure;
    newLine += "\n";
    newLine += tab + asstMngr.timSys.currentTime;
    newLine += process.env.CONTENT;
    newLine += "\n";
    const fileName = asstMngr.fnmSys.fileName1;
    fs.appendFile(fileName, newLine, (err) => {
        if (err) {
            asstMngr.finSys.error(err, asstMngr.tabSys, asstMngr.timSys);
        }
        else {
            asstMngr.finSys.success(newLine, asstMngr.tabSys, asstMngr.timSys);
        }
    });
}, 500);
//# sourceMappingURL=addSubTask1Failure.js.map