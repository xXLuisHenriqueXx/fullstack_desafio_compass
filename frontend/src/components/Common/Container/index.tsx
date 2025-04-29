import { ReactNode } from "react";
import Header from "../Header";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <main className="flex flex-col gap-y-16 min-w-full min-h-full bg-neutral">
      <Header />

      {children}
    </main>
  );
}
