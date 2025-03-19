import LogoIcon from "shared/assets/images/icons/logo.svg";
import { Button, BurgerMenuButton, NavList } from "shared/ui";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "widgets/MobileMenu";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`sticky top-0 z-40 ${isScroll ? "bg-white md:rounded-b-2xl" : "bg-background"} transition-all duration-500 w-full`}
    >
      <MobileMenu isOpen={isMobileMenuOpen} />

      <div
        className={
          "flex justify-center relative z-40 px-30px w-full h-[108px] md:h-auto"
        }
      >
        <div className={"max-w-limitation w-full"}>
          <div
            className={
              "flex flex-col items-center gap-30px pt-30px md:py-8 md:gap-0"
            }
          >
            <div className={"flex justify-between items-center gap-6 w-full"}>
              <div
                className={"flex items-center flex-nowrap md:gap-6 xl:gap-10"}
              >
                <Link
                  to={"/"}
                  className={"flex items-center gap-2 flex-nowrap"}
                >
                  <img
                    className={
                      "block select-none w-[42px] h-[42px] md:w-[38px] md:h-[38px]"
                    }
                    src={LogoIcon}
                    alt={"Logo"}
                    loading={"lazy"}
                    draggable={"false"}
                    width={42}
                    height={42}
                  />

                  <p
                    className={
                      "text-left text-black text-22px leading-6 font-poppins font-semibold md:hidden"
                    }
                  >
                    DiveSea
                  </p>
                </Link>

                <div className={"hidden md:block"}>
                  <NavList />
                </div>
              </div>

              <div className={"w-fit"}>
                <div className={"hidden md:block"}>
                  <Button
                    className={
                      "text-center text-11.5px leading-[18px] font-inter whitespace-nowrap text-white font-semibold uppercase bg-dark py-[11px] px-4 rounded-11.5px hover:bg-dark_btn_hover"
                    }
                    text={"Connect Wallet"}
                  />
                </div>

                <div className={"block md:hidden"}>
                  <BurgerMenuButton
                    isOpen={isMobileMenuOpen}
                    onClick={toggleMenu}
                  />
                </div>
              </div>
            </div>

            <div
              className={"block bg-light_gray w-full h-[0.5px] md:hidden"}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};
