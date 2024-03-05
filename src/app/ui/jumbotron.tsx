"use client";
import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
  createContext,
} from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const JumbotronContext = createContext({} as any);

function Jumbotron({ images }: { images: string[] }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(images[0]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextImage = function () {
    setLoadingProgress(0);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2500);

    if (!isAnimating) {
      setImageLoaded((prevImage: string) => {
        if (
          images.findIndex((image: string) => image === prevImage) ===
          images.length - 1
        )
          return images[0];

        return images[
          images.findIndex((image: string) => image === prevImage) + 1
        ];
      });

      setIsAnimating(true);
    }
  };

  const handlePrevImage = function () {
    setLoadingProgress(0);

    setTimeout(() => {
      setIsAnimating(false);
    }, 2500);

    if (!isAnimating) {
      setImageLoaded((prevImage: string) => {
        if (images.findIndex((image: string) => image === prevImage) === 0)
          return images[images.length - 1];

        return images[
          images.findIndex((image: string) => image === prevImage) - 1
        ];
      });

      setIsAnimating(true);
    }
  };

  return (
    <div
      className="jumbotron border-0 h-[45rem] relative overflow-hidden duration-[2000ms] transition-[background-image] bg-center bg-blend-multiply bg-no-repeat bg-cover"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsLoading(false);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsLoading(true);
      }}
      style={{ backgroundImage: `url(${imageLoaded}` }}
    >
      <JumbotronContext.Provider
        value={{
          images,
          imageLoaded,
          setImageLoaded,
          handleNextImage,
          handlePrevImage,
          loadingProgress,
          setLoadingProgress,
          isAnimating,
        }}
      >
        <div className="bg-black opacity-20 absolute top-0 left-0 right-0 bottom-0 z-10"></div>
        <LoadingBar isLoading={isLoading} />
        <h1></h1>
        <SliderButton direction="left" showed={isHovered} />
        <SliderButton direction="right" showed={isHovered} />
      </JumbotronContext.Provider>
    </div>
  );
}

type directions = "left" | "right";

function SliderButton({
  direction,
  showed,
}: {
  direction: directions;
  showed: boolean;
}) {
  const { handleNextImage, handlePrevImage, isAnimating } =
    useContext(JumbotronContext);

  return (
    <button
      className={`h-28 w-14 absolute z-20 ${
        direction === "right" ? "right-0" : ""
      }  top-1/2 -translate-y-1/2 bg-black2 hover:opacity-100 hover:h-36 transition-all ${
        !showed ? "opacity-0" : "opacity-40"
      } rounded-lg`}
      onClick={() => {
        if (!isAnimating) {
          if (direction === "right") {
            handleNextImage();
          } else handlePrevImage();
        }
      }}
    >
      {direction === "left" && <IoIosArrowBack size={50} color="white"/>}
      {direction === "right" && <IoIosArrowForward size={50} color="white"/>}
    </button>
  );
}

function LoadingBar({ isLoading }: { isLoading: boolean }) {
  const {
    setImageLoaded,
    handleNextImage,
    setLoadingProgress,
    loadingProgress,
  } = useContext(JumbotronContext);
  //   const loadingProgressString = loadingProgress.toString();
  const loadingBar = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(
    function () {
      const interval = setInterval(function () {
        if (loadingProgress === 100) {
          handleNextImage();
        }

        if (isLoading) setLoadingProgress((value: any) => value + 1);

        loadingBar.current.style.width = `${loadingProgress}vw`;
      }, 100);

      return () => clearInterval(interval);
    },
    [loadingProgress, isLoading]
  );

  return (
    <div
      className={`bg-black2 rounded-lg  h-2 transition-all z-20 absolute`}
      ref={loadingBar}
    ></div>
  );
}

export default Jumbotron;
