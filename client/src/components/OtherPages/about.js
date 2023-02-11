import React from "react";
import PropTypes from "prop-types";
import { BackButton } from "../utils/BackButton";

const about = () => {
    return (
        <div>
            <div class="about-section">
                <h1>About Us</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                    <img src={process.env.PUBLIC_URL+"maher.jpg"} style={{width:"100%"}} />
                        <div class="container">
                        <h2><center>Maher</center></h2>
                            <p class="title">CEO & Founder</p>
                            <p>i'm happy to make people happy</p>
                            <p>Maher@example.com</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                    <img src={process.env.PUBLIC_URL+"mahdi.jpg"} style={{width:"100%"}} />
                            <div class="container">
                                <h2><center>Mahdi</center></h2>
                                <p class="title">designer</p>
                                <p>desiging is very good idea</p>
                                <p>mahdi@example.com</p>
                            </div>
                    </div>
                    <div class="card">
                    <img src={process.env.PUBLIC_URL+"ibtihel.jpg"} style={{width:"100%"}} />
                            <div class="container">
                            <h2><center>Ibtihel</center></h2>
                                <p class="title">devoloper</p>
                                <p>devoloping is very good idea</p>
                                <p>Ibithel@example.com</p>
                            </div>
                    </div>
                    <div class="card">
                            <div class="container">
                            <img src={process.env.PUBLIC_URL+"ameni.jpg"} style={{width:"100%"}} />
                            <h2><center>Ameni</center></h2>
                                <p class="title">designer</p>
                                <p>desiging is very good idea</p>
                                <p>@example.com</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

about.propTypes = {
};

export default about;
