import moment from 'moment';
export default class FileNameSystem {
    constructor() {
        this.fileName1 = `tasks_${moment().format('YYYYMMDD')}.txt`;
        this.elapsedTime = `tasks_elapsedTime${moment().format('YYYYMMDD')}.txt`;
        this.lastFormatedTime = `tasks_lastFormatedTime${moment().format('YYYYMMDD')}.txt`;
    }
}
//# sourceMappingURL=FileNameSystem.js.map