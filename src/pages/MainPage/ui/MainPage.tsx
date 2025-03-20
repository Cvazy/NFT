import { Banner, HeroBanner, NFTContainer } from "widgets";

const MainPage = () => {
  return (
    <div className={"w-full h-full"}>
      <HeroBanner />

      <NFTContainer />

      <Banner />
    </div>
  );
};

export default MainPage;
