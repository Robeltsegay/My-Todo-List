import React from "react";
import { Link } from "react-router-dom";

import routes from "../routes";
export default function About() {
  return (
    <div className="containerr">
      <h2>this about page</h2>
      <Link to={routes.HOME}>
        <h2>go to home page</h2>
      </Link>
    </div>
  );
}
