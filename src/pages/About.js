import React from "react";
import { Link } from "react-router-dom";
import rotes from "../rotes";
export default function About() {
  return (
    <div>
      <h2>this about page</h2>
      <Link to={rotes.HOME}>
        <h2>go to home page</h2>
      </Link>
    </div>
  );
}
