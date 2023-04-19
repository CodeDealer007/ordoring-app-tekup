import React, { useEffect, useContext } from "react";
import Restaurants from "./Restaurants";

import ResContext from "../../context/restaurant/resContext";

const AllRestaurants = () => {
  const resContext = useContext(ResContext);

  useEffect(() => {
    resContext.getAllRes();
  }, []);

  return (
    <div>
      <div><h3><center>List Of Restraunts</center></h3></div>
      <Restaurants />;
    </div>
  )

};

export default AllRestaurants;
