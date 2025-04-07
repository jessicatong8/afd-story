import { lazy, Suspense, useEffect, useState } from "react";
import { useReadContext } from "../../ReadContext";

const Words20 = lazy(() => import("./Words20"));
const Food17 = lazy(() => import("./Food17"));
const Touch28 = lazy(() => import("./Touch28"));
const Gift29 = lazy(() => import("./Gift29"));
const Service30 = lazy(() => import("./Service30"));
const Time31 = lazy(() => import("./Time31"));

const LoveLanguagesUI = () => {
  const { currentPage, toggleNext, nextIsActive } = useReadContext();

  const componentMap: Record<
    number,
    React.LazyExoticComponent<React.ComponentType<any>>
  > = {
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

  //   useEffect(() => {
  //     console.log("useEffect");
  //     setClicked(false);
  //     toggleNext(false);
  //   }, [currentPage]);

  useEffect(() => {
    clicked ? toggleNext(true) : toggleNext(false);
  }, [clicked]);

  const handleClick = () => {
    setClicked(true);
    toggleNext(true);
  };

  console.log("nextIsActive: " + nextIsActive);
  console.log("clicked: " + clicked);

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setClicked(true)}
      onTouchEnd={() => setClicked(false)}
      className={`${!clicked && "cursor-pointer"}`}
    >
      {[17, 20, 28, 29, 30, 31].includes(currentPage) && (
        <Suspense fallback={<span></span>}>
          <ComponentToRender clicked={clicked} hover={hover} />
        </Suspense>
      )}
    </button>
  );
};

export default LoveLanguagesUI;
