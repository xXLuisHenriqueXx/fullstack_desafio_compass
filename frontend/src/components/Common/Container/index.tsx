import { ReactNode } from "react";
import { tv } from "tailwind-variants";

import Header from "../Header";

interface Props {
  children: ReactNode;
  page?: "homepage" | "another";
}

const container = tv({
  base: "flex flex-col min-w-full min-h-full bg-neutral font-gilroy",
  variants: {
    gap: {
      homepage: "gap-y-16",
      another: "gap-y-0",
    },
  },
  defaultVariants: {
    gap: "another",
  },
});

export default function Container({ children, page = "another" }: Props) {
  return (
    <main
      className={container({
        gap: page,
      })}
    >
      <Header />

      {children}
    </main>
  );
}
