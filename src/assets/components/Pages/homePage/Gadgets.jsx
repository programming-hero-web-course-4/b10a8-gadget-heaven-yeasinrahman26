import { useEffect, useState } from "react";
import GadgetCard from "./GadgetCard";


const Gadgets = () => {
  const [data,SetData]=useState([])
  useEffect(()=>{
     fetch("./gadgetData.json")
       .then((res) => res.json())
       .then((data) => SetData(data));
  },[])
  // <ul key={cat.id}>
  //   <img src={cat.product_image} alt="" />
  // </ul>

  return (
    <div className="grid p-5 grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      
      {
        data.map((data,idx)=><GadgetCard key={idx} data={data}></GadgetCard> )
      }
    
    </div>
  );
  
};

export default Gadgets;