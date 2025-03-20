import { Button } from "shared/ui";
import BannerShadowImage from "shared/assets/images/banner_shadow.png";
import { useFetchBannerDataQuery } from "../model";

export const Banner = () => {
  const { data } = useFetchBannerDataQuery();

  const { title, subtitle, img } = data || {};

  return (
    <div className={"w-full"}>
      <div className={"flex justify-center px-6 w-full"}>
        <div className={"max-w-limitation w-full"}>
          <div className={"pt-[70px] pb-[162px] md:py-[90px] xl:py-[120px]"}>
            <div
              className={
                "bg-dark rounded-2xl w-full h-[211px] sm:h-auto md:rounded-[22px] xl:rounded-[30px]"
              }
            >
              <div
                className={
                  "flex flex-col items-center justify-between gap-[42px] py-22px px-8 w-full sm:grid sm:grid-cols-2 md:pl-10 md:py-6 md:pr-22px lg:grid-cols-3 lg:pl-12 xl:pl-[66px] xl:py-8 xl:pr-8"
                }
              >
                <div
                  className={
                    "flex flex-col items-center justify-between gap-[22px] w-full h-full sm:items-start lg:col-span-2"
                  }
                >
                  <div
                    className={
                      "flex flex-col items-center gap-4 sm:items-start"
                    }
                  >
                    <h2
                      className={
                        "text-2xl !leading-6 font-poppins font-semibold text-white text-center sm:text-[33px] sm:!leading-9 sm:text-left xl:text-[45px] xl:!leading-[48px]"
                      }
                    >
                      {title}
                    </h2>

                    <p
                      className={
                        "opacity-60 font-medium font-poppins text-[10px] leading-tight text-[#D4D4D4] text-center sm:text-left sm:text-[15px] sm:leading-[16.5px] xl:text-xl xl:!leading-[22px]"
                      }
                    >
                      {subtitle}
                    </p>
                  </div>

                  <div
                    className={
                      "flex items-center gap-3.5 flex-nowrap md:gap-[18px] xl:gap-6"
                    }
                  >
                    <Button
                      className={
                        "transition-all duration-500 text-center text-11.5px leading-tight font-outfit whitespace-nowrap text-dark font-semibold bg-white py-2.5 px-4 rounded-md md:py-[15px] md:px-[18px] md:text-base md:rounded-lg xl:rounded-xl xl:px-6 xl:py-5 xl:text-22px hover:bg-[#F2F2F2]"
                      }
                      text={"Explore More"}
                    />

                    <Button
                      className={
                        "transition-all duration-500 text-center text-11.5px leading-tight font-outfit whitespace-nowrap border-2 border-solid border-white text-white font-semibold bg-dark py-2.5 px-4 rounded-md md:py-[15px] md:px-[18px] md:text-base md:rounded-lg xl:rounded-xl xl:px-6 xl:py-5 xl:text-22px hover:bg-[#F2F2F2] hover:text-dark"
                      }
                      text={"Sell Artwork"}
                    />
                  </div>
                </div>

                <div
                  className={"flex items-center justify-center relative w-full"}
                >
                  <div
                    className={
                      "flex items-center justify-center overflow-hidden rounded-lg relative z-10 w-full max-w-[251px] max-h-[130px] min-[480px]:max-w-full min-[480px]:max-h-full md:rounded-xl xl:rounded-2xl lg:col-span-1"
                    }
                  >
                    <img
                      className={
                        "block select-none rounded-lg object-cover object-center w-full h-full md:rounded-xl xl:rounded-2xl"
                      }
                      src={img}
                      alt={title}
                      loading={"lazy"}
                      draggable={"false"}
                      width={251}
                      height={130}
                    />
                  </div>

                  <img
                    className={
                      "block absolute -top-4 -left-1.5 select-none w-full h-full scale-y-125 sm:hidden"
                    }
                    src={BannerShadowImage}
                    alt={"Shadow"}
                    loading={"lazy"}
                    draggable={"false"}
                    width={263}
                    height={130}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
