import FileNameSystem from "./FileNameSystem.js";
export default class FinalizationsSystem {
    constructor() {
        this.fnmSys = new FileNameSystem();
    }
    success(newLine, tabSystem, timeSystem, isInWorkBreak = false, isStopTask = false) {
        if (isInWorkBreak === false && isStopTask === false) {
            console.log(`${tabSystem.tab1}Line appended successfully:\n${newLine}`);
            timeSystem.track();
        }
        else if (isInWorkBreak === true) {
            console.log(`${tabSystem.tab1}Line appended successfully:\n${newLine}`);
            timeSystem.track();
            timeSystem.trackBreakTime();
        }
        else {
            console.log(`${tabSystem.tab1}Line appended successfully:\n${newLine}`);
            timeSystem.reset();
        }
        // exec(`notepad "${this.fnmSys.fileName1}"`);
    }
    error(err, tabSystem, timeSystem) {
        console.error(`${tabSystem.tab1}Error: ${err}`);
    }
}
//# sourceMappingURL=FinalizationsSystem.js.map