import Gadgets from "./Gadgets";
import LeftNavbar from "./LeftNavbar";


const GadgetSection = () => {
    return (
      <main className=" md:grid  my-10 gap-3 grid-cols-10">
        <aside className=" mb-5 md:col-span-2 md:mb-0  ">
            <LeftNavbar></LeftNavbar>
        </aside>
        <section className=" md:col-span-8  ">
          <Gadgets></Gadgets>
        </section>
      </main>
    );
};

export default GadgetSection;