import SeparatorsSystem from "./SeparatorsSystem.js";
import TabSystem from "./TabSystem.js";
import FileNameSystem from "./FileNameSystem.js";
import TaskSystem from "./TaskSystem.js";
import TimeTracker from "./TimeTracker.js";
import FinalizationsSystem from "./FinalizationsSystem.js";

export default class AssetManager
{
   fnmSys = new FileNameSystem();
   sepSys = new SeparatorsSystem();
   tabSys = new TabSystem();
   tskSys = new TaskSystem();
   timSys = new TimeTracker();
   finSys = new FinalizationsSystem();
}