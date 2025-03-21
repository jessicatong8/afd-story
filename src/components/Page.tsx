// Import images into array of URLs, using Vite's dynamic import with URL

const images = Array.from(
  { length: 34 },
  (_, i) => new URL(`../assets/pg_${i}.png`, import.meta.url).href
);

console.log(images);

interface Prop {
  page: number;
}

const Page = ({ page }: Prop) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <img
        src={images[page]}
        alt={`Page ${page}`}
        className="max-h-[50vh] max-w-[50vw] object-contain"
      />
    </div>
  );
};

export default Page;
