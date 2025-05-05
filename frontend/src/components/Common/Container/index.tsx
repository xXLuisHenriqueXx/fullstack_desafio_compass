import { ReactNode } from "react";
import Header from "../Header";

interface Props {
  children: ReactNode;
  page: string;
}

export default function Container({ children, page }: Props) {
  return (
    <main
      className={`flex flex-col min-w-full min-h-full bg-neutral font-gilroy ${
        page === "homepage" ? "gap-y-16" : "gap-y-0"
      }`}
    >
      <Header />

      {children}
    </main>
  );
}
