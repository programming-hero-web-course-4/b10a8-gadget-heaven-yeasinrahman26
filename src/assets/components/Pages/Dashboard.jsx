import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCart, getStoredWish } from "../../../utility/addToDb";
import Cart from "./homePage/Cart";
import Wish from "./homePage/Wish";
import icon2 from '../../img/Group.png'

const Dashboard = () => {
  const [cart, setCart] = useState([]);
  const [wish, SetWish] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const gadgets = useLoaderData();
   const navigate = useNavigate();

  useEffect(() => {
    const storedCart = getStoredCart();
    // const storedCartInt = storedCart.map((id) => parseInt(id));
    const readCartList = gadgets.filter((gadget) =>
      storedCart.includes(gadget.product_id)
    );
    setCart(readCartList);
    console.log(storedCart, gadgets);
  }, []);
  useEffect(() => {
    const storedWish = getStoredWish();
    const wishList = gadgets.filter((gadget) =>
      storedWish.includes(gadget.product_id)
    );
    SetWish(wishList);
  }, []);
   const totalCost = cart.reduce((total, item) => total + item.price, 0);

   const sortCartByPrice = () => {
     const sortedCart = [...cart].sort((a, b) => b.price - a.price);
     setCart(sortedCart);
   };
   const handlePurchase = () => {
     setShowModal(true);
     setCart([]);
   };

   const handleCloseModal = () => {
     setShowModal(false);
     navigate("/");
   };
  return (
    <div>
      <Helmet>
        <title>Gadget | Dashboard </title>
      </Helmet>
      <div className="bg-[#9538E2]">
        <h1 className="text-3xl text-center pt-8 text-white font-bold">
          Dashboard
        </h1>
        <p className="font-medium text-white py-3 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <Tabs className={""}>
          <TabList className={"bg-[#9538E2] mx-[25%] lg:mx-[45%] "}>
            <Tab>Cart</Tab>
            <Tab>WishList</Tab>
          </TabList>

          <TabPanel className={"bg-white "}>
            <div className="flex py-4 justify-between ">
              <h2 className="text-2xl font-semibold">Cart: {cart.length}</h2>
              <div className="flex px-4 md:px-0 flex-col-reverse md:flex-row items-center gap-5">
                <h1 className="font-semibold text-xl">
                  Total cost: <span className="font-bold">{totalCost}$</span>{" "}
                </h1>
                <button
                  onClick={sortCartByPrice}
                  className="btn text-[#9538E2] border-2 border-[#9538E2]"
                >
                  Short by Price
                </button>
                <button
                  onClick={handlePurchase}
                  disabled={cart.length === 0}
                  className={`btn ${
                    cart.length > 0
                      ? "bg-[#9538E2] text-white"
                      : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  }`}
                >
                  Purchase
                </button>
              </div>
            </div>
            <div className="w-[70%] mx-auto space-y-5">
              {cart.map((cart, idx) => (
                <Cart key={idx} cart={cart}></Cart>
              ))}
            </div>
          </TabPanel>

          <TabPanel className={"bg-white"}>
            <h2 className="text-2xl py-4 font-semibold">
              WishList: {wish.length}
            </h2>
            <div className="w-[70%] mx-auto space-y-5">
              {wish.map((wish, idx) => (
                <Wish key={idx} wish={wish}></Wish>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <img className="mx-auto" src={icon2} alt="" />
            <h2 className="text-2xl font-semibold text-center">
              Payment Successfully
            </h2>
            <p className="text-center mt-4">Thanks for purchasing.</p>
            {/* <p className="text-center mt-4">Total: {totalCost}$</p> */}
            <button
              onClick={handleCloseModal}
              className="btn bg-[#9538E2] text-white w-full mt-6"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
