interface NavDataProps {
  id: number;
  name: string;
  url: string;
}

export const navData: NavDataProps[] = [
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
