import { useState, useEffect } from "react";
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

import DumplingWrapper from "./DumplingWrapper";
import DumplingFilling from "./DumplingFilling";
import { useReadContext } from "../../ReadContext";
import { useNavigate } from "react-router-dom";

const DumplingUI = () => {
  const { toggleNext, toggleBack } = useReadContext();
  const navigate = useNavigate();

  //List of dumplings to be displayed by thier IDs
  const dumplingFillings = [{ id: 0 }, { id: 1 }, { id: 2 }];

  // ID of filling that is being actively dragged
  const [activeID, setActiveID] = useState<number>(-1);
  // tracks which dumplings have already been dropped with boolean list
  const [dropped, setDropped] = useState(() =>
    Array(dumplingFillings.length).fill(false)
  ); // make this smarter (list comprehension)

  // turn to next page when all dumplings have been dropped
  useEffect(() => {
    if (dropped.every(Boolean)) {
      toggleNext(true);
      setTimeout(() => {
        navigate(`/read/16`); // make this transition nicer
      }, 500);
    }
  }, [dropped]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setTimeout(() => {
      toggleBack(true); // delay enabling back so swipe actions don't trigger navigation upon dropping
    }, 200);
    if (active && over) {
      const fillingID = Number(active.id); //cast id to a number
      setActiveID(fillingID);
      setDropped((prevState) => {
        const newState = [...prevState]; // Copy the array
        newState[fillingID] = true; // Update the specific index
        return newState;
      });
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
      {dumplingFillings.map((filling) => (
        <DumplingFilling
          key={filling.id}
          id={filling.id}
          activeID={activeID}
          dropped={dropped}
        />
      ))}

      <DumplingWrapper />
    </DndContext>
  );
};

export default DumplingUI;
