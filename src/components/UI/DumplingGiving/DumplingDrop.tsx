import { useDroppable } from "@dnd-kit/core";
import dropArea from "/src/assets/UI/DumplingGiving/heart-dumpling_drop.svg";

interface Props {
  dragging: boolean;
}
const DumplingDrop = ({ dragging }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  return (
    <div
      ref={setNodeRef}
      className={` w-1/7 scale-100 aspect-square absolute 
        top-[72%] left-[19%] z-0 transition-all
        ${isOver ? "scale-120" : ""}
        ${dragging ? "opacity-100" : "opacity-0"}
        `}
    >
      <img src={dropArea} />
    </div>
  );
};

export default DumplingDrop;
