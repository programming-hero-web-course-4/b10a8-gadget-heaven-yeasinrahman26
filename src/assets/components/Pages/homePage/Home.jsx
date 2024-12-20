import { Link } from "react-router-dom";
import banner from "../../../img/banner.jpg"
import GadgetSection from "./GadgetSection";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget | Home </title>
      </Helmet>
      <header className="bg-[#9538E2] flex flex-col justify-center items-center">
        {/* header text part start */}
        <div className="space-y-10">
          <h1 className="text-5xl pt-10  text-center font-bold text-white">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-white font-semibold text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div className="text-center pb-20">
            <Link to={'/dashboard'}>
              <button className="btn text-[#9538E2] text-xl rounded-3xl px-10 my-5">
                Shop Now
              </button>
            </Link>
          </div>
          <div className=" relative">
            <div className="absolute -top-32">
              <img
                className="w-[80%]  p-4 rounded-2xl bg-[#fffefe67] border-2 mx-auto "
                src={banner}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      {/* img section */}

      {/* Add some spacing below the header for content */}
      <div className="md:h-[300px]"></div>
      {/* gadget card section  */}
      <section className=" mt-20">
        <h1 className="text-5xl text-center font-bold ">
          Explore Cutting-Edge Gadgets
        </h1>
        <section>
          <GadgetSection></GadgetSection>
        </section>
      </section>
    </div>
  );
};

export default Home;
