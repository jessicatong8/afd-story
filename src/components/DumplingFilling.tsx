import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

// Within your component that receives `transform` from `useDraggable`:
// const style = {
//   transform: CSS.Translate.toString(transform),
// }
interface Props {
  position: { x: number; y: number } | null;
}
const DumplingFilling = ({ position }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = position
    ? {
        transform: `translate3d(${position.x}px, ${position.y}px)`,
      }
    : transform
      ? {
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }
      : undefined;

  //   const droppedStyle = "bg-green-400";
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-1/8 h-1/8 bg-blue-400 rounded-full absolute top-[15%] left-[30%] -translate-x-[50%]
  -translate-y-[50%]"
    ></div>
  );
};

export default DumplingFilling;
