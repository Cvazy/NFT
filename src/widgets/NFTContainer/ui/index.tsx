import { NFT, useFetchAllNFTQuery } from "entities/NFT";
import ArrowIcon from "shared/assets/images/icons/arrow.svg";
import { motion, useDragControls, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const NFTContainer = () => {
  const { data } = useFetchAllNFTQuery();

  const NFTData = useMemo(() => data || [], [data]);

  const [index, setIndex] = useState<number>(0);
  const x = useMotionValue<number>(0);
  const dragControls = useDragControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % NFTData.length);
  }, [NFTData.length]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + NFTData.length) % NFTData.length);
  }, [NFTData.length]);

  useEffect(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.children[0] as HTMLElement;
      if (firstChild) {
        const gap = window.innerWidth >= 1280 ? 40 : 32;
        setItemWidth(firstChild.offsetWidth + gap);
      }
    }
  }, [NFTData]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [nextSlide, prevSlide]);

  return (
    <div className={"bg-swiper_bg w-full"}>
      <div className={"flex justify-center w-full"}>
        <div
          className={
            "flex flex-col items-center gap-[50px] py-[50px] w-full xl:py-[70px] xl:gap-[70px] min-[1920px]:py-28"
          }
        >
          <h2
            className={
              "text-3xl leading-[30px] font-poppins font-semibold text-title_gray text-center sm:text-[33px] sm:!leading-9 sm:text-left xl:text-[45px] xl:!leading-[48px] min-[1920px]:text-[56px] min-[1920px]:!leading-[60px]"
            }
          >
            Weekly - Top NFT
          </h2>

          <div className="relative w-full cursor-grab">
            <motion.div
              ref={containerRef}
              className="flex gap-8 xl:gap-10"
              drag="x"
              dragControls={dragControls}
              dragElastic={0.2}
              style={{ x }}
              onDragEnd={(event, info) => {
                if (info.offset.x < -50) {
                  nextSlide();
                } else if (info.offset.x > 50) {
                  prevSlide();
                }
              }}
              animate={{ x: `-${index * itemWidth}px` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {[...NFTData, ...NFTData].map(({ name, price, img }, i) => (
                <NFT key={i} name={name} price={price} img={img} />
              ))}
            </motion.div>
          </div>

          <div className={"flex justify-center items-center w-full"}>
            <div
              className={
                "flex items-center justify-center gap-22px bg-[#FCFCFD] rounded-xl w-[124px] h-12 shadow-[0_32px_26px_rgba(15,15,15,0.12)] xl:gap-30px xl:rounded-2xl xl:w-[166px] xl:h-16 min-[1920px]:w-[204px] min-[1920px]:h-20"
              }
            >
              <button type="button" onClick={prevSlide}>
                <img
                  src={ArrowIcon}
                  alt={"Arrow"}
                  className={
                    "block select-none w-[18px] h-[18px] xl:w-6 xl:h-6 min-[1920px]:w-8 min-[1920px]:h-8"
                  }
                  loading={"lazy"}
                  draggable={"false"}
                />
              </button>

              <div
                className={
                  "bg-[#E6E8EC] w-0.5 h-[18px] xl:h-6 min-[1920px]:h-8"
                }
              ></div>

              <button type="button" onClick={nextSlide}>
                <img
                  src={ArrowIcon}
                  alt={"Arrow"}
                  className={
                    "block select-none rotate-180 w-[18px] h-[18px] xl:w-6 xl:h-6 min-[1920px]:w-8 min-[1920px]:h-8"
                  }
                  loading={"lazy"}
                  draggable={"false"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
