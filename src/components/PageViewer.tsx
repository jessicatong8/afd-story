import { motion } from "framer-motion";
import { useReadContext } from "./ReadContext";

interface Props {
  pageNum: number;
  currentPage: number;
  direction: number;
  imageSrc: string;
  children?: React.ReactNode;
}

const PageViewer = ({
  pageNum,
  currentPage,
  imageSrc,
  direction,
  children,
}: Props) => {
  //   const { currentPage, direction } = useReadContext();

  const isActive = pageNum === currentPage;

  const animationVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  console.log(currentPage);
  console.log(pageNum, isActive);

  return (
    <motion.div
      key={pageNum}
      custom={direction}
      variants={animationVariants}
      initial={isActive ? "enter" : "center"} // Only animate the active page
      animate={isActive ? "center" : "center"} // Keep the previous and next pages static
      exit={isActive ? "exit" : "center"} // Only animate the active page out
      transition={{ duration: 0.4 }}
      className={`absolute ${isActive ? "visible" : "invisible"}`} // Only make the active page visible
    >
      <img src={imageSrc} alt={`Page ${pageNum}`} className="object-contain" />
      {children}
    </motion.div>
  );
};

export default PageViewer;
