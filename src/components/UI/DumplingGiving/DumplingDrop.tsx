import { useDroppable } from "@dnd-kit/core";
import dropArea from "/src/assets/heart-dumpling_drop.svg";

interface Props {
  dropped: boolean;
  dragging: boolean;
}
const DumplingDrop = ({ dropped, dragging }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  return (
    <div
      ref={setNodeRef}
      className={` w-1/7 scale-95 aspect-square absolute -translate-x-[50%]-translate-y-[50%] 
        top-[72%] left-[19%]
        ${isOver ? "scale-110" : ""}
        ${!dragging ? "invisible" : ""}
        `}
    >
      <img src={dropArea} />
    </div>
  );
};

export default DumplingDrop;
