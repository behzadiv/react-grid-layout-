import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "./styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const Grid = () => {
  let initalLayout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 3, h: 2 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
  
  let lastKey = (localStorage.getItem("key"))
  let [layout, setLayout] = useState(initalLayout);
  let [key, setKey] = useState(JSON.parse(lastKey) || "d");
  
  useEffect(() => {
      
}, [layout]);

const layoutChange = (layout) => {
    console.log("chenged",layout);
       
  };

  const incrementChar = (c) => {
    setKey(String.fromCharCode(c.charCodeAt(0) + 1));
  };

  const dropHandler = (layout, layoutItem) => {
    //console.log("Drop Handler called",layoutItem);
    let item = layoutItem;
    //console.log(item.i);
    item.i = key;
    setLayout((initial) => [...initial, item]);
    incrementChar(key);
  };

  return (
    <div>
      <div
        className="droppable-element"
        draggable={true}
        unselectable="on"
        // onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      >
        Droppable Element (Drag me!)
      </div>
      <GridLayout
        className="layout"
        layout={layout}
        onLayoutChange={layoutChange}
        onDrop={dropHandler}
        isDroppable={true}
        cols={12}
        rowHeight={40}
        width={800}
      >
        {layout.map((item) => (
          <div key={item.i}>{item.i}</div>
        ))}
      </GridLayout>
    </div>
  );
};

export default Grid;
