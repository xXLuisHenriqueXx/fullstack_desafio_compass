import ShebaLogo from "@/assets/sheba_logo.svg";
import WhiskasLogo from "@/assets/whiskas_logo.svg";
import BakersLogo from "@/assets/bakers_logo.svg";
import FelixLogo from "@/assets/felix_logo.svg";
import GoodBoyLogo from "@/assets/good_boy_logo.svg";
import ButchersLogo from "@/assets/butchers_logo.svg";
import PedigreeLogo from "@/assets/pedigree_logo.svg";

interface SellerDataProps {
  id: number;
  logo: string;
  alt: string;
}

export const sellerData: SellerDataProps[] = [
  {
    id: 1,
    logo: ShebaLogo,
    alt: "Sheba",
  },
  {
    id: 2,
    logo: WhiskasLogo,
    alt: "Whiskas",
  },
  {
    id: 3,
    logo: BakersLogo,
    alt: "Bakers",
  },
  {
    id: 4,
    logo: FelixLogo,
    alt: "Felix",
  },
  {
    id: 5,
    logo: GoodBoyLogo,
    alt: "GoodBoy",
  },
  {
    id: 6,
    logo: ButchersLogo,
    alt: "Butchers",
  },
  {
    id: 7,
    logo: PedigreeLogo,
    alt: "Pedigree",
  },
];
