import Hamburger from "./Hamburger";

const Navbar = (props) => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full py-5 px-5 flex justify-end items-center lg:hidden">
      <Hamburger />
    </nav>
  );
};

export default Navbar;
