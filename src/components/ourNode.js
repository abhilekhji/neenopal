import { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css"
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import style from './ourNode.module.css';

function OurNode ({data}) {
    return(
        <>
        <div className={style.container} style={{backgroundColor: data.color.hex}}>
            <div style={{color: 'white', fontSize: `${data.fontSize}px`}}>{data.value}</div>
        </div>
            {data.position!=='top' && <Handle type="target" position={Position.Top}/>}
            {data.position!=='bottom' && <Handle type="source" position={Position.Bottom}/>}
        </>
    )
}

export default OurNode