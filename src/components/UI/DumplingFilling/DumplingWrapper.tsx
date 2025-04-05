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
      className={`absolute top-[19.5%] left-[-2%] w-full h-3/4 scale-79 transition-all
      ${isOver ? "scale-82" : ""}
      ${dragging ? "opacity-100" : "opacity-0"}
      `}
    >
      <img src={dropArea} />
    </div>
  );
};

export default DumplingWrapper;
