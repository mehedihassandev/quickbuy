import { ROUTES } from "../../navigation/route-constant";

export const menus = [
  {
    title: "Home",
    path: ROUTES.HOME,
  },
  {
    title: "Shop",
    path: "/shop",
    submenu: [
      { title: "All Products", path: "/shop/all-products" },
      { title: "New Collection", path: "/shop/new-collection" },
      { title: "Men", path: "/shop/men" },
      { title: "Woman", path: "/shop/woman" },
      { title: "Kids", path: "/shop/kids" },
      { title: "Accessories", path: "/shop/accessories" },
    ],
  },
  {
    title: "About",
    path: ROUTES.ABOUT,
  },
  {
    title: "Products",
    path: ROUTES.PRODUCTS,
  },
  {
    title: "Contact",
    path: ROUTES.CONTACTS,
  },
];

export const settings = [
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Settings",
    path: "/settings",
  },
  {
    title: "Logout",
    path: "/logout",
  },
];
