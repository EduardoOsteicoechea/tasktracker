import SeparatorsSystem from "./SeparatorsSystem.js";
import TabSystem from "./TabSystem.js";
import FileNameSystem from "./FileNameSystem.js";
import TaskSystem from "./TaskSystem.js";
import TimeTracker from "./TimeTracker.js";
import FinalizationsSystem from "./FinalizationsSystem.js";
import fs from 'fs';
export default class AssetManager {
    constructor(clientName = "") {
        // if(clientName !== ""){
        //    clientName = clientName + "_"
        // }
        this.fnmSys = new FileNameSystem();
        this.sepSys = new SeparatorsSystem();
        this.tabSys = new TabSystem();
        this.tskSys = new TaskSystem();
        this.timSys = new TimeTracker();
        this.finSys = new FinalizationsSystem();
        fs.mkdir(this.fnmSys.todaysDirectoryName, { recursive: true }, (err) => {
            if (err) {
                if (err.code !== 'EEXIST') {
                    console.error("Error: " + err);
                }
                else {
                    console.error("Error: " + err);
                }
            }
        });
    }
}
//# sourceMappingURL=AssetManager.js.map