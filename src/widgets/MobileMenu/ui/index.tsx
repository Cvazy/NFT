import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button, NavList } from "shared/ui";
import { NetworksList } from "widgets";

export const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const height = window.visualViewport?.height ?? window.innerHeight;
      setMenuHeight(isOpen ? height - 108 : 0);
    };

    updateHeight(); // Устанавливаем сразу
    window.visualViewport?.addEventListener("resize", updateHeight);

    return () => {
      window.visualViewport?.removeEventListener("resize", updateHeight);
    };
  }, [isOpen]);

  return (
    <motion.div
      animate={{ height: menuHeight }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: isOpen ? 0 : 0.5 }}
      className={
        "absolute top-[108px] left-0 w-full bg-background z-30 overflow-hidden md:hidden"
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, delay: isOpen ? 0.5 : 0 }}
        className={"w-full h-full"}
      >
        <div className={"pt-11 pb-10 px-30px w-full h-full"}>
          <div
            className={
              "flex flex-col items-start justify-between gap-4 w-full h-full"
            }
          >
            <div className={"flex flex-col items-start gap-11 w-full"}>
              <NavList />

              <NetworksList />
            </div>

            <Button
              className={
                "text-center text-xl !leading-[22px] font-inter whitespace-nowrap text-white font-semibold uppercase bg-dark py-[19px] px-4 rounded-[15px] w-full"
              }
              text={"Connect Wallet"}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
