import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Locations from "../src/pages/Locations";
import PageNotFound from "../src/pages/PageNotFound";
import Header from "../src/components/header/Header";
import * as ROUTES from "../src/constans/routePath";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOCATIONS} element={<Locations />} />
        <Route path={ROUTES.PAGENOTFOUND} element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
