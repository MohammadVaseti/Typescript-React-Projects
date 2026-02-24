import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="h-14 border-b shadow flex justify-between flex-row-reverse items-center">
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>

        <div>
          <button>Buy</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
