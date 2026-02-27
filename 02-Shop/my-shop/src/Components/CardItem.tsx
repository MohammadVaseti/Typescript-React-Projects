import Button from "./Button";

const CardItem = () => {
  return (
    <>
      <div className="flex mt-4 border-b pb-2">
        <img src="" className="rounded w-28 "></img>
        <div className="mr-4">
          <h3>title</h3>
          <Button className="mr-2" variant="primary">
            +
          </Button>
          <span className="mx-2">2</span>
          <Button className="mr-2" variant="danger">
            +
          </Button>
          <Button variant="warning">Remove</Button>
        </div>
      </div>
    </>
  );
};

export default CardItem;
