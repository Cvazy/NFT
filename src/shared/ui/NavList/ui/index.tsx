import { NavItem } from "./NavItem";

export const NavList = () => {
  return (
    <nav className={"w-full"}>
      <ul
        className={
          "flex flex-col items-start gap-5 p-0 m-0 list-none w-full md:flex-row md:justify-between md:gap-8"
        }
      >
        <NavItem text={"Discover"} link={"/"} />

        <NavItem text={"Creators"} link={"/"} />

        <NavItem text={"Sell"} link={"/"} />

        <NavItem text={"Stats"} link={"/"} />
      </ul>
    </nav>
  );
};
