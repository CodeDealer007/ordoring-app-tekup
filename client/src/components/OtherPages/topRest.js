import React from "react";
import PropTypes from "prop-types";
import { BackButton } from "../utils/BackButton";

const topRest = () => {
    return (
        <div>
            <div class="about-section">
                <h2>Top 5 restaurants</h2>
                <p>the best restrants are evaluated on the quality and freshness of the food, the creativity and originality of the menu, the skill and technique of the chef, the atmosphere and ambiance of the restaurant, the level of service provided by the staff, and the value for money.</p>
                <p>Here are a few types of restaurants that are often highly regarded by diners: </p>

                <li>Fine Dining Restaurants: These are upscale restaurants that offer a formal dining experience.</li>

                <li>Ethnic Restaurants: These restaurants specialize in a particular type of cuisine.</li>

                <li>Farm-to-Table Restaurants: These restaurants source their ingredients from local farms .</li>

                <li>Seafood Restaurants: These restaurants specialize in serving fresh seafood dishes.</li>

                <li>Casual Dining Restaurants: These restaurants offer a relaxed and informal dining experience</li>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src={process.env.PUBLIC_URL + "jeld.jpg"} style={{ width: "100%" }} />
                        <div class="container">
                            <h2><center>Dar El Jeld Restaurant</center></h2>
                            <p class="title">$$$$</p>
                            <p>Middle Eastern</p>
                            <p>Lunch, Dinner, Late Night, Drinks</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <img src={process.env.PUBLIC_URL + "sale.jpg"} style={{ width: "100%" }} />
                        <div class="container">
                            <h2><center>La Salle a Manger</center></h2>
                            <p class="title">$$$$</p>
                            <p>French, Mediterranean, European</p>
                            <p>Lunch, Dinner</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={process.env.PUBLIC_URL + "belhaj.jpg"} style={{ width: "100%" }} />
                        <div class="container">
                            <h2><center>Dar Belhadj</center></h2>
                            <p class="title">$$$$</p>
                            <p>Mediterranean, Tunisian</p>
                            <p>Lunch, Dinner</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="container">
                            <img src={process.env.PUBLIC_URL + "closorie.jpg"} style={{ width: "100%" }} />
                            <h2><center>La Closerie</center></h2>
                            <p class="title">$$$$</p>
                            <p>French, International, Mediterranean, European</p>
                            <p>closorie</p>
                            <p>Lunch, Dinner, Late Night, Drinks</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="container">
                            <img src={process.env.PUBLIC_URL + "astragale.jpg"} style={{ width: "100%" }} />
                            <h2><center>Astragale</center></h2>
                            <p class="title">$$$$</p>
                            <p>French, Mediterranean, European</p>
                            <p>Lunch, Dinner, Drinks</p>
                        </div>
                    </div>L'
                </div>
            </div>
        </div>

    );
};

topRest.propTypes = {
};

export default topRest;
