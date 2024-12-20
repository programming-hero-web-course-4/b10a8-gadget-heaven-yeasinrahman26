import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCart } from "../../../utility/addToDb";
import Cart from "./homePage/Cart";

const Dashboard = () => {
  const [cart, setCart] = useState([]);

  const gadgets = useLoaderData();

  useEffect(() => {
    const storedCart = getStoredCart();
    // const storedCartInt = storedCart.map((id) => parseInt(id));
    const readCartList = gadgets.filter((gadget) =>
      storedCart.includes(gadget.product_id)
    );
    setCart(readCartList);
    console.log(storedCart,gadgets);
  }, []);
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
        <Tabs className={''}>
          <TabList className={"bg-[#9538E2] mx-[25%] lg:mx-[45%] "}>
            <Tab>Cart</Tab>
            <Tab>WishList</Tab>
          </TabList>

          <TabPanel className={"bg-white "}>
            <h2 className="text-2xl font-semibold">Cart {cart.length}</h2>
            <div className="w-[70%] mx-auto space-y-5">
              {cart.map((cart, idx) => (
                <Cart key={idx} cart={cart}></Cart>
              ))}
            </div>
          </TabPanel>

          <TabPanel className={"bg-white"}>
            <h2 className="text-2xl font-semibold">WishList</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
