import { tv } from "tailwind-variants";
import { ChevronRight } from "lucide-react";

import Button from "../../Common/Button";

import { sellerData } from "../../../common/data/Sellers";

const sellersStyles = tv({
  slots: {
    containerMain: "flex flex-col w-full px-32 py-10",
    containerHeaderUl: "flex flex-row justify-between w-full",
    title: "text-base font-medium text-black",
    highlightText: "text-2xl font-bold text-primary",
  },
  variants: {
    type: {
      header: {
        containerHeaderUl: "items-end mb-9",
      },
      ul: {
        containerHeaderUl: "items-center gap-x-5",
      },
    },
  },
});

const { containerMain, containerHeaderUl, title, highlightText } =
  sellersStyles();

export default function Sellers() {
  return (
    <section className={containerMain()}>
      <header className={containerHeaderUl({ type: "header" })}>
        <h2 className={title()}>
          Proud to be part of{" "}
          <span className={highlightText()}>Pet Sellers</span>
        </h2>

        <Button
          flex="yes"
          padding="xs"
          gap="xs"
          border="primary"
          text="smPrimaryMedium"
          label="View more content"
        >
          View all our sellers
          <ChevronRight size={16} />
        </Button>
      </header>

      <ul className={containerHeaderUl({ type: "ul" })}>
        {sellerData.map((item) => (
          <li key={item.id}>
            <img src={item.logo} alt={item.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
