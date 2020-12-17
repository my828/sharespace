import React from "react";
import Car from "./img/car.jpg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Page not found</h2>
      <div>We're sorry, the page you requested could not be found.</div>

      <img src={Car} width="600px"></img>
      <div>
        <Link to="/sharespace">
          <span>Go back to home page</span>
        </Link>
      </div>
    </div>
  );
}
