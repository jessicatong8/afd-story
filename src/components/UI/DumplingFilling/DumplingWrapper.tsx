import { useDroppable } from "@dnd-kit/core";

const DumplingWrapper = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: "dumpling-wrapper",
  });

  return (
    <div
      ref={setNodeRef}
      className="absolute top-[20%] left-[0%] -translate-x-[50%]-translate-y-[50%] w-full h-3/4 scale-80"
    ></div>
  );
};

export default DumplingWrapper;
