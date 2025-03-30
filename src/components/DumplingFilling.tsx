import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: number;
  dropped: boolean;
}
const DumplingFilling = ({ dropped, id }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    disabled: dropped,
  });

  console.log(id);

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
      className={`${color} w-1/8 aspect-square rounded-full absolute  -translate-x-[50%]
        -translate-y-[50%] 
        ${!dropped ? outsidePos : insidePos}`}
    ></div>
  );
};

export default DumplingFilling;
