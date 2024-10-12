import FileNameSystem from "./FileNameSystem.js";
import TabSystem from "./TabSystem.js";
import TimeTracker from "./TimeTracker.js";
import { exec } from 'child_process';

export default class FinalizationsSystem {
   
   fnmSys = new FileNameSystem();

   success(
      newLine: string, 
      tabSystem: TabSystem, 
      timeSystem: TimeTracker, 
      isInWorkBreak: boolean = false, 
      isStopTask: boolean = false
   ) {
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

   error(err: Error, tabSystem: TabSystem, timeSystem: TimeTracker) {
      console.error(`${tabSystem.tab1}Error: ${err}`);
   }
}