import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./app/components/navigation/RouterConfig";
const App: FC = () => {
  return (
    // ToDo: Study BrowserRouter
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
};
export default App;
