import { useState, useRef, useEffect } from "react";

const modules = import.meta.glob("/public/loveLanguageIcons/*.png", {
  eager: true,
});

const icons: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const fileName = path.split("/").pop()!; // non-null assertion since .pop() could be undefined
    const url = (mod as { default: string }).default; // assert type
    return [fileName, url];
  })
);

const LoveLanguageDefinitions = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const definitions: Record<string, string[]> = {
    food: [
      "Love can be shown through making and sharing food with someone you care about.",
      "#FF64B4",
    ],
    words: [
      "Love can be shown through spoken, praise, support, or appreciation.",
      "#FB8A00",
    ],
    touch: [
      "Love can be shown through physical touch and affection like hugs and kisses.",
      "#FAC400",
    ],
    gifts: [
      "Love can be  shown by giving meaningful and thoughtful gifts that show you care.",
      "#8CBF2E",
    ],
    service: [
      "Love can be shown through actions and doing helpful things for others.",
      "#2FB1F2",
    ],
    time: [
      "Love can be shown by spending quality time to share experiences together.",
      "#9B75EE",
    ],
  };

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActivePopup(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
      ref={containerRef}
      className="grid grid-cols-3 gap-8 place-items-center sm:grid-cols-6"
    >
      {Object.entries(definitions).map(([language, definition]) => (
        <div
          key={language}
          className="relative group flex flex-col items-center text-center aspect-square w-full"
          onClick={() =>
            setActivePopup((prev) => (prev === language ? null : language))
          }
        >
          <div
            className={`absolute w-50 h-50 p-6 font-grand leading-snug -translate-y-[25%] rounded-full flex items-center justify-center bg-white border-6 shadow-md transition-all duration-150 z-10
               ${
                 activePopup === language
                   ? "opacity-100 scale-100"
                   : "opacity-0 scale-0 pointer-events-none"
               }`}
            style={{ borderColor: definition[1] }}
          >
            {definition[0]}
          </div>

          {/* Icon */}
          <img
            src={icons[`${language}.png`]}
            alt={language}
            className="cursor-pointer w-full min-w-20 max-w-28 hover:scale-90 transition-transform active:scale-90"
          />
        </div>
      ))}
    </div>
  );
};

export default LoveLanguageDefinitions;
