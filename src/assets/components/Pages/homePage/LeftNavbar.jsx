

const LeftNavbar = () => {
    
    
    return (
      <div className="flex bg-base-100 rounded-2xl mx-2 py-5 flex-col gap-5">
        <button className="btn mx-5 rounded-full text-xl">All Product</button>
        <button className="btn mx-5 rounded-full text-xl">Laptop</button>
        <button className="btn mx-5 rounded-full text-xl">Phone</button>
        <button className="btn mx-5 rounded-full text-xl">Accessories</button>
        <button className="btn mx-5 rounded-full text-xl">smart watches</button>
        <button className="btn mx-5 rounded-full text-xl">
          chargers
        </button>
      </div>
    );
};

export default LeftNavbar;