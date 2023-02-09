import Tool from "./Tool";


export default class Rect extends Tool{
    mouseDown: boolean | undefined;
    startX: any;
    startY: any;

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
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
    }
    mouseHandlerUp (e:any) {
        this.mouseDown = false;

    }
    mouseHandlerMove (e:any) {
        if (this.mouseDown) {
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            let width = currentX - this.startX;
            let height = currentY - this.startY;
            this.draw(this.startX,this.startY,width,height);
        }
    }
    draw(x: number,y: number,w:number,h:number) {
        this.context.rect(x,y,w,h);
        this.context.fill();
        this.context.stroke();
    }

}