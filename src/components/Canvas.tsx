import React, {FC, useEffect, useRef} from 'react';
import "../styles/canvas.scss";
import {canvasSlice} from "../store/reducers/CanvasSlice";
const Canvas:FC = () => {
    const canvasRef = useRef();
    const {setCanvas} = canvasSlice.actions;
    useEffect(() => {
       setCanvas('');
    },[])

    return (
        <div className='canvas'>
            <canvas ref={canvasRef} width={800} height={600}></canvas>
        </div>
    );
};

export default Canvas;