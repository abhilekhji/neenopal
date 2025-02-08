export const initialNodes = [
    {
      id: '1', 
      position: { x: 300, y: 0 }, 
      data: { value: 'Node 1', position: 'top', color: {hex:"#000000", hsv: {h: 259.4219653179191, s: 0, v: 0, a: 1}, rgb: {r: 0, g: 0, b: 0, a: 1}}, fontSize: 24},
      type: 'ourType'
    },{
      id: '2',
      position: { x: 100, y: 100},
      data: { value: 'Node 2', position: 'middle', color: {hex:"#000000", hsv: {h: 259.4219653179191, s: 0, v: 0, a: 1}, rgb: {r: 0, g: 0, b: 0, a: 1}}, fontSize: 24},
      type: 'ourType'
    },{
      id: '3',
      position: { x: 500, y: 100},
      data: { value: 'Node 3', position: 'middle', color: {hex:"#000000", hsv: {h: 259.4219653179191, s: 0, v: 0, a: 1}, rgb: {r: 0, g: 0, b: 0, a: 1}}, fontSize: 24},
      type: 'ourType'
    },{
      id: '4',
      position: { x: 0, y: 200},
      data: { value: 'Node 4', position: 'middle', color: {hex:"#000000", hsv: {h: 259.4219653179191, s: 0, v: 0, a: 1}, rgb: {r: 0, g: 0, b: 0, a: 1}}, fontSize: 24},
      type: 'ourType'
    },{
      id: '5',
      position: { x: 200, y: 200},
      data: { value: 'Node 5', position: 'middle', color: {hex:"#000000", hsv: {h: 259.4219653179191, s: 0, v: 0, a: 1}, rgb: {r: 0, g: 0, b: 0, a: 1}}, fontSize: 24},
      type: 'ourType'
    },{
      id: '6',
      position: { x: 400, y: 200},
      data: { value: 'Node 6', position: 'middle', color: {hex:"#000000", hsv: {h: 259.4219653179191, s: 0, v: 0, a: 1}, rgb: {r: 0, g: 0, b: 0, a: 1}}, fontSize: 24},
      type: 'ourType'
    },{
      id: '7',
      position: { x: 600, y: 200},
      data: { value: 'Node 7', position: 'middle', color: {hex:"#000000", hsv: {h: 259.4219653179191, s: 0, v: 0, a: 1}, rgb: {r: 0, g: 0, b: 0, a: 1}}, fontSize: 24},
      type: 'ourType'
    },{
      id: '8',
      position: { x: 0, y: 300},
      data: { value: 'Node 8', position: 'bottom', color: {hex:"#000000", hsv: {h: 259.4219653179191, s: 0, v: 0, a: 1}, rgb: {r: 0, g: 0, b: 0, a: 1}}, fontSize: 24},
      type: 'ourType'
    },{
      id: '9',
      position: { x: 300, y: 300},
      data: { value: 'Node 9', position: 'bottom', color: {hex:"#000000", hsv: {h: 259.4219653179191, s: 0, v: 0, a: 1}, rgb: {r: 0, g: 0, b: 0, a: 1}}, fontSize: 24},
      type: 'ourType'
    },{
      id: '10',
      position: { x: 600, y: 300},
      data: { value: 'Node 10', position: 'bottom', color: {hex:"#000000", hsv: {h: 259.4219653179191, s: 0, v: 0, a: 1}, rgb: {r: 0, g: 0, b: 0, a: 1}}, fontSize: 24},
      type: 'ourType'
    }
];

export const initialEdges = [
  {
    id: '1-2',
    source: '1',
    target: '2'
  },{
    id: '1-3',
    source: '1',
    target: '3'
  },{
    id: '2-4',
    source: '2',
    target: '4'
  },{
    id: '2-5',
    source: '2',
    target: '5'
  },{
    id: '3-6',
    source: '3',
    target: '6'
  },{
    id: '3-7',
    source: '3',
    target: '7'
  },{
    id: '4-8',
    source: '4',
    target: '8'
  },{
    id: '5-9',
    source: '5',
    target: '9'
  },{
    id: '6-9',
    source: '6',
    target: '9'
  },{
    id: '7-10',
    source: '7',
    target: '10'
  }
];