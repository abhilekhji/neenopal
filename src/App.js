import { useEffect, useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, OnEdgesChange, ReactFlowProvider, OnNodesChange, useEdgesState, useNodesState, useOnSelectionChange  } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './App.css';
import OurNode from './components/ourNode';
import { useSelector, useDispatch} from 'react-redux';
import { ColorPicker, useColor } from "react-color-palette";
import Slider from '@mui/material/Slider';
import "react-color-palette/css";
import { updateNodes } from './redux/reducers/nodeReducers';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Typography from '@mui/material/Typography';

const nodeTypes = {
  'ourType': OurNode
}

function App() {
  const [past, setPast] = useState([]);
  const [future, setFuture] = useState([]);
  const [slider, setSlider] = useState(16);
  const [color, setColor] = useColor("#561ecb");
  const [selectedNode, setSelectedNode] = useState(undefined);
  const initialNodes = useSelector(state=>state.nodes.nodes);
  const initialEdges = useSelector(state=>state.edges);
  const dispatch = useDispatch();
  const [nodes,setNodes,OnNodesChange] = useNodesState(initialNodes);
  const [edges,setEdges,OnEdgesChange] = useEdgesState(initialEdges);
  const onConnect = (x) => {
    const edge = {...x, id:`${edges.length+1}`}
    setEdges(prevEdges=>[...prevEdges,edge])
  }

  const x = nodes.filter(x=>x.selected===true)
  if(selectedNode===undefined && x.length!==0){
    setSelectedNode(x);
    setColor(x[0].data.color)
    setSlider(x[0].data.fontSize)
  } else if(selectedNode && x.length===0) {
    setSelectedNode(undefined);
  } else if(selectedNode && x.length!==0 && selectedNode[0].id!==x[0].id){
    setSelectedNode(x);
    setColor(x[0].data.color)
    setSlider(x[0].data.fontSize)
  }

  const onColourChange = async (x) => {
    await setColor(x);
    const newNode = {...selectedNode[0], data:{...selectedNode[0].data, color:x}}
    const newNodes = [...nodes.filter(node=>selectedNode[0].id!==node.id), newNode];
    await setNodes(newNodes)
    await dispatch(updateNodes(newNodes));
  }
  const onColourChangeComplete = () => {
    setPast([...past,nodes]);
    setFuture([]);
  }

  const onSliderChange = async (x) => {
    const newSliverValue = x.target.value;
    await setSlider(newSliverValue);
    const newNode = {...selectedNode[0], data:{...selectedNode[0].data, fontSize: newSliverValue}}
    const newNodes = [...nodes.filter(node=>selectedNode[0].id!==node.id), newNode];
    await setNodes(newNodes)
    await dispatch(updateNodes(newNodes));
  }

  const onClickUndo = async () => {
    if(past.length!==0){
      const present=past.pop();
      await setFuture([...future, nodes]);
      await setPast([...past]);
      await setNodes(present);
    }
  }
  const onClickRedo = async () => {
    if(future.length!==0){
      const present = future.pop();
      await setPast([...past, nodes]);
      await setFuture([...future]);
      await setNodes(present);
    }
  }

  return (
    <ReactFlowProvider>
    <div className="App">
      <ReactFlow 
        nodes={nodes} edges={edges} 
        onNodesChange={OnNodesChange} 
        onEdgesChange={OnEdgesChange} 
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
      <div>
        <div className='alteringContainer'>
          <div onClick={onClickUndo}>
            <UndoIcon style={past.length===0?{color: 'black'}:{color: 'white', cursor: 'pointer'}}/>
          </div>
          <div onClick={onClickRedo}>
            <RedoIcon style={future.length===0?{color: 'black'}:{color: 'white', cursor: 'pointer'}}/>
          </div>
        </div>
        {selectedNode ? 
          <div className='nodeDetails'>
            <div className='colourPicker'>
              <ColorPicker hideInput={true} color={color} onChange={onColourChange} 
              onChangeComplete={onColourChangeComplete}
              />
            </div>
            <div className="slider">
              <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>Font size:</Typography>
              <Slider
                value={slider}
                onChange={onSliderChange}
                min={12}
                max={24}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChangeCommitted={onColourChangeComplete}
              />
            </div>
            <div>
              <Typography variant="h4" gutterBottom>Selected Node</Typography>
              <Typography variant="h6" gutterBottom>{selectedNode[0].data.value}</Typography>
            </div>
          </div>
          :
          <div>
            <Typography variant="h2" gutterBottom>Made by Abhilekh Dowerah</Typography>
            <Typography variant="h3" gutterBottom>For NeenOpal</Typography>            
          </div>
        }
      </div>
    </div>
    </ReactFlowProvider>
  );
}

export default App;
