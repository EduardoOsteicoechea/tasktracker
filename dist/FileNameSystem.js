import moment from 'moment';
export default class FileNameSystem {
    constructor() {
        this.currentDate = moment().format('YYYYMMDD');
        this.tasksDirectoryName = "tasks";
        this.todaysDirectoryName = this.tasksDirectoryName + "/" + "tasks_" + this.currentDate;
        this.fileName1 = this.todaysDirectoryName + "/" + "tasks_" + this.currentDate + ".txt";
        this.elapsedTime = this.todaysDirectoryName + "/" + "tasks_elapsedTime" + this.currentDate + ".txt";
        this.lastFormatedTime = this.todaysDirectoryName + "/" + "tasks_lastFormatedTime" + this.currentDate + ".txt";
    }
}
//# sourceMappingURL=FileNameSystem.js.map