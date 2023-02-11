import React from "react";
import PropTypes from "prop-types";

const OrderItem = ({ order }) => {
  const { amount, resName, dishData } = order;

  return (
    <div id="order-item" className="card cyan darken-4">
      <div className="card-content white-text">
        <div className="flow-text center">dt {amount}</div>
        <blockquote>
          <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            {resName}
          </p>
        </blockquote>
      </div>
      <div className="card-action">
        <span
          style={{ width: "100%" }}
          className="activator btn center"
          data-target={order._id}
        >
          View Order
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Your Order<i className="material-icons right">close</i>
        </span>
        <ul className="collection">
          {dishData.map(
            data =>
              data.quantity > 0 && (
                <li key={data.dish._id} className="collection-item">
                   <div className="secondary-content"> Food:</div>{data.dish.name}
                  <div className="secondary-content"> Qty:    </div> {data.quantity}
                  <div className="secondary-content"> Client: </div> {data.name}       
                  <div className="secondary-content"> Phone:  </div> {data.phoneNumber} 
                  <div className="secondary-content"> Adress: </div> {data.adress}     
                  <div className="secondary-content"> Status: </div> {data.status}     


                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  order: PropTypes.object.isRequired
};

export default OrderItem;
