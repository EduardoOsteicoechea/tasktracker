import moment from 'moment';

export default class FileNameSystem
{
   fileName1:string = `tasks_${moment().format('YYYYMMDD')}.txt`;
   elapsedTime:string = `tasks_elapsedTime${moment().format('YYYYMMDD')}.txt`;
   lastFormatedTime:string = `tasks_lastFormatedTime${moment().format('YYYYMMDD')}.txt`;
}