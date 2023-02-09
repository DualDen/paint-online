import Tool from "./Tool";


export default class Brush extends Tool{
     mouseDown: boolean | undefined;
    
    constructor(canvas:HTMLCanvasElement) {
        super(canvas);
        this.listen();
    }

    listen() {
        this.canvas.onmousedown = this.mouseHandlerDown.bind(this);
        this.canvas.onmouseup = this.mouseHandlerUp.bind(this);
        this.canvas.onmousemove = this.mouseHandlerMove.bind(this);
    }

    mouseHandlerDown (e:any) {
        this.mouseDown = true;
        this.context.beginPath();
        this.context.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
    mouseHandlerUp (e:any) {
        this.mouseDown = false;

    }
    mouseHandlerMove (e:any) {
        if (this.mouseDown) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }
    draw(x: number,y: number) {
        this.context.lineTo(x,y);
        this.context.stroke();
    }

}