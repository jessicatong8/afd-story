import { motion } from "framer-motion";
import { useReadContext } from "./ReadContext";
import { useEffect, useState } from "react";

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

  //   const [isActive, setIsActive] = useState(pageNum === currentPage);
  //   const [isPrevious, setIsPrevious] = useState(pageNum === currentPage - 1);
  //   const [isNext, setIsNext] = useState(pageNum === currentPage + 1);

  //   useEffect(() => {
  //     setIsActive(pageNum === currentPage);
  //     setIsPrevious(pageNum === currentPage - 1);
  //     setIsNext(pageNum === currentPage + 1);
  //   }, [currentPage]);
  //   console.log(direction);

  const isActive = pageNum === currentPage;
  const isPrevious = pageNum === currentPage - 1;
  const isNext = pageNum === currentPage + 1;

  //   const [prevPage, setPrevPage] = useState(false);
  //   useEffect(() => {
  //     if (direction > 0) {
  //       setPrevPage(pageNum === currentPage - 1);
  //     } else if (direction < 0) {
  //       setPrevPage(pageNum === currentPage + 1);
  //     }
  //   }, [currentPage]);

  //   console.log(pageNum);
  //   console.log("isPrevious: " + isPrevious);
  //   console.log("isActive: " + isActive);
  //   console.log("isNext: " + isNext);

  return (
    <div
      id={`${pageNum}`}
      className={`absolute w-full h-full transition-transform duration-700 ease-in-out
        ${isActive ? "translate-x-0" : ""}
        ${isPrevious ? "-translate-x-full" : ""}
        ${isNext ? "translate-x-full" : ""}
        `}
    >
      <img src={imageSrc} alt={`Page ${pageNum}`} className="object-contain" />
      {children}
    </div>
  );
};

export default PageViewer;
