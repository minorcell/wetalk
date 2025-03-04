import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Setting from "../pages/Setting";

const RouterConfig: React.FC = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="setting" element={<Setting />} />
  </Routes>
);

export default RouterConfig;
