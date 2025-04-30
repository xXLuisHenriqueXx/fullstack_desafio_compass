import Facebook from "@/assets/facebook_icon.svg";
import Twitter from "@/assets/twitter_icon.svg";
import Instagram from "@/assets/instagram_icon.svg";
import Youtube from "@/assets/youtube_icon.svg";

import LogoMonito from "@/assets/logo_monito.svg";

interface NavTextItemsProps {
  id: number;
  name: string;
  action: () => void;
}

interface NavIconItemsProps {
  id: number;
  icon: string;
  action: () => void;
}

const navTextItems: NavTextItemsProps[] = [
  {
    id: 1,
    name: "Home",
    action: () => {},
  },
  {
    id: 2,
    name: "Category",
    action: () => {},
  },
  {
    id: 3,
    name: "About",
    action: () => {},
  },
  {
    id: 4,
    name: "Contact",
    action: () => {},
  },
];

const navIconItems: NavIconItemsProps[] = [
  {
    id: 1,
    icon: Facebook,
    action: () => {},
  },
  {
    id: 2,
    icon: Twitter,
    action: () => {},
  },
  {
    id: 3,
    icon: Instagram,
    action: () => {},
  },
  {
    id: 4,
    icon: Youtube,
    action: () => {},
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col w-full px-32 pt-20 pb-10 bg-secondary-40 rounded-t-[40px]">
      <div className="flex flex-col gap-y-10 pb-10 mb-10 border-b border-neutral-20">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-row items-center justify-between gap-x-5 w-full p-8 bg-primary rounded-2xl"
        >
          <h1 className="w-1/3 text-2xl font-bold text-neutral">
            Register now so you don't miss our programs
          </h1>

          <div className="flex flex-row items-center justify-between gap-x-3 w-2/3 p-3 bg-white rounded-xl">
            <input
              className="w-3/4 px-7 py-3.5 border border-neutral-40 rounded-lg text-sm font-medium text-primary placeholder:text-neutral-40 outline-none"
              type="text"
              placeholder="Enter your Email"
            />

            <button
              className="w-1/4 px-7 py-3.5 bg-primary hover:bg-state-blue rounded-[10px] text-base font-medium text-neutral hover:text-primary transition-all duration-300 cursor-pointer"
              type="submit"
            >
              Subscribe Now
            </button>
          </div>
        </form>

        <nav className="flex flex-row items-center justify-between w-full">
          <ul className="flex flex-row items-center gap-x-16">
            {navTextItems.map((item) => (
              <li
                key={item.id}
                className="text-base font-medium text-neutral-100 hover:text-state-blue transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>

          <ul className="flex flex-row items-center gap-x-10">
            {navIconItems.map((item) => (
              <img
                key={item.id}
                className="cursor-pointer"
                src={item.icon}
                alt="Social Icon"
              />
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-sm font-medium text-neutral-60">
          &copy; 2022 Monito. All rights reserved.
        </p>

        <img src={LogoMonito} alt="Monito" />

        <nav>
          <ul className="flex flex-row items-center gap-x-5">
            <li className="text-sm font-medium text-neutral-60 hover:text-state-blue transition-all duration-300 cursor-pointer">
              Terms of Service
            </li>
            <li className="text-sm font-medium text-neutral-60 hover:text-state-blue transition-all duration-300 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
