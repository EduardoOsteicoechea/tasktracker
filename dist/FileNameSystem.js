import moment from 'moment';
export default class FileNameSystem {
    constructor() {
        this.currentDate = moment().format('YYYYMMDD');
        this.tasksDirectoryName = "tasks";
        this.todaysDirectoryName = this.tasksDirectoryName + "/" + this.currentDate + "_" + process.env.TITLE + "_" + "tasks";
        this.fileName1 = this.todaysDirectoryName + "/" + this.currentDate + "_" + "tasks" + ".txt";
        this.elapsedTime = this.todaysDirectoryName + "/" + this.currentDate + "_" + "tasks_elapsedTime" + ".txt";
        this.lastFormatedTime = this.todaysDirectoryName + "/" + this.currentDate + "_" + "tasks_lastFormatedTime" + ".txt";
        this.InWorkBreaks = this.todaysDirectoryName + "/" + this.currentDate + "_" + "tasks_inWorkBreaks" + ".txt";
    }
}
//# sourceMappingURL=FileNameSystem.js.map