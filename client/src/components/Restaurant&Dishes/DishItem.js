import React, { useState } from "react";
import PropTypes from "prop-types";

const DishItem = ({ index, dish, onEdit }) => {
  const [dishes, setDishes] = useState([
    {
      name: "",
      price: "",
      type: "",
      description: "",
      imageDish: ""
    }
  ]);
  const { name, price, type, description, imageDish } = dish;
  const onChange = e => {
    onEdit(e, index);
  };
  const handlageImage = (event) => {
    let file = event.target.value
    let img = file.split("\\").pop()
    const _dishes = [...dishes];
    console.log(_dishes[index], "_dishes[index]");
    if (img) setDishes([
      ..._dishes.slice(0, index),
      { ..._dishes[index], [event.target.name]: img },
      ..._dishes.slice(index + 1)
    ]);

  };
  return (
    <div className="row">
      <div className="input-field col s12 m3">
        <input
          name="name"
          id="name"
          value={name}
          type="text"
          onChange={onChange}
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-field col s12 m3">
        <input
          name="price"
          id="price"
          type="number"
          value={price}
          onChange={onChange}
        />
        <label htmlFor="price">Price (INR)</label>
      </div>
      <div className="input-field col s12 m3">
        <input
          name="type"
          id="type"
          type="text"
          value={type}
          onChange={onChange}
        />
        <label htmlFor="type">Type</label>
      </div>
      <div className="input-field col s12 m3">
        <textarea
          name="description"
          id="description"
          className="materialize-textarea"
          value={description}
          onChange={onChange}
        ></textarea>
        <label htmlFor="price">Description</label>
      </div>
      <div className="input-field col s12 m3">
        <input
          name="imageDish"
          id="imageDish"
          type="file"
          onChange={onChange}
          />
        <label htmlFor="price">Upload Dish Image</label>
      </div>
    </div>
  );
};

DishItem.propTypes = {
  dish: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default DishItem;
