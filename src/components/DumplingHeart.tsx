import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import dumplingImage from "/src/assets/heart-dumpling.png";

interface Props {
  dropped: boolean;
}

const DumplingHeart = ({ dropped }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  // updates position of the element as it is dragged
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const initialPos = "top-[77%] left-[64%]";
  const droppedPos = "top-[74%] left-[22%]";

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`w-1/10 absolute -translate-x-[50%]-translate-y-[50%]
         ${dropped ? droppedPos : initialPos} `}
    >
      <img src={dumplingImage} />
    </div>
  );
};

export default DumplingHeart;
