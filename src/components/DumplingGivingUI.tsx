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

import { useReadContext } from "./ReadContext";
import { useNavigate } from "react-router-dom";
import DumplingHeart from "./DumplingHeart";
import DumplingDrop from "./DumplingDrop";

const DumplingGivingUI = () => {
  const { toggleNext, toggleBack } = useReadContext();
  const navigate = useNavigate();

  const [isDropped, setIsDropped] = useState(false);

  //   //List of dumplings to be displayed by thier IDs
  //   const dumplingFillings = [{ id: 0 }, { id: 1 }, { id: 2 }];

  //   // ID of filling that is being actively dragged
  //   const [activeID, setActiveID] = useState<number>(-1);
  //   // tracks which dumplings have already been dropped with boolean list
  //   const [dropped, setDropped] = useState(() =>
  //     Array(dumplingFillings.length).fill(false)
  //   ); // make this smarter (list comprehension)
  //   //   console.log(dropped);

  //   // turn to next page when all dumplings have been dropped
  //   if (dropped.every(Boolean)) {
  //     toggleNext(true);
  //     setTimeout(() => {
  //       navigate(`/read/16`); // make this transition nicer
  //     }, 500);
  //   }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setTimeout(() => {
      toggleBack(true); // delay enabling back so swipe actions don't trigger navigation upon dropping
    }, 200);
    if (active && over) {
      setIsDropped(true);
    }
  };
  const handleDragStart = (event: DragStartEvent) => {
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
      <DumplingDrop />
    </DndContext>
  );
};

export default DumplingGivingUI;
