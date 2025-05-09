import { NavLink } from "react-router";
import { tv } from "tailwind-variants";
import { ChevronDown, Search, Star } from "lucide-react";

import Button from "../Button";

import { navData } from "../../../common/data/Header";

import LogoMonito from "@/assets/logo_monito.svg";

const headerStyles = tv({
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
} = headerStyles();

export default function Header() {
  return (
    <header className={containerMain()}>
      <nav className={containerNavUl()}>
        <img src={LogoMonito} alt="Monito" />

        <ul className={containerNavUl()}>
          {navData.map((link) => (
            <li key={link.id}>
              <NavLink to={link.url} className={textNav()}>
                {link.name}
              </NavLink>
            </li>
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
            aria-label="Search"
          />
        </label>

        <Button
          padding="sm"
          background="primary"
          text="baseNeutralBold"
          label="Join in our community"
        >
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
