import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: number;
  activeID: number;
  dropped: boolean[];
}
const DumplingFilling = ({ id, activeID, dropped }: Props) => {
  const isDropping = id === activeID; // this is the filling currently being dropped
  const hasBeenDropped = dropped[id]; // this filling has already been dropped
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    disabled: hasBeenDropped,
  });

  //   console.log(
  //     "filling: " +
  //       id +
  //       " active dragging: " +
  //       activeID +
  //       " this dropped: " +
  //       isDropping +
  //       " has been dropped: " +
  //       dropped[id]
  //   );

  // updates position of the element as it is dragged
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const fillingColors = ["bg-red-300", "bg-green-300", "bg-blue-300"];
  const outsidePositions = [
    "top-[15%] left-[25%]",
    "top-[12%] left-[50%]",
    "top-[15%] left-[75%]",
  ];
  const insidePositions = [
    "top-[40%] left-[50%]",
    "top-[58%] left-[60%]",
    "top-[70%] left-[40%]",
  ];

  const color = fillingColors[id];
  const outsidePos = outsidePositions[id];
  const insidePos = insidePositions[id];

  //   console.log("filling: " + dropped);
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`${color} w-1/8 aspect-square rounded-full absolute -translate-x-[50%] -translate-y-[50%] 
        ${isDropping || hasBeenDropped ? insidePos : outsidePos}`} // if this filling is being dropped or has already been dropped then render inside the wrapper
    ></div>
  );
};

export default DumplingFilling;
