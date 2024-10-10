import SeparatorsSystem from "./SeparatorsSystem.js";
import TabSystem from "./TabSystem.js";
import FileNameSystem from "./FileNameSystem.js";
import TaskSystem from "./TaskSystem.js";
import TimeTracker from "./TimeTracker.js";
import FinalizationsSystem from "./FinalizationsSystem.js";
import fs from 'fs';
import path from 'path';

export default class AssetManager
{
   fnmSys = new FileNameSystem();
   sepSys = new SeparatorsSystem();
   tabSys = new TabSystem();
   tskSys = new TaskSystem();
   timSys = new TimeTracker();
   finSys = new FinalizationsSystem();

   constructor(){
      fs.mkdir(this.fnmSys.todaysDirectoryName, { recursive: true }, (err) => {
         if (err) {
            if (err.code !== 'EEXIST') {
               console.error("Error: " + err);
            } else {
               console.error("Error: " + err);
            }
         } 
         // else {
         //    console.log("Today's tasks directory was created");
         // }
      });
   }
}