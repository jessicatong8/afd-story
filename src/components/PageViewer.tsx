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

  console.log(currentPage);
  console.log(pageNum, isActive);

  return (
    <div
      className={`absolute ${isActive ? "visible" : "invisible"}`} // Only make the active page visible
    >
      <img src={imageSrc} alt={`Page ${pageNum}`} className="object-contain" />
      {children}
    </div>
  );
};

export default PageViewer;
