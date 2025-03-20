import { Link } from "react-router-dom";
import { Button } from "shared/ui";

const NotFoundPage = () => {
  return (
    <div className={"flex items-center justify-center w-full"}>
      <div className={"flex flex-col items-center gap-4"}>
        <p
          className={
            "font-poppins text-9xl font-semibold text-center text-dark sm:text-[140px] md:text-[180px] lg:text-[220px] xl:text-[256px]"
          }
        >
          404
        </p>

        <p
          className={
            "text-base font-normal font-poppins text-center text-menu_text_gray md:text-lg xl:text-xl"
          }
        >
          The page was not found
        </p>

        <Link to={"/"} className={"flex justify-center w-full"}>
          <Button
            className={
              "text-center text-[10px] !leading-normal font-poppins whitespace-nowrap text-white font-medium uppercase bg-dark py-[15px] px-[21px] rounded-[10px] md:py-3 md:rounded-[9px] xl:text-base xl:px-8 xl:py-[18px] hover:bg-dark_btn_hover"
            }
            text={"To the main page"}
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
