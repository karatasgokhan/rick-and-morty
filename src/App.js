import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Locations from "./pages/location/Locations";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Header from "../src/components/header/Header";
import Residents from "./pages/resident/Residents";
import * as ROUTES from "../src/constans/routePath";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOCATIONS} element={<Locations />} />
        <Route path={ROUTES.RESIDENTS} element={<Residents />} />
        <Route path={ROUTES.PAGENOTFOUND} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
