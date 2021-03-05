import React from "react";
import { NavLink } from "react-router-dom";
import OnlineAchievement from "../images/OnlineAchieveMent/NLP.png";
import Tour from "../images/TourTime/IMG_20200907_131820.jpg";
import CampusTime from "../images/CampusTime/IMG_20200928_191732.jpg";
import Publication from "../images/Publication/python crush course.png";
import Eating from "../images/Eatting/IMG_20210211_204943.jpg";
import DIU_Convocation from "../images/DIU_Convocation/5.jpg";
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
                </div>
            </div>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                <img src={Publication} className="card-img-top" alt="Publication" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">Publication</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="" className="btn btn-primary">
                            Show Album
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                <img src={CampusTime} className="card-img-top" alt="Campus Time" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">Campus Time</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="" className="btn btn-primary">
                            Show Album
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                <img src={Eating} className="card-img-top" alt="Eating" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">Eating</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="" className="btn btn-primary">
                            Show Album
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                <img src={DIU_Convocation} className="card-img-top" alt="DIU Convocation" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">DIU Convocation</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="" className="btn btn-primary">
                            Show Album
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                <img src={Tour} className="card-img-top" alt="Tour" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">Tour</h5>
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
