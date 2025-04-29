import LogoMonito from "@/assets/logo_monito.svg";

interface NavDataProps {
  id: number;
  name: string;
  action: () => void;
}

const navData: NavDataProps[] = [
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

export default function Header() {
  return (
    <header className="fixed left-0 flex flex-row justify-center items-center gap-x-9 w-full py-7">
      <nav className="flex flex-row items-center gap-x-12">
        <img src={LogoMonito} alt="Monito" />

        <ul className="flex flex-row gap-x-12">
          {navData.map((link) => (
            <li
              key={link.id}
              className="text-base font-bold text-primary hover:text-neutral cursor-pointer transition-all duration-300"
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>

      <section className="flex flex-row items-center gap-x-3.5">
        <label
          htmlFor="search-input"
          className="flex flex-row items-center gap-x-3 w-72 px-4 py-3 bg-neutral rounded-full"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0916 15.9083L14 12.8417C15.2001 11.3454 15.7812 9.44609 15.624 7.53443C15.4667 5.62276 14.583 3.844 13.1546 2.56388C11.7261 1.28377 9.86149 0.599604 7.94408 0.652071C6.02668 0.704538 4.20225 1.48965 2.84593 2.84596C1.48962 4.20228 0.704507 6.02671 0.65204 7.94411C0.599573 9.86152 1.28374 11.7262 2.56385 13.1546C3.84397 14.5831 5.62273 15.4668 7.5344 15.624C9.44606 15.7813 11.3453 15.2001 12.8416 14L15.9083 17.0667C15.9858 17.1448 16.078 17.2068 16.1795 17.2491C16.281 17.2914 16.39 17.3132 16.5 17.3132C16.61 17.3132 16.7189 17.2914 16.8205 17.2491C16.922 17.2068 17.0142 17.1448 17.0916 17.0667C17.2418 16.9113 17.3258 16.7036 17.3258 16.4875C17.3258 16.2714 17.2418 16.0637 17.0916 15.9083ZM8.16665 14C7.01292 14 5.88511 13.6579 4.92582 13.0169C3.96653 12.3759 3.21886 11.4649 2.77735 10.399C2.33584 9.3331 2.22032 8.16021 2.4454 7.02865C2.67048 5.8971 3.22605 4.8577 4.04186 4.04189C4.85766 3.22608 5.89707 2.67051 7.02862 2.44543C8.16018 2.22035 9.33307 2.33587 10.399 2.77738C11.4649 3.21889 12.3759 3.96657 13.0169 4.92585C13.6579 5.88514 14 7.01295 14 8.16668C14 9.71378 13.3854 11.1975 12.2914 12.2915C11.1975 13.3854 9.71374 14 8.16665 14Z"
              fill="#667479"
            />
          </svg>

          <input
            id="search-input"
            className="text-sm font-medium text-primary placeholder:text-neutral-40 outline-none"
            type="text"
            placeholder="Search something here!"
          />
        </label>

        <button className="px-7 py-3.5 bg-primary hover:bg-neutral rounded-full text-base font-bold text-neutral hover:text-primary cursor-pointer transition-all duration-300 outline-none">
          Join the community
        </button>

        <article className="flex flex-row items-center gap-x-1">
          <div className=" flex justify-center items-center w-4 aspect-square rounded-full bg-[#d80027]">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.00002 0.17392L4.8634 2.83108H7.6573L5.39696 4.47326L6.26034 7.13045L4.00002 5.48823L1.73971 7.13045L2.60309 4.47326L0.342773 2.83108H3.13665L4.00002 0.17392Z"
                fill="#FFDA44"
              />
            </svg>
          </div>

          <p className="text-base font-medium text-primary-80">VND</p>

          <svg
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 11L12 14L9 11"
              stroke="#002A48"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </article>
      </section>
    </header>
  );
}
