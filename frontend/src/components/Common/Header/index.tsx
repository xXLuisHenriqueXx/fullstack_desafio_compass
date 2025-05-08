import { NavLink } from "react-router";
import { tv } from "tailwind-variants";
import { ChevronDown, Search, Star } from "lucide-react";

import Button from "../Button";
import LogoMonito from "@/assets/logo_monito.svg";

interface NavDataProps {
  id: number;
  name: string;
  url: string;
}

const card = tv({
  slots: {
    containerMain:
      "fixed flex flex-row justify-between items-center gap-x-9 w-full px-32 py-7 z-99",
    containerNavUl: "flex flex-row items-center gap-x-12",
    containerSearch: "flex flex-row items-center gap-x-3.5 text-neutral-60",
    containerCurrency: "flex flex-row items-center gap-x-1",
    containerStar:
      "flex justify-center items-center w-4 aspect-square rounded-full bg-state-red",
    labelSearch:
      "flex flex-row items-center gap-x-3 w-72 px-4 py-3 bg-neutral rounded-full",
    textCurrency:
      "flex flex-row items-center text-base font-medium text-primary-80 cursor-pointer",
    textNav:
      "text-base font-bold text-primary hover:text-state-blue transition-all duration-300 cursor-pointer",
    input:
      "text-sm font-medium text-primary placeholder:text-neutral-40 outline-none",
  },
});

const {
  containerMain,
  containerNavUl,
  containerSearch,
  containerCurrency,
  containerStar,
  labelSearch,
  textNav,
  textCurrency,
  input,
} = card();

const navData: NavDataProps[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Category",
    url: "/category/ALL",
  },
  {
    id: 3,
    name: "About",
    url: "/",
  },
  {
    id: 4,
    name: "Contact",
    url: "/",
  },
];

export default function Header() {
  return (
    <header className={containerMain()}>
      <nav className={containerNavUl()}>
        <img src={LogoMonito} alt="Monito" />

        <ul className={containerNavUl()}>
          {navData.map((link) => (
            <NavLink key={link.id} to={link.url} className={textNav()}>
              {link.name}
            </NavLink>
          ))}
        </ul>
      </nav>

      <section className={containerSearch()}>
        <label htmlFor="search-input" className={labelSearch()}>
          <Search size={16} />

          <input
            id="search-input"
            className={input()}
            type="text"
            placeholder="Search something here!"
          />
        </label>

        <Button padding="sm" background="primary" text="baseNeutralBold">
          Join the community
        </Button>

        <article className={containerCurrency()}>
          <div className={containerStar()}>
            <Star color="#FFDA44" size={8} />
          </div>

          <p className={textCurrency()}>
            $ <ChevronDown size={18} />
          </p>
        </article>
      </section>
    </header>
  );
}
