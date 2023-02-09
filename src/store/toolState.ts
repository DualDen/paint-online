import {makeAutoObservable} from "mobx";
type Tool = string | null
class ToolState {

    tool:Tool = null;
    constructor() {
        makeAutoObservable(this);
    }
    setTool(tool: any) {
        this.tool = tool;
    }
}

export default new ToolState();