import { Link } from "react-router-dom";

interface INavItemProps {
  text: string;
  link: string;
}

export const NavItem = ({ text, link }: INavItemProps) => {
  return (
    <li className={"flex items-center h-nav_item md:h-4"}>
      <Link
        to={link}
        className={
          "font-inter font-medium text-menu_text_gray text-40px leading-42px text-left uppercase md:text-sm md:!leading-4"
        }
      >
        {text}
      </Link>
    </li>
  );
};
