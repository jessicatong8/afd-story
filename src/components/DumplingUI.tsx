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

  const filling = <DumplingFilling id={2} dropped={isDropped} />;
  const dumplingFillings = [{ id: 0 }, { id: 1 }, { id: 2 }];

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
      {dumplingFillings.map((filling) => (
        <DumplingFilling key={filling.id} id={filling.id} dropped={isDropped} />
      ))}

      <DumplingWrapper dropped={isDropped} />
    </DndContext>
  );
};

export default DumplingUI;
