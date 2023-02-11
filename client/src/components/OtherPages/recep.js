import React from "react";
import PropTypes from "prop-types";
import { BackButton } from "../utils/BackButton";

const recep = () => {
    return (
        <div>
            <div class="about-section">
                <h2>Delicious Recipes</h2>
                <p>Whether you’re looking for big Sunday lunch menu inspiration, or need to find some healthy ideas for storecupboard ingredients (take a look at the recipes you can make with one tin of tomatoes!). Fear not. We’ll have a carefully written recipe to suit you. They’ve all been tested by the expert food team at delicious. so we know they’ll work first time for you.</p>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <video width="100%" controls >
                            <source src={process.env.PUBLIC_URL + "pasta.mp4"} type="video/mp4" />
                        </video>                        <div class="container">
                            <h2><center>Trova ingredienti Pasta</center></h2>
                            <p class="title">Italian</p>
                            <p>Benvenuti nella cucina di #saporepuro</p>
                            <p>Solitamente la pasta di nocciole è un ingrediente usato per insaporire il gelato o i dolci ma oggi lo useremo per un primo strastosferico!</p>
                        </div>
                    </div>
                    <div class="card">
                        <video width="100%" controls >
                            <source src={process.env.PUBLIC_URL + "bowl.mp4"} type="video/mp4" />
                        </video>
                        <div class="container">
                            <h2><center>Burrito Bowl</center></h2>
                            <p class="title">Mexican</p>
                            <p>This homemade Chipotle Bowl tastes like a Chipotle chicken burrito bowl but is better for you and better tasting too! An easy, healthy meal. #wellplatedrecipes</p>
                            <p>Lunch, Dinner, Late Night, Drinks</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <video width="100%" controls >
                            <source src={process.env.PUBLIC_URL + "pizza.mp4"} type="video/mp4" />
                        </video>
                        <div class="container">
                            <h2><center>Pizza Preparation</center></h2>
                            <p class="title">Italian</p>
                            <p>Vous aviez envie d’une bonne pizza mais vous en avez marre de dépenser une fortune ?</p>
                            <p>Pas de panique, avec notre recette de pizza simple et rapide vous allez vous régaler !</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="container">
                            <video width="100%" controls >
                                <source src={process.env.PUBLIC_URL + "salade.mp4"} type="video/mp4" />
                            </video>                               <h2><center>Préparation d'une Salade</center></h2>
                            <p class="title">Italian</p>
                            <p>Comment faire une salade de chou | Recette de salade de chou maison</p>
                            <p>Seuls quelques ingrédients sont nécessaires pour réaliser cette délicieuse recette de salade de chou. À mon avis, il n'y a rien de mieux qu'une salade de chou maison avec un barbecue fait maison.</p>
                            <p>Recette :
                                1 lb ou ¼ d'un gros chou
                                2 petites carottes
                                ¼ tasse de coriandre, hachée finement
                                1 cuillère à soupe de sucre blanc
                                1 cuillère à café de poivre noir
                                Jus d'un petit citron vert
                                ½ tasse de mayonnaise
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="container">
                            <video width="100%" controls >
                                <source src={process.env.PUBLIC_URL + "riz.mp4"} type="video/mp4" />
                            </video>                              <h2><center>riz thaïlandais </center></h2>
                            <p class="title">thaïlandais</p>
                            <p>Une delicieuse recette de riz sauté ou riz frit avec du poulet, des oeufs et de beaux legumes.</p>
                            <p> L'Asie au coeur de votre assiette!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

recep.propTypes = {
};

export default recep;
