import { LiaHandPointer } from "react-icons/lia";

interface Props {
  dropped: boolean;
}

const Arrow = ({ dropped }: Props) => {
  return (
    <div
      className={`absolute -translate-x-[50%]-translate-y-[50%] 
     top-[74%] left-[45%] scale-200
     ${dropped ? "invisible" : ""}`}
    >
      Arrow
    </div>
  );
};

export default Arrow;
