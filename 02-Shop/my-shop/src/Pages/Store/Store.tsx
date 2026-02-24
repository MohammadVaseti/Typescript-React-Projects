import Container from "../../Components/Container";
import ProductItem from "../../Components/ProductItem";

const Store = () => {
  return (
    <>
      <Container>
        <h1 className="mt-5 ml-5">Newest Products</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </Container>
    </>
  );
};

export default Store;
