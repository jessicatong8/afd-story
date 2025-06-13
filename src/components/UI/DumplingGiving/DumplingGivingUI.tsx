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
import pointerImage from "../../../assets/UI/DumplingGiving/pointer.png";
import { motion } from "framer-motion";

const DumplingGivingUI = () => {
  const { toggleBack, toggleNext } = useReadContext();

  const [isDropped, setIsDropped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setIsDragging(false);
    setTimeout(() => {
      toggleBack(true); // delay enabling back so swipe actions don't trigger navigation upon dropping
      toggleNext(true);
    }, 200);
    if (active && over) {
      setIsDropped(true);
    }
  };
  const handleDragStart = (event: DragStartEvent) => {
    setIsDragging(true);
    toggleBack(false); // disable going back when dragging so swipe actions don't trigger navigation
    toggleNext(false);
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

      <motion.div
        animate={{
          y: [0, -10, 0],
          transition: { repeat: Infinity },
        }}
        className={`${(isDragging || isDropped) && "opacity-0"}
          absolute w-1/12 h-auto scale-105 -translate-x-[50%] -translate-y-[50%] top-[89%] left-[62%] rotate-270 z-30 animate-bounce transition-opacity pointer-events-none`}
      >
        <img src={pointerImage}></img>
      </motion.div>

      <span
        className={`transition-opacity delay-100 duration-300 ${isDropped ? "opacity-100" : "opacity-0"}`}
      >
        <LoveLanguagesUI />
      </span>
    </DndContext>
  );
};

export default DumplingGivingUI;
