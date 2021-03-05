import React from "react";
import { NavLink } from "react-router-dom";
import OnlineAchievement from "../images/OnlineAchieveMent/NLP.png";
import Tour from "../images/TourTime/IMG_20200907_131820.jpg";
import CampusTime from "../images/CampusTime/IMG_20200928_191732.jpg";
const PhotoGallery = () =>{
  return(
    <>
     <div className="my-5">
       <h1 className="text-center"> Photo Gallery </h1>
     </div>
     <div className="container-fluid mb-5">
       <div className="row">
         <div className="col-10 mx-auto">
           <div className="row gy-4">

            <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                    <img src={OnlineAchievement} className="card-img-top" alt="Online achievement" />
                        <div className="card-body">
                        <h5 className="card-title font-weight-bold">Online Achievement</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" className="btn btn-primary">
                            Show Album
                        </NavLink>
                        </div>

                        <img src={Tour} className="card-img-top" alt="Tour Time" />
                        <div className="card-body">
                        <h5 className="card-title font-weight-bold">Tour Time</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" className="btn btn-primary">
                            Show Album
                        </NavLink>
                        </div>

                        <img src={CampusTime} className="card-img-top" alt="CAmpus Time" />
                        <div className="card-body">
                        <h5 className="card-title font-weight-bold">Campus Time</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" className="btn btn-primary">
                            Show Album
                        </NavLink>
                        </div>
                    </div>
                </div>

           </div>
         </div>
       </div>
     </div>
    
    </>
  );
};
export default PhotoGallery;
