import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

// Within your component that receives `transform` from `useDraggable`:
// const style = {
//   transform: CSS.Translate.toString(transform),
// }
interface Props {
  //   position: { x: number; y: number } | null;
  dropped: boolean;
}
const DumplingFilling = ({ dropped }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  // updates position of the element as it is dragged
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  //   console.log("filling: " + dropped);
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`   bg-blue-400 w-1/8 aspect-square rounded-full absolute  -translate-x-[50%]
        -translate-y-[50%] 
        ${!dropped ? "scale-100 top-[15%] left-[30%]" : "scale-125 top-[20%] left-[50%]"}`}
    ></div>
  );
};

export default DumplingFilling;
