import { lazy, Suspense, useEffect, useState } from "react";
import { useReadContext } from "../../ReadContext";

const Words20 = lazy(() => import("./Words20"));

const LoveLanguagesUI = () => {
  const { currentPage, toggleNext } = useReadContext();

  const componentMap: Record<
    number,
    React.LazyExoticComponent<React.ComponentType<any>>
  > = {
    20: Words20,
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
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setClicked(true)}
      onTouchEnd={() => setClicked(false)}
      className={`${!clicked && "cursor-pointer"}`}
    >
      {currentPage === 20 && (
        <>
          <Suspense fallback={<span></span>}>
            <ComponentToRender clicked={clicked} hover={hover} />
          </Suspense>
        </>
      )}
    </button>
  );
};

export default LoveLanguagesUI;
