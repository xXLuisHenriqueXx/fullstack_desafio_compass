import { ChevronRight } from "lucide-react";

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

const sellerData: SellerDataProps[] = [
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

export default function Sellers() {
  return (
    <section className="flex flex-col w-full px-32 py-10">
      <header className="flex flex-row items-end justify-between w-full mb-9">
        <h2 className="text-base font-medium text-black">
          Proud to be part of{" "}
          <span className="text-2xl font-bold text-primary">Pet Sellers</span>
        </h2>

        <button className="flex flex-row items-center gap-x-2 px-7 py-3 border-2 border-primary hover:bg-primary text-primary hover:text-neutral font-medium text-sm rounded-full transition-all duration-300">
          <p>View all our sellers</p>
          <ChevronRight size={16} />
        </button>
      </header>

      <ul className="flex flex-row items-center justify-between w-full gap-x-5">
        {sellerData.map((item) => (
          <img key={item.id} src={item.logo} alt={item.alt} />
        ))}
      </ul>
    </section>
  );
}
