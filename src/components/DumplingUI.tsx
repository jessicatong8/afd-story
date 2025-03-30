import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";

import DumplingWrapper from "./DumplingWrapper";
import DumplingFilling from "./DumplingFilling";

const DumplingUI = () => {
  type Position = { x: number; y: number } | null;

  const [position, setPosition] = useState<Position>(null);
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active && over) {
      setPosition({ x: 100, y: 100 });
      console.log("dropped");
    } else {
      //   setIsDropped(false);
      //   console.log("not dropped");
    }
  };
  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <DumplingFilling position={position} />
        <DumplingWrapper />
      </DndContext>
    </div>
  );
};

export default DumplingUI;
