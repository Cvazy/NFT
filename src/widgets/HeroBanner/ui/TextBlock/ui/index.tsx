import { motion } from "framer-motion";
import { Button } from "shared/ui";
import { CountBlock } from "entities/CountBlock";
import { COUNTS_DATA } from "widgets/HeroBanner/ui/TextBlock/model/data";

export const TextBlock = () => {
  return (
    <div
      className={
        "flex flex-col items-start gap-14 w-full md:max-w-[350px] lg:gap-20 xl:max-w-[567px]"
      }
    >
      <div
        className={
          "flex flex-col items-center gap-10 md:gap-9 md:items-start xl:gap-11"
        }
      >
        <div
          className={
            "flex flex-col items-center gap-2 w-full md:items-start xl:gap-2.5"
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={
              "flex justify-center items-center gap-2 flex-nowrap md:justify-start"
            }
          >
            <div
              className={
                "w-8 h-px bg-light_gray md:opacity-50 md:w-[138px] xl:w-[195px]"
              }
            ></div>

            <p
              className={
                "uppercase text-[10px] leading-3 font-poppins font-semibold text-[#8C8C8C] whitespace-nowrap md:hidden"
              }
            >
              OVER 1M CREATORS
            </p>
          </motion.div>

          <div
            className={
              "flex flex-col items-center gap-4 w-full md:items-start xl:gap-7"
            }
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={
                "text-dark text-5xl !leading-[54px] font-poppins font-semibold text-center tracking-[-2px] md:text-left lg:text-[54px] lg:!leading-[62px] xl:text-[76px] xl:!leading-[84px]"
              }
            >
              Discover And Create NFTs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={
                "text-[#676767] text-[11px] leading-[18px] font-inter text-center md:text-left md:text-[13px] xl:text-lg"
              }
            >
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over
              Thousands Of NFTs And Get a{" "}
              <span className={"text-dark font-semibold"}>$20 bonus.</span>
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className={"flex items-center gap-4 flex-nowrap xl:gap-22px"}
        >
          <Button
            className={
              "text-center text-[10px] !leading-normal font-poppins whitespace-nowrap text-white font-medium uppercase bg-dark py-[15px] px-[21px] rounded-[10px] md:py-3 md:rounded-[9px] xl:text-base xl:px-8 xl:py-[18px] hover:bg-dark_btn_hover"
            }
            text={"Explore More"}
          />

          <Button
            className={
              "text-center text-[10px] !leading-normal font-poppins whitespace-nowrap text-dark font-medium uppercase bg-white py-[15px] px-[21px] rounded-[10px] border-2 border-solid border-dark md:py-3 md:rounded-[9px] xl:text-base xl:px-8 xl:py-[18px] hover:bg-[#F2F2F2]"
            }
            text={"create NFT"}
          />
        </motion.div>
      </div>

      <div
        className={
          "hidden grid-cols-3 gap-7 w-full md:grid lg:gap-10 xl:gap-[60px]"
        }
      >
        {COUNTS_DATA.map(({ id, title, count }, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 + index * 0.5 }}
            key={id}
            className={
              "hidden grid-cols-3 gap-7 w-full md:grid lg:gap-10 xl:gap-[60px]"
            }
          >
            <CountBlock count={count} title={title} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
