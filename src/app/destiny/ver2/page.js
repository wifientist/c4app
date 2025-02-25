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
      height: 80,
      border: "2px solid black",
      backgroundColor: "gray",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      textAlign: "center",
      position: "relative"
    }}>
      {[...Array(6)].map((_, index) => (
        <div key={index} style={{ border: "1px solid black", padding: "5px" }}>
          {data.fields ? data.fields[index] : "-"}
        </div>
      ))}
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
  { id: "A", position: { x: 0, y: 400 }, data: { label: "A", fields: ["F1", "A", "F3", "F4", "4", "F6"] }, type: "custom" },
  { id: "B", position: { x: 200, y: 200 }, data: { label: "B", fields: ["X1", "B", "X3", "X4", "10", "X6"] }, type: "custom" },
  { id: "C", position: { x: 200, y: 600 }, data: { label: "C", fields: ["Y1", "C", "Y3", "Y4", "20", "Y6"] }, type: "custom" },
  { id: "D", position: { x: 400, y: 0 }, data: { label: "D", fields: ["Z1", "D", "Z3", "Z4", "30", "Z6"] }, type: "custom" },
  { id: "E", position: { x: 400, y: 800 }, data: { label: "E", fields: ["W1", "E", "W3", "W4", "40", "W6"] }, type: "custom" },
  { id: "F", position: { x: 400, y: 400 }, data: { label: "F", fields: ["V1", "F", "V3", "V4", "50", "V6"] }, type: "custom" },
  { id: "G", position: { x: 600, y: 200 }, data: { label: "G", fields: ["U1", "G", "U3", "U4", "60", "U6"] }, type: "custom" },
  { id: "H", position: { x: 800, y: 900 }, data: { label: "H", fields: ["T1", "H", "T3", "T4", "70", "T6"] }, type: "custom" },
  { id: "I", position: { x: 800, y: 200 }, data: { label: "I", fields: ["S1", "I", "S3", "S4", "80", "S6"] }, type: "custom" },
  { id: "J", position: { x: 1000, y: 200 }, data: { label: "J", fields: ["R1", "J", "R3", "R4", "90", "R6"] }, type: "custom" },
  { id: "K", position: { x: 1200, y: 200 }, data: { label: "K", fields: ["Q1", "K", "Q3", "Q4", "100", "Q6"] }, type: "custom" },
  { id: "L", position: { x: 600, y: 500 }, data: { label: "L", fields: ["P1", "L", "P3", "P4", "110", "P6"] }, type: "custom" },
  { id: "M", position: { x: 600, y: 700 }, data: { label: "M", fields: ["O1", "M", "O3", "O4", "120", "O6"] }, type: "custom" },
  { id: "N", position: { x: 1000, y: 400 }, data: { label: "N", fields: ["N1", "N", "N3", "N4", "130", "N6"] }, type: "custom" },
  { id: "O", position: { x: 1400, y: 400 }, data: { label: "O", fields: ["M1", "O", "M3", "M4", "140", "M6"] }, type: "custom" }
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
      <div style={{ width: "100vw", height: "100vh" }}>
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
