import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onCLose: () => void;
}

const Alert = ({ children, onCLose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onCLose}
      ></button>
    </div>
  );
};

export default Alert;
