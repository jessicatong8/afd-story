import image from "../assets/game/startPage/lunchbox_open.png";

const StoryEndPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6 w-screen h-screen">
      <p className="text-center">
        Do you know all the different ways to express love?
        <br />
        Let’s play a game to find out!
      </p>
      <button onClick={() => console.log("clicked!")}>
        <img src={image} className="" />
      </button>
      <div className="grid grid-cols-2 gap-4 ">
        <button className="border-2  border-gray-200 px-4 py-2 rounded ">
          Read Again
        </button>
        <button className="border-2  border-gray-200 px-4 py-2 rounded">
          Skip
        </button>
      </div>
    </div>
  );
};

export default StoryEndPage;
