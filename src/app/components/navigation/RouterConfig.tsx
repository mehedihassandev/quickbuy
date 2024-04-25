import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { ROUTES } from "./route-constant";

export const RouterConfig = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home/>}/>
            <Route path={ROUTES.ABOUT} element={<About/>}/>
        </Routes>
    );
};

export default RouterConfig;
