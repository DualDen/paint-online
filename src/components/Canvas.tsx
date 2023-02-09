import React, {FC, useEffect, useRef} from 'react';
import "../styles/canvas.scss";
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";

const Canvas:FC = observer(() => {
    const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;
    useEffect(() => {
        canvasState.setCanvas(canvasRef.current);
        toolState.setTool(new Brush(canvasRef.current))
    },[])

    return (
        <div className='canvas'>
            <canvas ref={canvasRef} width={800} height={600}/>
        </div>
    );
});

export default Canvas;