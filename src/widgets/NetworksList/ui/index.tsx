import { NETWORKS } from "widgets/NetworksList/model";

interface INetworksListProps {
  isFooter?: boolean;
}

export const NetworksList = ({ isFooter = false }: INetworksListProps) => {
  return (
    <div
      className={`flex items-center flex-nowrap ${isFooter ? "gap-2.5 md:gap-5 lg:gap-7" : "gap-10"}`}
    >
      {NETWORKS.map(({ name, link, logo }) => (
        <a href={link} key={name}>
          <img
            width={isFooter ? 17 : 24}
            src={logo}
            alt={name}
            className={"block"}
          />
        </a>
      ))}
    </div>
  );
};
