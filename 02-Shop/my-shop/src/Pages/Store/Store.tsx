import { Link } from "react-router-dom";
import Container from "../../Components/Container";
import ProductItem from "../../Components/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

const Store = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <>
      <Container>
        <h1 className="mt-5 ml-5 bg-slate-300 w-40 rounded flex justify-center align-middle">
          Newest Products
        </h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {product.map((item) => {
            return (
              <Link key={item.id} to={`/product/${1}`}>
                <ProductItem />
              </Link>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Store;
