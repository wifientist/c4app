"use client";

import React, { useState, useCallback } from "react";
import "reactflow/dist/style.css";
import {
  ReactFlowProvider,
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Handle
} from "reactflow";

const CustomNode = ({ data }) => {
  return (
    <div style={{
      width: 120,
      height: 120,
      border: "2px solid black",
      backgroundColor: "gray",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
      gridTemplateAreas: `
        "f1 f2 f3"
        "f4 f5-6 f5-6"
        "f7 f8 f9"
      `,
      textAlign: "center",
      position: "relative"
    }}>
     <div style={{ border: "1px solid black", padding: "5px", gridArea: "f1" }}>{data.fields[0]}</div>
      <div style={{ border: "1px solid black", padding: "5px", gridArea: "f2" }}>{data.fields[1]}</div>
      <div style={{ border: "1px solid black", padding: "5px", gridArea: "f3" }}>{data.fields[2]}</div>
      <div style={{ border: "1px solid black", padding: "5px", gridArea: "f4" }}>{data.fields[3]}</div>
      <div style={{ border: "1px solid black", padding: "5px", gridArea: "f5-6" }}>{data.fields[4]}{data.fields[5]}</div>
      <div style={{ border: "1px solid black", padding: "5px", gridArea: "f7" }}>{data.fields[6]}</div>
      <div style={{ border: "1px solid black", padding: "5px", gridArea: "f8" }}>{data.fields[7]}</div>
      <div style={{ border: "1px solid black", padding: "5px", gridArea: "f9" }}>{data.fields[8]}</div>

      <Handle type="source" id="s-t" position="top" style={{ left: "50%", background: "blue" }} />
      <Handle type="source" id="s-l" position="left" style={{ top: "50%", background: "blue" }} />
      <Handle type="source" id="s-r" position="right" style={{ top: "50%", background: "blue" }} />
      <Handle type="source" id="s-b" position="bottom" style={{ left: "50%", background: "blue" }} />
      <Handle type="source" position="top-left" style={{ left: "0%", top: "0%", background: "red" }} />
      <Handle type="source" position="top-right" style={{ right: "0%", top: "0%", background: "red" }} />
      <Handle type="source" position="bottom-left" style={{ left: "0%", bottom: "0%", background: "red" }} />
      <Handle type="source" position="bottom-right" style={{ right: "0%", bottom: "0%", background: "red" }} />
      <Handle type="target" id="t-t" position="top" style={{ left: "50%", background: "green" }} />
      <Handle type="target" id="t-l" position="left" style={{ top: "50%", background: "green" }} />
      <Handle type="target" id="t-r" position="right" style={{ top: "50%", background: "green" }} />
      <Handle type="target" id="t-b" position="bottom" style={{ left: "50%", background: "green" }} />
      <Handle type="target" position="top-left" style={{ left: "0%", top: "0%", background: "orange" }} />
      <Handle type="target" position="top-right" style={{ right: "0%", top: "0%", background: "orange" }} />
      <Handle type="target" position="bottom-left" style={{ left: "0%", bottom: "0%", background: "orange" }} />
      <Handle type="target" position="bottom-right" style={{ right: "0%", bottom: "0%", background: "orange" }} />
    </div>
  );
};

const initialNodes = [
  { id: "X", position: { x: -100, y: 0 }, data: { label: "X", fields: ["ES", "X", "EF", "flt", "description", "", "LS", "T", "LF"] }, type: "custom" },
  { id: "A", position: { x: -100, y: 400 }, data: { label: "A", fields: ["0", "A", "4", "0", "", "", "0", "4", "4"] }, type: "custom" },
  { id: "B", position: { x: 100, y: 200 }, data: { label: "B", fields: ["4", "B", "14", "0", "", "", "4", "10", "14"] }, type: "custom" },
  { id: "C", position: { x: 100, y: 600 }, data: { label: "C", fields: ["4", "C", "12", "2", "", "", "6", "8", "14"] }, type: "custom" },
  { id: "D", position: { x: 400, y: 0 }, data: { label: "D", fields: ["14", "D", "30", "3", "", "", "17", "16", "33"] }, type: "custom" },
  { id: "E", position: { x: 400, y: 800 }, data: { label: "E", fields: ["14", "E", "30", "0", "", "", "14", "16", "30"] }, type: "custom" },
  { id: "F", position: { x: 400, y: 400 }, data: { label: "F", fields: ["14", "F", "28", "0", "", "", "14", "14", "28"] }, type: "custom" },
  { id: "G", position: { x: 600, y: 200 }, data: { label: "G", fields: ["30", "G", "32", "3", "", "", "33", "2", "35"] }, type: "custom" },
  { id: "H", position: { x: 800, y: 900 }, data: { label: "H", fields: ["30", "H", "34", "9", "", "", "39", "4", "43"] }, type: "custom" },
  { id: "I", position: { x: 800, y: 200 }, data: { label: "I", fields: ["32", "I", "33", "3", "", "", "35", "1", "36"] }, type: "custom" },
  { id: "J", position: { x: 1000, y: 200 }, data: { label: "J", fields: ["33", "J", "39", "3", "", "", "36", "6", "42"] }, type: "custom" },
  { id: "K", position: { x: 1200, y: 200 }, data: { label: "K", fields: ["39", "K", "40", "3", "", "", "42", "1", "43"] }, type: "custom" },
  { id: "L", position: { x: 700, y: 500 }, data: { label: "L", fields: ["30", "L", "42", "0", "", "", "30", "12", "42"] }, type: "custom" },
  { id: "M", position: { x: 700, y: 700 }, data: { label: "M", fields: ["30", "M", "42", "0", "", "", "30", "12", "42"] }, type: "custom" },
  { id: "N", position: { x: 1000, y: 400 }, data: { label: "N", fields: ["42", "N", "43", "0", "", "", "42", "1", "43"] }, type: "custom" },
  { id: "O", position: { x: 1400, y: 400 }, data: { label: "O", fields: ["43", "O", "43", "0", "", "", "43", "0", "43"] }, type: "custom" }
];

const initialEdges = [
  { id: "e1", source: "A", target: "B", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e2", source: "A", target: "C", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e3", source: "B", target: "D", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e4", source: "B", target: "E", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e5", source: "B", target: "F", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e6", source: "C", target: "D", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e7", source: "C", target: "E", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e8", source: "C", target: "F", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e9", source: "D", target: "G", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e10", source: "E", target: "H", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e11", source: "E", target: "L", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e12", source: "E", target: "M", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e13", source: "F", target: "G", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e14", source: "G", target: "I", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e15", source: "H", target: "O", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e16", source: "I", target: "J", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e17", source: "J", target: "K", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e18", source: "K", target: "O", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e19", source: "L", target: "N", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e20", source: "M", target: "N", sourceHandle: "s-r", targetHandle: "t-l" },
  { id: "e21", source: "N", target: "O", sourceHandle: "s-r", targetHandle: "t-l" }
];

const nodeTypes = { custom: CustomNode };

const FlowChart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlowProvider>
      <div style={{ width: "95vw", height: "95vh" }}>
        <ReactFlow 
          nodes={nodes} 
          edges={edges} 
          onNodesChange={onNodesChange} 
          onEdgesChange={onEdgesChange} 
          fitView
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default FlowChart;
