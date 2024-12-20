import { useLoaderData, useParams } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";


const GadgetDetails = () => {
    const{id}=useParams();
    const data=useLoaderData();
    const gadget = data.find((gadget) => gadget.product_id == id);
    const {
      product_id,
      product_title,
      product_image,
      category,
      price,
      description,
      specification,
      availability,
      rating,
    } = gadget;
    
    return (
      <div className="relative">
        <div className="bg-[#9538E2] h-96 text-center ">
          <h1 className="pb-5 pt-4 text-2xl text-white font-bold">
            Product Details
          </h1>
          <p className="pb-24 text-white ">
            Explore the latest gadgets that will take your experience to <br />{" "}
            the next level. From smart devices to the coolest accessories, we
            have it all!
          </p>
        </div>
        <div className="flex flex-col md:flex-row absolute top-40 left-[10%] border-2 border-black   gap-5 mx-auto w-[80%] p-5 rounded-3xl bg-base-100">
          <div className="flex-1  ">
            <img
              className="w-full border-2 rounded-2xl  "
              src={product_image}
              alt=""
            />
          </div>
          <div className="flex-1 space-y-2 lg:space-y-7">
            <h1 className="font-bold text-2xl">{product_title}</h1>
            <p className="font-bold">Price: {price}$</p>
            <p>
              <span
                className={`inline-block px-4 text-white font-bold rounded-full ${
                  availability ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {availability ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p className="font-medium">{description}</p>
            <div>
              <p className="font-medium">Specification:</p>
              <ul className="list-decimal pl-5">
                {specification.map((spec, index) => (
                  <li key={index} className="font-normal">
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <p>
              <p>Rating:</p>
              <p className="font-bold flex mt-4">
                <div className="rating ">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask bg-orange-400  mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask bg-orange-400 mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask bg-orange-400 mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask bg-orange-400 mask-star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask bg-orange-400 mask-star"
                  />
                </div>
                <p>{rating}</p>
              </p>
            </p>
            <div className="space-x-4">
              <button className="btn rounded-2xl text-white bg-[#9538E2]">
                Add to the card <FaShoppingCart />{" "}
              </button>
              <button className="btn">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
        <div className="  h-[550px]"></div>
      </div>
    );
};

export default GadgetDetails;