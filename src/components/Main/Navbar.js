import Hamburger from "./Hamburger";

const Navbar = (props) => {
  return (
    <nav className="w-full py-5 px-5 flex justify-end items-center">
      <Hamburger />
    </nav>
  );
};

export default Navbar;
