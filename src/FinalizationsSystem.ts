import TabSystem from "./TabSystem.js";
import TimeTracker from "./TimeTracker.js";

export default class FinalizationsSystem
{

   success(newLine: string, tabSystem:TabSystem, timeSystem:TimeTracker, isStopTask:boolean= false){
      if(isStopTask == false)
      {
         console.log(`${tabSystem.tab1}Line appended successfully:\n${newLine}`);
         timeSystem.track();
         // setTimeout(() => {         
         //    console.log(`${timeSystem.elapsedTime} hours have passed\n`);
         // }, 500);
      }
      else
      {
         console.log(`${tabSystem.tab1}Line appended successfully:\n${newLine}`);
         timeSystem.reset();
         // setTimeout(() => {         
         //    console.log(`${timeSystem.elapsedTime} hours have passed\n`);
         // }, 500);
      }
   }

   error(err: Error, tabSystem:TabSystem, timeSystem:TimeTracker){
      console.error(`${tabSystem.tab1}Error: ${err}`);
   }
}