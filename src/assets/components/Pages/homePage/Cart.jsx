

const Cart = ({cart}) => {
    const { product_title, product_image,  price, description } = cart;
    return (
      <div className="bg-base-300 rounded-2xl ">
        <div className="flex "> 
          <div className="max-w-52 rounded">
            <img src={product_image} className="p-5 " alt="" />
          </div>
          <div className="p-5 space-y-5">
            <h1 className="text-2xl font-semibold">{product_title}</h1>
            <p className="text-lg font-medium">{description}</p>
            <p className="text-lg font-medium">Price: {price}$</p>

          </div>
        </div>
      </div>
    );
};

export default Cart;