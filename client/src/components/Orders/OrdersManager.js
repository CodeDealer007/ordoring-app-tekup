import React, { useEffect, useContext, useState } from "react";
import OrderItem from "./OrderItem";
import Spinner from "../layout/Spinner";

import axios from "axios";
import resContext from "../../context/restaurant/resContext";

const OrdersManager = () => {

  const {restaurants} = useContext(resContext)
  const [orders, setOrders] = useState([]);
  console.log("restaurants",restaurants);
  const getAllOrders = async () => {
    try {
      const res = await axios.get("/api/order")
      const restaurantsNames = restaurants.map(rest => rest.name)
      const newOrders = res.data.data.orders.filter(order => restaurantsNames.includes(order.resName))
      setOrders(newOrders)
    } catch (err) {
      console.log(err.response.data.msg);

    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  if (orders !== null && orders.length === 0) {
    return <h4>Please place order/(s)</h4>;
  } else {
    return (
      <div className="section-grid-2" style={OrderStyle}>
        {orders &&
          orders.length > 0 &&
          orders.map(order => <OrderItem key={order._id} order={order} />)}
      </div>
    );
  }
};

const OrderStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem"
};

export default OrdersManager;
