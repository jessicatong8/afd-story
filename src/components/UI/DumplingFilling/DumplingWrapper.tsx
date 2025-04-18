import { useDroppable } from "@dnd-kit/core";
import dropArea from "/src/assets/UI/DumplingFilling/wrapper_glow.svg";

interface Props {
  dragging: boolean;
}

const DumplingWrapper = ({ dragging }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "dumpling-wrapper",
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-3/4 h-auto absolute top-[29%] left-[10%] transition-transform
        ${isOver ? "scale-110" : "scale-105"}
    ${dragging ? "opacity-100" : "opacity-0"}
  `}
    >
      <img src={dropArea} className="pointer-events-none" />
    </div>
  );
};

export default DumplingWrapper;
