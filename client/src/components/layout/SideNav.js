import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ResContext from "../../context/restaurant/resContext";

const SideNav = () => {
  useEffect(() => {
    window.M.Sidenav.init(document.querySelector(".sidenav"));
  }, []);

  const authContext = useContext(AuthContext);
  const resContext = useContext(ResContext);

  const onLogout = () => {
    authContext.logout();
    resContext.clearRes();
  };

  return (
    <ul id="slide-out" className="sidenav sidenav-close">
      <li style={{backgroundColor:"#a4e89c"}}><center>Welcome to your food APP</center></li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <Link to="/res/all">All Restaurants</Link>
      </li>
      {authContext.user && authContext.user.role !== "user" &&
        (<li>
          <Link to="/OrdersManager">
            My Restaurant Orders</Link>
        </li>)
      }
      <li>
        <Link to="/home">
          My{" "}
          {authContext.user && authContext.user.role === "user"
            ? "Orders"
            : "Restaurants"}
        </Link>
      </li>
      {authContext.user && authContext.user.role === "user" &&
        <li>
          <div className="divider"></div>
        </li>
      }
      {authContext.user && authContext.user.role === "user" &&
        < li >
          <Link to="/recep">
            Recipes ideas
          </Link>
        </li>
      }
      {authContext.user && authContext.user.role === "user" &&
        < li >
          <Link to="/topRest">
            Top Restaurants of the months
          </Link>
        </li>
      }
      {authContext.user && authContext.user.role === "user" &&
        < li >
          <Link to="/about">
            About us
          </Link>
        </li>
      }
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <Link to="/delivery">
          Delivery
        </Link>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a href="/" onClick={onLogout}>
          Logout
        </a>
      </li>
    </ul>
  );
};

export default SideNav;
