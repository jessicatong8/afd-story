import React, { createContext, useContext, useState } from "react";

// Context for the ReadPage component, contains all states and functions related to vieweing and navigating the story
interface ReadContextType {
  handleNext: () => void;
  handleBack: () => void;
  nextIsActive: boolean;
  backIsActive: boolean;
  currentPage: number;
  numPages: number;
}

const ReadContext = createContext<ReadContextType | undefined>(undefined);

// Provider component
export const ReadContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const numPages = 33;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [nextIsActive, setNextActive] = useState<boolean>(true);
  const [backIsActive, setBackActive] = useState<boolean>(true);

  // Functions to be provided by the context
  const handleNext = () => {
    if (nextIsActive && currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (backIsActive && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
