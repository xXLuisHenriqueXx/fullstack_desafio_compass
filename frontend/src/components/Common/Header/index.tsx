import LogoMonito from "@/assets/logo_monito.svg";
import { ChevronDown, Search, Star } from "lucide-react";
import { NavLink } from "react-router";

interface NavDataProps {
  id: number;
  name: string;
  url: string;
}

const navData: NavDataProps[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Category",
    url: "category/ALL",
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
    <header className="fixed flex flex-row justify-between items-center gap-x-9 w-full px-32 py-7 z-99">
      <nav className="flex flex-row items-center gap-x-12">
        <img src={LogoMonito} alt="Monito" />

        <ul className="flex flex-row gap-x-12">
          {navData.map((link) => (
            <NavLink
              key={link.id}
              to={link.url}
              className="text-base font-bold text-primary hover:text-state-blue transition-all duration-300 cursor-pointer"
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </nav>

      <section className="flex flex-row items-center gap-x-3.5">
        <label
          htmlFor="search-input"
          className="flex flex-row items-center gap-x-3 w-72 px-4 py-3 bg-neutral rounded-full"
        >
          <Search className="text-neutral-60" size={16} />

          <input
            id="search-input"
            className="text-sm font-medium text-primary placeholder:text-neutral-40 outline-none"
            type="text"
            placeholder="Search something here!"
          />
        </label>

        <button className="px-7 py-3.5 bg-primary hover:bg-state-blue rounded-full text-base font-bold text-neutral hover:text-primary transition-all duration-300 cursor-pointer outline-none">
          Join the community
        </button>

        <article className="flex flex-row items-center gap-x-1">
          <div className=" flex justify-center items-center w-4 aspect-square rounded-full bg-state-red">
            <Star color="#FFDA44" size={8} />
          </div>

          <p className="text-base font-medium text-primary-80">$</p>

          <ChevronDown className="text-primary-80 cursor-pointer" size={18} />
        </article>
      </section>
    </header>
  );
}
