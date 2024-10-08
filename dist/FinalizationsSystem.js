export default class FinalizationsSystem {
    success(newLine, tabSystem, timeSystem, isStopTask = false) {
        if (isStopTask == false) {
            console.log(`${tabSystem.tab1}Line appended successfully:\n${newLine}`);
            timeSystem.track();
            // setTimeout(() => {         
            //    console.log(`${timeSystem.elapsedTime} hours have passed\n`);
            // }, 500);
        }
        else {
            console.log(`${tabSystem.tab1}Line appended successfully:\n${newLine}`);
            timeSystem.reset();
            // setTimeout(() => {         
            //    console.log(`${timeSystem.elapsedTime} hours have passed\n`);
            // }, 500);
        }
    }
    error(err, tabSystem, timeSystem) {
        console.error(`${tabSystem.tab1}Error: ${err}`);
    }
}
//# sourceMappingURL=FinalizationsSystem.js.map