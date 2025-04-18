import { Suspense, useEffect, useState } from "react";
import { useReadContext } from "../../ReadContext";

import Words20 from "./Words20";
import Food17 from "./Food17";
import Touch28 from "./Touch28";
import Gift29 from "./Gift29";
import Service30 from "./Service30";
import Time31 from "./Time31";

const LoveLanguagesUI = () => {
  const { currentPage, toggleNext } = useReadContext();
  // console.log(currentPage);

  const componentMap: Record<number, React.ComponentType<any>> = {
    17: Food17,
    20: Words20,
    28: Touch28,
    29: Gift29,
    30: Service30,
    31: Time31,
  };
  const ComponentToRender = componentMap[currentPage];

  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    clicked ? toggleNext(true) : toggleNext(false);
  }, [clicked]);

  const handleClick = () => {
    setClicked(true);
    toggleNext(true);
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      // onTouchStart={() => setClicked(true)}
      // onTouchEnd={() => setClicked(false)}
      className={`${!clicked && "cursor-pointer"}`}
    >
      {[17, 20, 28, 29, 30, 31].includes(currentPage) && (
        <ComponentToRender clicked={clicked} hover={hover} opacity="0.9" />
      )}
    </button>
  );
};

export default LoveLanguagesUI;
