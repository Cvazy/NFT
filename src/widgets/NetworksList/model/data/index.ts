import { INetwork } from "../types";
import InstagramLogo from "shared/assets/images/networks/Instagram.svg";
import LinkedInLogo from "shared/assets/images/networks/LinkedIn.svg";
import FacebookLogo from "shared/assets/images/networks/Facebook.svg";
import TwitterLogo from "shared/assets/images/networks/Twitter.svg";

export const NETWORKS: INetwork[] = [
  {
    name: "Instagram",
    logo: InstagramLogo,
    link: "https://instagram.com",
  },

  {
    name: "LinkedIn",
    logo: LinkedInLogo,
    link: "https://linkedin.com",
  },

  {
    name: "Facebook",
    logo: FacebookLogo,
    link: "https://facebook.com",
  },

  {
    name: "Twitter",
    logo: TwitterLogo,
    link: "https://twitter.com",
  },
];
