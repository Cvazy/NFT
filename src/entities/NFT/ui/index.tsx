import { useState, useEffect } from "react";
import BannerImage from "shared/assets/images/banner.png";
import { Button } from "shared/ui";
import MdiEthereumIcon from "shared/assets/images/icons/mdi_ethereum.svg";
import { getRandomTime, formatTime } from "../utils";

export const NFT = () => {
  const [countdown, setCountdown] = useState<number>(getRandomTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={
        "bg-white rounded-[18px] shadow-[28.5px_9px_45px_rgba(199,199,199,0.6)] max-w-[210px] xl:rounded-3xl xl:shadow-[38px_12px_60px_rgba(199,199,199,0.6)] xl:max-w-[281px]"
      }
    >
      <div className={"flex flex-col gap-3.5 p-2.5 xl:gap-5 xl:p-3.5"}>
        <div className={"relative"}>
          <div
            className={
              "absolute bg-[rgba(28,29,32,0.35)] border border-solid border-[rgba(28,29,32,0.08)] shadow-[0_4px_11px_rgba(28,29,32,0.08)] backdrop-blur-sm rounded-lg top-2.5 right-2.5 xl:top-3.5 xl:right-[11px] xl:rounded-[10px] xl:shadow-[0_5px_14px_rgba(28,29,32,0.08)]"
            }
          >
            <div
              className={
                "flex justify-center items-center py-[7px] px-2.5 xl:px-3.5 xl:py-2.5"
              }
            >
              <p
                className={
                  "whitespace-nowrap text-[10px] !leading-none font-poppins font-medium text-white xl:text-sm"
                }
              >
                {formatTime(countdown)}
              </p>
            </div>
          </div>

          <div
            className={
              "flex items-center justify-center overflow-hidden rounded-3xl w-[190px] h-[190px] xl:w-64 xl:h-64"
            }
          >
            <img
              className={
                "block select-none rounded-3xl object-cover object-center w-full h-full"
              }
              src={BannerImage}
              alt={"Create and Sell NFTs"}
              loading={"lazy"}
              draggable={"false"}
            />
          </div>
        </div>

        <div className={"flex flex-col items-start gap-3.5 w-full xl:gap-5"}>
          <p
            className={
              "font-poppins text-left whitespace-nowrap text-base !leading-[18px] font-semibold text-dark xl:leading-6 xl:text-[22px]"
            }
          >
            Sun-Glass
          </p>

          <div
            className={
              "flex items-center justify-between flex-nowrap gap-5 w-full"
            }
          >
            <div
              className={
                "flex flex-col items-start justify-between gap-2 xl:justify-center xl:gap-1"
              }
            >
              <p
                className={
                  "font-poppins text-left whitespace-nowrap text-[11px] !leading-none text-description_blue xl:text-sm"
                }
              >
                Current bid
              </p>

              <div className={"flex items-center gap-1 flex-nowrap"}>
                <img
                  className={
                    "block select-none w-4 h-4 xl:w-[22px] xl:h-[22px]"
                  }
                  src={MdiEthereumIcon}
                  alt={"Eth Icon"}
                  loading={"lazy"}
                  draggable={"false"}
                />

                <p
                  className={
                    "font-poppins text-left whitespace-nowrap text-xs !leading-[14px] font-medium text-dark xl:leading-normal xl:text-base"
                  }
                >
                  1.75
                </p>
              </div>
            </div>

            <Button
              className={
                "text-center text-[10px] !leading-normal font-inter whitespace-nowrap text-white font-semibold uppercase bg-dark py-[11px] px-[18px] rounded-[9px] xl:text-sm xl:px-6 xl:py-3.5 hover:bg-dark_btn_hover"
              }
              text={"PLACE BID"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
