import { BrowserRouter } from "react-router-dom";
import { Layout } from "./app/components/Layout";
import { RouterConfig } from "./app/navigation/RouterConfig";

const App = () => {
  return (
    // ToDo: Study BrowserRouter
    <BrowserRouter>
      <Layout>
        <RouterConfig />
      </Layout>
    </BrowserRouter>
  );
};
export default App;
