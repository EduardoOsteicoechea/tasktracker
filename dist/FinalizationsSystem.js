export default class FinalizationsSystem {
    success(newLine, tabSystem, timeSystem, isInWorkBreak = false, isStopTask = false) {
        if (isInWorkBreak === false && isStopTask === false) {
            console.log(`${tabSystem.tab1}Line appended successfully:\n${newLine}`);
            timeSystem.track();
            // setTimeout(() => {         
            //    console.log(`${timeSystem.elapsedTime} hours have passed\n`);
            // }, 500);
        }
        else if (isInWorkBreak === true) {
            console.log(`${tabSystem.tab1}Line appended successfully:\n${newLine}`);
            timeSystem.track();
            timeSystem.trackBreakTime();
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