"use client";

import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import "reactflow/dist/style.css";
import { ReactFlowProvider, ReactFlow, Background, Controls, useNodesState, useEdgesState } from "reactflow";

const initialNodes = [
  { id: "A", position: { x: 0, y: 0 }, data: { label: "A" }, draggable: true },
  { id: "B", position: { x: 100, y: 100 }, data: { label: "B" }, draggable: true },
  { id: "C", position: { x: 100, y: 200 }, data: { label: "C" }, draggable: true },
  { id: "D", position: { x: 200, y: 150 }, data: { label: "D" }, draggable: true },
  { id: "E", position: { x: 200, y: 250 }, data: { label: "E" }, draggable: true },
  { id: "F", position: { x: 200, y: 350 }, data: { label: "F" }, draggable: true },
  { id: "G", position: { x: 300, y: 100 }, data: { label: "G" }, draggable: true },
  { id: "H", position: { x: 300, y: 200 }, data: { label: "H" }, draggable: true },
  { id: "I", position: { x: 400, y: 150 }, data: { label: "I" }, draggable: true },
  { id: "J", position: { x: 400, y: 250 }, data: { label: "J" }, draggable: true },
  { id: "K", position: { x: 500, y: 100 }, data: { label: "K" }, draggable: true },
  { id: "L", position: { x: 500, y: 200 }, data: { label: "L" }, draggable: true },
  { id: "M", position: { x: 600, y: 150 }, data: { label: "M" }, draggable: true },
  { id: "N", position: { x: 600, y: 250 }, data: { label: "N" }, draggable: true },
  { id: "O", position: { x: 700, y: 200 }, data: { label: "O" }, draggable: true }
];

const initialEdges = [
    { id: "e1", source: "A", target: "B" },
    { id: "e2", source: "A", target: "C" },
    { id: "e3", source: "B", target: "D" },
    { id: "e4", source: "B", target: "E" },
    { id: "e5", source: "B", target: "F" },
    { id: "e6", source: "C", target: "D" },
    { id: "e7", source: "C", target: "E" },
    { id: "e8", source: "C", target: "F" },
    { id: "e9", source: "D", target: "G" },
    { id: "e10", source: "E", target: "H" },
    { id: "e11", source: "E", target: "L" },
    { id: "e12", source: "E", target: "M" },
    { id: "e13", source: "F", target: "G" },
    { id: "e14", source: "G", target: "I" },
    { id: "e15", source: "H", target: "O" },
    { id: "e16", source: "I", target: "K" },
    { id: "e17", source: "J", target: "K" },
    { id: "e18", source: "K", target: "O" },
    { id: "e19", source: "L", target: "N" },
    { id: "e20", source: "M", target: "N" },
    { id: "e21", source: "N", target: "O" }
];

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
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default FlowChart;
