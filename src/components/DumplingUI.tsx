import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";

import DumplingWrapper from "./DumplingWrapper";
import DumplingFilling from "./DumplingFilling";

const DumplingUI = () => {
  const [isDropped, setIsDropped] = useState(false);
  console.log("isDropped state:" + isDropped);

  const filling = <DumplingFilling dropped={isDropped} />;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    // console.log("over:" + over);
    if (active && over) {
      setIsDropped(true);
    }
  };

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <DndContext
      modifiers={[restrictToParentElement]}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      {!isDropped ? filling : null}
      {/* If not dropped, show filling outside wrapper */}

      <DumplingWrapper dropped={isDropped}>
        {isDropped ? filling : null}
        {/* If filling is dropped, render inside wrapper */}
      </DumplingWrapper>
    </DndContext>
  );
};

export default DumplingUI;
