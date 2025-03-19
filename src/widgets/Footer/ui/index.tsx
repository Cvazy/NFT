import { Link } from "react-router-dom";
import { NetworksList } from "widgets/NetworksList";
import { NavItem } from "shared/ui/NavList/ui/NavItem";
import LogoLightIcon from "shared/assets/images/icons/logo_light.svg";

export const Footer = () => {
  return (
    <footer className={"bg-dark w-full"}>
      <div className={"flex justify-center px-6 w-full"}>
        <div className={"max-w-limitation w-full"}>
          <div
            className={
              "flex flex-col items-center gap-[26px] pt-[52px] pb-10 md:gap-10 md:py-[60px] xl:gap-14 xl:py-[88px]"
            }
          >
            <div className={"flex flex-col gap-12 w-full md:gap-5 lg:gap-6"}>
              <div
                className={
                  "flex flex-col items-start gap-8 w-full md:flex-row md:items-center md:justify-between md:gap-4"
                }
              >
                <div
                  className={"flex items-center justify-between gap-5 w-full"}
                >
                  <Link
                    to={"/"}
                    className={"flex items-center gap-2 flex-nowrap"}
                  >
                    <img
                      className={
                        "block select-none w-[46px] h-[46px] xl:w-[65px] xl:h-[65px]"
                      }
                      src={LogoLightIcon}
                      alt={"Logo"}
                      loading={"lazy"}
                      draggable={"false"}
                      width={46}
                      height={46}
                    />
                    <p
                      className={
                        "text-left text-white text-22px leading-6 font-poppins font-semibold xl:text-3xl"
                      }
                    >
                      DiveSea
                    </p>
                  </Link>

                  <div className={"block md:hidden"}>
                    <NetworksList isFooter={true} />
                  </div>
                </div>

                <nav className={"w-full"}>
                  <ul
                    className={
                      "flex flex-col items-start list-none p-0 m-0 gap-30px w-full md:flex-row md:justify-end md:gap-8 lg:gap-[50px] xl:gap-[70px]"
                    }
                  >
                    <NavItem
                      text={"Privacy Policy"}
                      link={"/"}
                      isFooter={true}
                    />

                    <NavItem
                      text={"Term & Conditions"}
                      link={"/"}
                      isFooter={true}
                    />

                    <NavItem text={"About Us"} link={"/"} isFooter={true} />

                    <NavItem text={"Contact"} link={"/"} isFooter={true} />
                  </ul>
                </nav>
              </div>

              <div className={"bg-[#818181] w-full h-[0.5px] opacity-50"}></div>
            </div>

            <div
              className={
                "flex items-center justify-center gap-5 w-full md:justify-between"
              }
            >
              <p
                className={
                  "font-inter text-sm !leading-4 text-[#999999] font-medium text-center md:text-left md:text-xs lg:text-lg lg:!leading-7"
                }
              >
                © 2023{" "}
                <span className={"inline md:hidden"}>
                  DiveSea All Rights Reserved.
                </span>
              </p>

              <div className={"hidden md:block"}>
                <NetworksList isFooter={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
