import { ReactNode } from "react";

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "../../components/Common/Icons";
import { tv } from "tailwind-variants";

interface NavTextItemsProps {
  id: number;
  name: string;
  url: string;
}

interface NavIconItemsProps {
  id: number;
  icon: ReactNode;
  action: () => void;
}

const icon = tv({
  base: "w-6 h-6 fill-neutral-100 hover:fill-state-blue transition-all duration-300 cursor-pointer",
});

export const navTextItems: NavTextItemsProps[] = [
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
interface NavTextItemsProps {
  id: number;
  name: string;
  url: string;
}

interface NavIconItemsProps {
  id: number;
  icon: ReactNode;
  action: () => void;
}

export const navIconItems: NavIconItemsProps[] = [
  {
    id: 1,
    icon: <Facebook className={icon()} />,
    action: () => {},
  },
  {
    id: 2,
    icon: <Twitter className={icon()} />,
    action: () => {},
  },
  {
    id: 3,
    icon: <Instagram className={icon()} />,
    action: () => {},
  },
  {
    id: 4,
    icon: <Youtube className={icon()} />,
    action: () => {},
  },
];
