import Button from "../../Components/Button";
import CardItem from "../../Components/CardItem";

const Card = () => {
  return (
    <>
      <div className="">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className="mt-5 bg-gray-200 p-6">
        <p>Total Cost : 200$</p>
        <p>Discount : 200$</p>
        <p>Final : 100$</p>
      </div>

      <Button className="m-2" variant="success">
        Accept Order
      </Button>
    </>
  );
};

export default Card;
