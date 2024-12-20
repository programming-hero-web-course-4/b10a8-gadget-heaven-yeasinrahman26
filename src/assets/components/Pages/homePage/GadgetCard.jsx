import { Link } from "react-router-dom";

const GadgetCard = ({data}) => {

    const { product_id, product_title, price, product_image } = data;
    return (
      <div className="card bg-base-300  shadow-xl">
        <figure className="h-60 bg-white p-5">
          <img className="w-full " src={product_image} alt="Shoes" />
        </figure>
        <div className="card-body p-0 pl-5 py-5">
          <h2 className=" font-bold">{product_title}</h2>
          <p className="font-semibold">{price} $</p>
          <div className="card-actions justify-start">
            <Link to={`/gadget/${product_id}`}>
              <button className="btn  btn-outline btn-secondary">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default GadgetCard;