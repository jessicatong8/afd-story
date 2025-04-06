import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
  DragStartEvent,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";

import { useReadContext } from "../../ReadContext";
import DumplingHeart from "./DumplingHeart";
import DumplingDrop from "./DumplingDrop";
import LoveLanguagesUI from "../LoveLanguages/LoveLanguagesUI";

const DumplingGivingUI = () => {
  const { toggleBack } = useReadContext();

  const [isDropped, setIsDropped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setIsDragging(false);
    setTimeout(() => {
      toggleBack(true); // delay enabling back so swipe actions don't trigger navigation upon dropping
    }, 200);
    if (active && over) {
      setIsDropped(true);
    }
  };
  const handleDragStart = (event: DragStartEvent) => {
    setIsDragging(true);
    toggleBack(false); // disable going back when dragging so swipe actions don't trigger navigation
  };

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <DndContext
      modifiers={[restrictToParentElement]}
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <DumplingHeart dropped={isDropped} />
      <DumplingDrop dragging={isDragging} />
      {isDropped && <LoveLanguagesUI />}
    </DndContext>
  );
};

export default DumplingGivingUI;
