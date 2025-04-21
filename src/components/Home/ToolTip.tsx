import { useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
} from "@floating-ui/react";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(2), flip(), shift()],
    whileElementsMounted: autoUpdate,
    placement: "top",
  });

  return (
    <span
      ref={refs.setReference}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="underline text-sky-600 cursor-pointer"
    >
      {children}
      <div
        ref={refs.setFloating}
        style={{
          ...floatingStyles,
          transition: "opacity 150ms ease-out",
          opacity: isOpen ? 1 : 0,
        }}
        className="w-70 p-4 bg-blue-tertiary border text-sm text-black border-blue-primary rounded shadow-md"
      >
        {content}
      </div>
    </span>
  );
};

export default Tooltip;
