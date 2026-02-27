import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import Layout from "./Components/layout";
import Product from "./Pages/Product/Product";
import Card from "./Pages/Card/Card";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/card" element={<Card />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
