import React from "react";
import Card from "../Card"
import CTdata from "../../MadeData/CampusTimeData";

const CampusTimePage = () =>{
  return(
    <>
     <div className="my-5">
       <h1 className="text-center">Campus Time</h1>
     </div>
     <div className="container-fluid mb-5">
       <div className="row">
         <div className="col-10 mx-auto">
           <div className="row gy-4">

             {
               CTdata.map((val, ind) =>{
                 return <Card 
                  key={ind} 
                  imgsrc={ val.imgsrc}
                  title={val.title}
                 />
               })
             }

           </div>
         </div>
       </div>
     </div>
    </>
  );
};
export default CampusTimePage;