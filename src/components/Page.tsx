// Helper function to import all pages
const importAllPages = () => {
  const images: { [key: string]: string } = {};

  // Loop from 1 to 11
  for (let i = 1; i <= 11; i++) {
    // Using Vite's dynamic import with URL
    images[`page${i}`] = new URL(
      `../assets/page${i}.png`,
      import.meta.url
    ).href;
  }

  return images;
};

// Use the function to create your images object
const images = importAllPages();

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
