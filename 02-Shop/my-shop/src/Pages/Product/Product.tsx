import { useParams } from "react-router-dom";
import Container from "../../Components/Container";
import Button from "../../Components/Button";

const Product = () => {
  const params = useParams();
  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12 ">
          <div className=" col-span-10 p-4">
            <h1>Title</h1>
            <div>
              <p>Cost : 25$</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem commodi nostrum voluptas ducimus necessitatibus odio?
                Praesentium, optio necessitatibus aliquid ea cupiditate
                doloribus quam laboriosam libero quibusdam animi placeat
                corporis quas labore? Eaque, nihil enim veniam possimus ipsam
                vero accusantium? Est consectetur necessitatibus ut laborum
                porro repellendus sit dicta numquam beatae?
              </p>
            </div>
          </div>
          <div className=" col-span-2 p-4 bg-sky-200">
            <img className="rounded" src="" alt="" />1
            <div>
              <Button className="mt-2 w-full py-4!" variant="primary">
                Add to Card
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
