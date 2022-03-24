import React from "react";
import { Link } from "react-router-dom";
import rotes from "../rotes";
export default function Upload() {
  return (
    <div>
      <h2>this Upload page</h2>
      <Link to={rotes.HOME}>
        <h2>go to home page</h2>
      </Link>
    </div>
  );
}
