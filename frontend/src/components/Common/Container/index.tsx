import { ReactNode } from "react";
import Header from "../Header";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <main className="min-w-full min-h-full px-32">
      <Header />

      {children}
    </main>
  );
}
