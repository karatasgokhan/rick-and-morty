import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import PageNotFound from "../src/pages/PageNotFound";
import Header from "../src/components/header/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
