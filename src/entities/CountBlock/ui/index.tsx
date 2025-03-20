import { ICountBlock } from "../model";

export const CountBlock = ({ title, count }: Omit<ICountBlock, "id">) => {
  return (
    <div className={"flex flex-col items-start gap-2 w-full xl:gap-2.5"}>
      <p
        className={
          "text-dark text-left font-semibold font-sans text-2xl !leading-7 lg:text-[26px] lg:!leading-[30px] xl:text-[36px] xl:!leading-[42px] min-[1920px]:text-[42px] min-[1920px]:!leading-[48px]"
        }
      >
        {count}+
      </p>

      <p
        className={
          "text-[#848586] whitespace-nowrap font-inter font-medium text-[8px] leading-[11px] lg:text-[9px] lg:leading-[13px] xl:text-xs xl:!leading-4 min-[1920px]:text-base"
        }
      >
        {title}
      </p>
    </div>
  );
};
