import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-2 p-8 ">
      <span className="text-2xl font-bold">404 Not Found</span>
      <Link to="/" className="underline">
        Return to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
