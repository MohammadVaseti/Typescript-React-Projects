const ProductItem = () => {
  return (
    <div className="shadow border m-4 rounded">
      <img className="rounded-t" src="" alt="" />
      <div className="flex justify-between p-4">
        <h3>Title</h3>
        <p>55$</p>
      </div>
      <div className="px-5">
        <p className="line-clamp-">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          nesciunt.
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
