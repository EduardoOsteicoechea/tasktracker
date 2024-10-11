import * as fs from "fs";
import moment from 'moment';
import FileNameSystem from "./FileNameSystem.js";
import TabSystem from "./TabSystem.js";

export default class TimeTracker {
   fnmSys = new FileNameSystem();
   tabSys = new TabSystem();

   currentTime: string = "";
   elapsedTime: string = "0";

   async getTaskTime(): Promise<string>{
      const elapsedTime = await this.getElapsedTime();
      this.currentTime = `${(moment().format('HH')) + "." + (moment().format('mm'))}.[${elapsedTime}] `;
      return this.currentTime;
   }

   constructor() {
      this.track();
      setTimeout(() => {
         this.currentTime = `${(moment().format('HH')) + "." + (moment().format('mm'))}.[${this.elapsedTime}] `;
      
         fs.access(this.fnmSys.lastFormatedTime, fs.constants.F_OK, (err) => {
            if (err) {
               fs.appendFile(this.fnmSys.lastFormatedTime, this.currentTime.substring(0, this.currentTime.length - 2), (err) => { });
               console.log(`Created ${this.fnmSys.lastFormatedTime} file`)
            }
         });

         fs.access(this.fnmSys.elapsedTime, fs.constants.F_OK, (err) => {
            if (err) {
               fs.appendFile(this.fnmSys.elapsedTime, "0", (err) => { });
               console.log(`Created ${this.fnmSys.elapsedTime} file`)
               console.log(``)
            }
         });
      }, 500);
   }

   track():string {
      const lastFormatedTimeFileName = this.fnmSys.lastFormatedTime;
      const currentTimeFileName = this.fnmSys.elapsedTime;

      let lastFormattedTimeString: string = "";
      let currentTimeString: string = "";

      fs.readFile(lastFormatedTimeFileName, 'utf8', (err, data) => {
         if (err) {
            // console.error('Error reading file:', err);
         } else {
            lastFormattedTimeString = data;

            fs.readFile(currentTimeFileName, 'utf8', (err, data) => {
               if (err) {
                  console.error('Error reading file:', err);
               } else {
                  currentTimeString = data ?? 0;
                  let timeDifference = this.calculateTimeDifference(lastFormattedTimeString);

                  fs.writeFile(currentTimeFileName, (timeDifference + ""), (err) => {
                     if (err) {
                        console.error(`${this.tabSys.tab1}Error: ${err}`);
                     } else {
                        this.elapsedTime = timeDifference + "";
                        return this.elapsedTime;
                     }
                  });
               }
            });
         }
      });
      return this.elapsedTime;
   }
   
   trackBreakTime(){
      const lastFormatedTimeFileName = this.fnmSys.lastFormatedTime;
      const currentTimeFileName = this.fnmSys.elapsedTime;

      let lastFormattedTimeString: string = "";
      let currentTimeString: string = "";

      fs.readFile(lastFormatedTimeFileName, 'utf8', (err, data) => {
         if (err) {
            // console.error('Error reading file:', err);
         } else {
            lastFormattedTimeString = data;

            fs.readFile(currentTimeFileName, 'utf8', (err, data) => {
               if (err) {
                  console.error('Error reading file:', err);
               } else {
                  currentTimeString = data ?? 0;
                  let timeDifference = this.calculateTimeDifference(lastFormattedTimeString)

                  fs.appendFile(this.fnmSys.InWorkBreaks, ("," + timeDifference), (err) => {
                     if (err) {
                        console.error(`${this.tabSys.tab1}Error: ${err}`);
                     }
                  });
               }
            });
         }
      });
   }

   getElapsedTime():string {
      this.track();
      setTimeout(() => {
         console.log("getElapsedTime(): this.elapsedTime: " + this.elapsedTime)
         return this.elapsedTime;
      }, 500);      
      return this.elapsedTime;
   }

   calculateTimeDifference(lastFormattedTimeString: string): number {
      const lastHourString = lastFormattedTimeString.split(".")[0];
      const lastMinutesString = lastFormattedTimeString.split(".")[1];
      const lastHour: number = parseInt(lastHourString);
      const lastMinutes: number = parseInt(lastMinutesString) / 60;
      const currentHour: number = parseInt(moment().format('HH'));
      const currentMinutes: number = parseInt(moment().format('mm')) / 60;

      const timeDifference = (currentHour + currentMinutes) - (lastHour + lastMinutes);

      // console.log("lastFormattedTimeString: " + lastFormattedTimeString);
      // console.log("lastHourString: " + lastHourString);
      // console.log("lastMinutesString: " + lastMinutesString);
      // console.log("lastHour: " + lastHour);
      // console.log("lastMinutes: " + lastMinutes);
      // console.log("currentHour: " + currentHour);
      // console.log("currentMinutes: " + currentMinutes);
      // console.log("timeDifference: " + timeDifference);
      // console.log("currentHour + currentMinutes: " + (currentHour + currentMinutes));
      // console.log("lastHour + lastMinutes: " + (lastHour + lastMinutes));

      return parseFloat(timeDifference.toFixed(2));
   }

   reset() {
      // this.generateTasksTimeReport();
      // this.generateInWorkBreaksReport();
      
      fs.unlink(this.fnmSys.lastFormatedTime, (err) => {
         if (err) {
            console.error('Error deleting file: ', err);
         } else {
            console.log(`${this.fnmSys.lastFormatedTime} file deleted successfully!`);
         }
      });

      fs.unlink(this.fnmSys.elapsedTime, (err) => {
         if (err) {
            console.error('Error deleting file:', err);
         } else {
            console.log(`${this.fnmSys.elapsedTime} file deleted successfully!`);
         }
      });
   }
}