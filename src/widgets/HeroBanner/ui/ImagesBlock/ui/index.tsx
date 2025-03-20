import { motion } from "framer-motion";

import BannerFirst from "shared/assets/images/hero_banner/banner1.png";
import BannerShadowFirst from "shared/assets/images/hero_banner/shadow1.png";
import BannerSecond from "shared/assets/images/hero_banner/banner2.png";
import BannerShadowSecond from "shared/assets/images/hero_banner/shadow2.png";
import DotsImage from "shared/assets/images/hero_banner/dots.png";
import ArrowImage from "shared/assets/images/hero_banner/arrow.png";

export const ImagesBlock = () => {
  return (
    <div className={"w-[110%]"}>
      <div className={"flex gap-5 w-full md:gap-6 lg:gap-[26px] xl:gap-10"}>
        <motion.div
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={
            "flex items-center justify-center self-start relative min-w-[55%] max-w-[110%] w-full md:min-w-[65%]"
          }
        >
          <div
            className={
              "flex items-center justify-center overflow-hidden rounded-[14px] relative z-10 w-full md:rounded-[18px] xl:rounded-3xl"
            }
          >
            <img
              className={
                "block select-none rounded-[14px] object-cover object-center w-full aspect-square md:rounded-[18px] xl:rounded-3xl"
              }
              src={BannerFirst}
              alt={"First Banner"}
              loading={"lazy"}
              draggable={"false"}
              width={251}
              height={130}
            />
          </div>

          <img
            className={
              "block absolute top-[15%] left-0 select-none w-full aspect-square scale-110"
            }
            src={BannerShadowFirst}
            alt={"Shadow"}
            loading={"lazy"}
            draggable={"false"}
            width={263}
            height={130}
          />
        </motion.div>

        <div
          className={
            "flex items-center justify-center self-end pt-[50%] min-w-[45%] max-w-[105%] relative w-full md:min-w-[55%]"
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className={"absolute z-5 -top-6 right-0 md:-top-7 xl:-top-8"}
          >
            <img
              className={"block select-none w-full h-full"}
              src={DotsImage}
              alt={"Dots"}
              loading={"lazy"}
              draggable={"false"}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.5, delay: 1.75 }}
            className={
              "absolute z-5 top-16 -left-3 md:top-[70px] md:-left-4 xl:-left-5 xl:top-[92px]"
            }
          >
            <img
              className={"block select-none w-full h-full"}
              src={ArrowImage}
              alt={"Arrow"}
              loading={"lazy"}
              draggable={"false"}
            />
          </motion.div>

          <motion.div
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={
              "flex items-center justify-center overflow-hidden rounded-[14px] relative z-10 w-full md:rounded-[18px] xl:rounded-3xl"
            }
          >
            <img
              className={
                "block select-none rounded-[14px] object-cover object-center w-full aspect-square md:rounded-[18px] xl:rounded-3xl"
              }
              src={BannerSecond}
              alt={"First Banner"}
              loading={"lazy"}
              draggable={"false"}
              width={251}
              height={130}
            />
          </motion.div>

          <motion.img
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={
              "block absolute top-[60%] left-0 select-none w-full aspect-square scale-110"
            }
            src={BannerShadowSecond}
            alt={"Shadow"}
            loading={"lazy"}
            draggable={"false"}
            width={263}
            height={130}
          />
        </div>
      </div>
    </div>
  );
};
