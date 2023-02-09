
export default class Tool {
    canvas: HTMLCanvasElement;
    context: any;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }
    destroyEvents() {
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null
        this.canvas.onmousemove = null
    }
}