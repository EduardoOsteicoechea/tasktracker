import moment from 'moment';
export default class FileNameSystem {
    constructor() {
        this.currentDate = moment().format('YYYYMMDD');
        this.tasksDirectoryName = "tasks";
        this.todaysDirectoryName = this.tasksDirectoryName + "/" + process.env.CONTENT + "_" + "tasks_" + this.currentDate;
        this.fileName1 = this.todaysDirectoryName + "/" + "tasks_" + this.currentDate + ".txt";
        this.elapsedTime = this.todaysDirectoryName + "/" + "tasks_elapsedTime_" + this.currentDate + ".txt";
        this.lastFormatedTime = this.todaysDirectoryName + "/" + "tasks_lastFormatedTime_" + this.currentDate + ".txt";
        this.InWorkBreaks = this.todaysDirectoryName + "/" + "tasks_inWorkBreaks_" + this.currentDate + ".txt";
    }
}
//# sourceMappingURL=FileNameSystem.js.map