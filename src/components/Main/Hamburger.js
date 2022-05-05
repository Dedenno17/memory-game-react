const Hamburger = (props) => {
  return (
    <div className="w-8 h-7">
      <div className="w-full h-full flex flex-col justify-between">
        <span className="block w-full h-[5px] bg-primaryGreen"></span>
        <span className="block w-full h-[5px] bg-primaryGreen"></span>
        <span className="block w-full h-[5px] bg-primaryGreen"></span>
      </div>
    </div>
  );
};

export default Hamburger;
