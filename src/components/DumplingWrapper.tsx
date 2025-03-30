import { useDroppable } from "@dnd-kit/core";

// interface Props {
//   dropped: boolean;
// }
const DumplingWrapper = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: "dumpling-wrapper",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  //   const className = dropped
  //     ? "absolute top-[57%] left-[48%] -translate-x-[50%]-translate-y-[50%] w-full h-3/4 scale-79 border-1"
  //     : "absolute top-[57%] left-[48%] -translate-x-[50%]-translate-y-[50%] w-full h-3/4 scale-79 border-8";
  return (
    <div
      ref={setNodeRef}
      className="absolute top-[20%] left-[0%] -translate-x-[50%]-translate-y-[50%] w-full h-3/4 scale-79 border-1"
    >
      {/* <svg
        className="absolute top-[57%] left-[48%] -translate-x-[50%]
       -translate-y-[50%] w-full h-auto scale-79 border-1"
        width="777"
        height="595"
        viewBox="0 0 777 595"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M603.5 327C607.442 367.372 716.5 363 716.5 363C720.337 367.655 691.716 388.15 685 398C669.5 436.5 690 508.677 690 508.677C621.345 550.815 534.589 580.194 438.573 589.57C292.5 589.57 172.5 575 83 516.5C18.5 507 17.5003 463.5 14.0002 434.5C14.0002 434.5 39.2203 436.715 42.5002 415.5C45.7398 394.546 8.03869 344.756 6.5001 329C6.5001 329 52.622 370.047 87.0002 363C107.072 358.885 133.5 305 133.5 305C133.5 305 227 254 179 213.5C179 213.5 226.5 184.5 239.5 167.5C221 122.5 130 60 130 60C203.5 34 295.486 14.378 381.586 5.97051C476.316 3.70286 570.416 7.2274 643.5 32C695.154 49.5087 738.339 74.9388 771.5 106.258C771.5 106.258 756 179 724.5 232C681 286 601.573 307.263 603.5 327Z"
          stroke="#FFE600"
          stroke-opacity="0.5"
          stroke-width="10"
        />
      </svg> */}
    </div>
  );
};

export default DumplingWrapper;
