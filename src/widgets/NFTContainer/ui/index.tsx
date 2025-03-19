import { NFT } from "entities/NFT";
import ArrowIcon from "shared/assets/images/icons/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { FreeMode, Keyboard, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

export const NFTContainer = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperRef.current = swiperInstance;
      swiperInstance.update();
    }
  }, [swiperInstance]);

  return (
    <div className={"bg-swiper_bg w-full"}>
      <div className={"flex justify-center w-full"}>
        <div
          className={
            "flex flex-col items-center gap-[50px] py-[50px] w-full xl:py-[70px] xl:gap-[70px]"
          }
        >
          <h2
            className={
              "text-3xl leading-[30px] font-poppins font-semibold text-title_gray text-center sm:text-[33px] sm:!leading-9 sm:text-left xl:text-[45px] xl:!leading-[48px]"
            }
          >
            Weekly - Top NFT
          </h2>

          <div className={"w-full"}>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={32}
              loop={true}
              loopAdditionalSlides={7}
              loopedSlides={7}
              freeMode={true}
              watchSlidesProgress={true}
              navigation={false}
              speed={500}
              keyboard={{
                enabled: true,
              }}
              grabCursor={true}
              modules={[FreeMode, Keyboard, Navigation]}
              onSwiper={setSwiperInstance}
              breakpoints={{
                1280: {
                  spaceBetween: 40,
                },
              }}
              className={"!overflow-y-visible"}
            >
              {[...Array(7)].map((_, index) => (
                <SwiperSlide className={"max-w-[210px] xl:max-w-[281px]"}>
                  <NFT />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={"flex justify-center items-center w-full"}>
            <div
              className={
                "flex items-center justify-center gap-22px bg-[#FCFCFD] rounded-xl w-[124px] h-12 shadow-[0_32px_26px_rgba(15,15,15,0.12)] xl:gap-30px xl:rounded-2xl xl:w-[166px] xl:h-16"
              }
            >
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img
                  src={ArrowIcon}
                  alt={"Arrow"}
                  className={
                    "block select-none w-[18px] h-[18px] xl:w-6 xl:h-6"
                  }
                  loading={"lazy"}
                  draggable={"false"}
                />
              </button>

              <div className={"bg-[#E6E8EC] w-0.5 h-[18px] xl:h-6"}></div>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img
                  src={ArrowIcon}
                  alt={"Arrow"}
                  className={
                    "block select-none rotate-180 w-[18px] h-[18px] xl:w-6 xl:h-6"
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
