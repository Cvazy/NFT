import { TextBlock } from "./TextBlock";
import { ImagesBlock } from "./ImagesBlock";

export const HeroBanner = () => {
  return (
    <div className={"w-full"}>
      <div className={"flex justify-center px-6 w-full"}>
        <div className={"max-w-limitation w-full"}>
          <div
            className={
              "pt-[72px] pb-[119px] md:pt-10 md:pb-[103px] xl:pt-20 xl:pb-[154px] min-[1920px]:pt-[120px] min-[1920px]:pb-[210px]"
            }
          >
            <div
              className={
                "flex flex-col justify-between items-start gap-[105px] w-full md:flex-row md:gap-12"
              }
            >
              <TextBlock />

              <ImagesBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
