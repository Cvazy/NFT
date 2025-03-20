import { Link } from "react-router-dom";

interface INavItemProps {
  text: string;
  link: string;
  isFooter?: boolean;
}

export const NavItem = ({ text, link, isFooter = false }: INavItemProps) => {
  return (
    <li
      className={`flex items-center ${isFooter ? "h-5 lg:h-7 min-[1920px]:h-7" : "h-nav_item md:h-4 min-[1920px]:h-6"}`}
    >
      <Link
        to={link}
        className={`font-inter font-medium uppercase ${isFooter ? "text-[#B9B9B9] text-sm !leading-5 md:text-xs md:normal-case xl:text-lg xl:!leading-7 min-[1920px]:text-2xl min-[1920px]:!leading-[28px] hover:text-white" : "text-menu_text_gray text-40px leading-42px md:text-sm md:!leading-4 min-[1920px]:text-xl min-[1920px]:!leading-[24px] hover:text-dark"} transition-all duration-300 whitespace-nowrap text-left`}
      >
        {text}
      </Link>
    </li>
  );
};
