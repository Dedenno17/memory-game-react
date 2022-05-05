const Hamburger = (props) => {
  return (
    <div className="relative w-8 h-7 my-5 translate-x-[340px]">
      <div className="w-full h-full flex flex-col justify-between">
        <span className="block w-full h-[5px] bg-primaryGreen"></span>
        <span className="block w-full h-[5px] bg-primaryGreen"></span>
        <span className="block w-full h-[5px] bg-primaryGreen"></span>
      </div>
    </div>
  );
};

export default Hamburger;
