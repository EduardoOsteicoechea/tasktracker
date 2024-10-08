import SeparatorsSystem from "./SeparatorsSystem.js";
import TabSystem from "./TabSystem.js";
import FileNameSystem from "./FileNameSystem.js";
import TaskSystem from "./TaskSystem.js";
import TimeTracker from "./TimeTracker.js";
import FinalizationsSystem from "./FinalizationsSystem.js";
export default class AssetManager {
    constructor() {
        this.fnmSys = new FileNameSystem();
        this.sepSys = new SeparatorsSystem();
        this.tabSys = new TabSystem();
        this.tskSys = new TaskSystem();
        this.timSys = new TimeTracker();
        this.finSys = new FinalizationsSystem();
    }
}
//# sourceMappingURL=AssetManager.js.map