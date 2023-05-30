import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebarcontainer">
        <div className="Sidebar-top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">TO-DO</span>
          </Link>

          <hr />
        </div>
        <div className="Sidebar-centre">
          <ul>
            <p className="title">Tasks</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
               
                <span>All</span>
              </li>
            </Link>
            <Link to="/teachers/add" style={{ textDecoration: "none" }}>
              <li>
               
                <span>Active </span>
              </li>
            </Link>
            <Link to="/teachers/edit/:id" style={{ textDecoration: "none" }}>
              <li>
               

                <span>Completed</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
