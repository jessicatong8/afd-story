import React, { createContext, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Context for the ReadPage component, contains all states and functions related to viewing and navigating the story
interface ReadContextType {
  handleNext: () => void;
  handleBack: () => void;
  nextIsActive: boolean;
  backIsActive: boolean;
  toggleNext: (state: boolean) => void;
  toggleBack: (state: boolean) => void;
  direction: number;
  currentPage: number;
  numPages: number;
}

const ReadContext = createContext<ReadContextType | undefined>(undefined);

// Provider component
export const ReadContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const params = useParams<{ pageNumber: string }>(); // Get page number from URL
  const currentPage = parseInt(params.pageNumber ?? "0", 10); // converts string from url to a number, default is 1

  // fix so that invalid numbers redirect to page not found

  const numPages = 32;

  // const [currentPage, setCurrentPage] = useState<number>(1);

  const [nextIsActive, setNextActive] = useState<boolean>(true);
  const [backIsActive, setBackActive] = useState<boolean>(true);
  const [direction, setDirection] = useState<number>(0);

  // Functions to be provided by the context
  const handleNext = () => {
    // console.log("handleNext called");
    // console.log(nextIsActive);
    if (nextIsActive && currentPage < numPages) {
      setDirection(1);
      navigate(`/read/${currentPage + 1}`);
      // console.log("page flipped");
    }
    if (currentPage === numPages) {
      navigate("/read/end");
    }
  };

  const handleBack = () => {
    if (backIsActive && currentPage > 0) {
      setDirection(-1);
      navigate(`/read/${currentPage - 1}`);
      // console.log("handleBack called");
    }
  };

  const toggleNext = (state: boolean) => {
    setNextActive(state);
  };

  const toggleBack = (state: boolean) => {
    setBackActive(state);
  };

  return (
    <ReadContext.Provider
      value={{
        handleNext,
        handleBack,
        nextIsActive,
        backIsActive,
        currentPage,
        numPages,
        toggleNext,
        toggleBack,
        direction,
      }}
    >
      {children}
    </ReadContext.Provider>
  );
};

// a custom hook to use the context
export const useReadContext = (): ReadContextType => {
  const context = useContext(ReadContext);
  if (!context) {
    throw new Error("useReadContext must be used within a ReadContextProvider");
  }
  return context;
};
