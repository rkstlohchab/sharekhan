import video1 from "../assets/video1.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-20">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
          CapitalTrading
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            Academy
          </span>
        </h1>
        <p className="mt-10 text-3xl max-w-4xl mx-auto lg:mx-0 p-2 ">
          CONTACT US NOW - 74-9600-1361
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-3/4 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
