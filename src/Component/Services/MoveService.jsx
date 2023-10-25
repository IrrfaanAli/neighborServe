import React from "react";
import "./service.css";
import { Link, Outlet } from "react-router-dom";
export const MoveService = () => {
  return (
    <div>
       <div className="card w-64 h-60 bg-base-100 shadow-xl md:w-52 md:h-48 sm:w-40 sm:h-36 lg:w-64 lg:h-60">
        <figure>
          <img src="move.jpg" alt="Plumbing Service" className="s-con2"/>
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title text-black s-con1" style={{textAlign:"center"}}>Moving Service</h2>
          <div className="card-actions justify-end">
          <Link to={"/search_result/Mover"}>
              {" "}
              <button class="btn1">Browse</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveService;
