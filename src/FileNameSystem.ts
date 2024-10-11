import moment from 'moment';

export default class FileNameSystem
{
   currentDate:string = moment().format('YYYYMMDD');

   tasksDirectoryName:string = "tasks";

   todaysDirectoryName:string = this.tasksDirectoryName + "/" + process.env.CONTENT + "_" + "tasks_" + this.currentDate;
   
   fileName1:string = this.todaysDirectoryName + "/" + "tasks_" + this.currentDate + ".txt";
   
   elapsedTime:string = this.todaysDirectoryName + "/" + "tasks_elapsedTime_" + this.currentDate + ".txt";
   
   lastFormatedTime:string = this.todaysDirectoryName + "/" + "tasks_lastFormatedTime_" + this.currentDate + ".txt";
   
   InWorkBreaks:string = this.todaysDirectoryName + "/" + "tasks_inWorkBreaks_" + this.currentDate + ".txt";
}