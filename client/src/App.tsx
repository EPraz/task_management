import Layout from "./components/template/layout/Layout";
import { RouteList } from "./routes";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          {RouteList.map((route, i) => (
            <Route
              key={`route-${i}`}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
