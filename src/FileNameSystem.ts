import moment from 'moment';

export default class FileNameSystem
{
   currentDate:string = moment().format('YYYYMMDD');

   tasksDirectoryName:string = "tasks";

   todaysDirectoryName:string = this.tasksDirectoryName + "/" + this.currentDate + "_" + process.env.TITLE + "_" +  "tasks";
   
   fileName1:string = this.todaysDirectoryName + "/" + this.currentDate + "_" + "tasks" + ".txt";
   
   elapsedTime:string = this.todaysDirectoryName + "/" + this.currentDate + "_" + "tasks_elapsedTime" + ".txt";
   
   lastFormatedTime:string = this.todaysDirectoryName + "/" + this.currentDate + "_" + "tasks_lastFormatedTime" + ".txt";
   
   InWorkBreaks:string = this.todaysDirectoryName + "/" + this.currentDate + "_" + "tasks_inWorkBreaks" + ".txt";
}
