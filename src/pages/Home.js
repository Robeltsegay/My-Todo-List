import React from "react";
import { Link } from "react-router-dom";
import rotes from "../rotes";

export default function Home() {
  return (
    <div>
      <h2>this Home page</h2>
      <Link to={rotes.UPLOAD}>
        <h2>go to Upload page</h2>
      </Link>
    </div>
  );
}
