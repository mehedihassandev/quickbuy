import { Route } from "react-router-dom";

import { Home } from "../pages/Home";

export const RouterConfig = () => {
  return <Route index element={<Home />} />;
};

export default RouterConfig;
