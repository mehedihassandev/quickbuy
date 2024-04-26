import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Contacts } from "../pages/Contacts";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { ROUTES } from "./route-constant";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path={ROUTES.CONTACTS} element={<Contacts />} />
    </Routes>
  );
};

export default RouterConfig;
