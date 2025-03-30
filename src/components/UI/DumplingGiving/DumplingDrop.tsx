import { useDroppable } from "@dnd-kit/core";

const DumplingDrop = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  return (
    <div
      ref={setNodeRef}
      className=" w-1/10 aspect-square rounded-full absolute -translate-x-[50%]-translate-y-[50%] 
        top-[74%] left-[22%]
        border-2"
    ></div>
  );
};

export default DumplingDrop;
