import { tv } from "tailwind-variants";

import { navIconItems, navTextItems } from "../../../common/data/Footer";

import LogoMonito from "@/assets/logo_monito.svg";

const footerStyles = tv({
  slots: {
    containerMain:
      "flex flex-col w-full px-32 pt-20 pb-10 bg-secondary-40 rounded-t-[40px]",
    containerTop:
      "flex flex-col gap-y-10 pb-10 mb-10 border-b border-neutral-20",
    containerForm:
      "flex flex-row items-center justify-between gap-x-5 w-full p-8 bg-primary rounded-2xl",
    containerInput:
      "flex flex-row items-center justify-between gap-x-3 w-2/3 p-3 bg-white rounded-xl",
    containerNavBottom: "flex flex-row items-center justify-between w-full",
    containerUl: "flex flex-row items-center",
    titleForm: "w-1/3 text-2xl font-bold text-neutral",
    textBottom: "text-sm font-medium text-neutral-60",
    textNav:
      "text-base font-medium text-neutral-100 hover:text-state-blue transition-all duration-300 cursor-pointer",
    inputForm:
      "w-3/4 px-7 py-3.5 border border-neutral-40 rounded-lg text-sm font-medium text-primary placeholder:text-neutral-40 outline-none",
    buttonForm:
      "w-1/4 px-7 py-3.5 bg-primary hover:bg-state-blue rounded-[10px] text-base font-medium text-neutral hover:text-primary transition-all duration-300 cursor-pointer",
  },
  variants: {
    hover: {
      hover: {
        textBottom:
          "hover:text-state-blue transition-all duration-300 cursor-pointer",
      },
    },
    gap: {
      text: {
        containerUl: "gap-x-16",
      },
      icon: {
        containerUl: "gap-x-10",
      },
      bottom: {
        containerUl: "gap-x-5",
      },
    },
  },
});

const {
  containerMain,
  containerTop,
  containerForm,
  containerInput,
  containerNavBottom,
  containerUl,
  titleForm,
  textBottom,
  textNav,
  inputForm,
  buttonForm,
} = footerStyles();

export default function Footer() {
  return (
    <footer className={containerMain()}>
      <div className={containerTop()}>
        <form className={containerForm()}>
          <h1 className={titleForm()}>
            Register now so you don't miss our programs
          </h1>

          <div className={containerInput()}>
            <input
              className={inputForm()}
              type="email"
              placeholder="Enter your Email"
              required
            />

            <button
              className={buttonForm()}
              aria-label="Subscribe newsletter"
              type="submit"
            >
              Subscribe Now
            </button>
          </div>
        </form>

        <nav className={containerNavBottom()}>
          <ul className={containerUl({ gap: "text" })}>
            {navTextItems.map((item) => (
              <li key={item.id} className={textNav()}>
                {item.name}
              </li>
            ))}
          </ul>

          <ul className={containerUl({ gap: "icon" })}>
            {navIconItems.map(({ id, icon }) => (
              <li key={id} className="cursor-pointer">
                {icon}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={containerNavBottom()}>
        <p className={textBottom()}>&copy; 2022 Monito. All rights reserved.</p>

        <img src={LogoMonito} alt="Monito" />

        <nav>
          <ul className={containerUl({ gap: "bottom" })}>
            <li className={textBottom({ hover: "hover" })}>Terms of Service</li>
            <li className={textBottom({ hover: "hover" })}>Privacy Policy</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
