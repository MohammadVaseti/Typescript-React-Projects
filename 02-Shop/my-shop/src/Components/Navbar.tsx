import { Link } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <>
      <div className="h-14 border-b shadow flex items-center">
        <Container>
          <div className="flex justify-center  m-auto">
            <div>
              <ul className="flex">
                <li className="ml-4">
                  <Link to="/">Home</Link>
                </li>
                <li className="ml-4">
                  <Link to="/store">Store</Link>
                </li>
              </ul>
            </div>
            <div>
              <button className="ml-5">Buy</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
