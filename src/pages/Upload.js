import React from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes";

export default function Upload() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>this Upload page</h2>
      <Link to={routes.HOME}>go to home page</Link>
      <button
        onClick={() => {
          navigate(routes.HOME);
        }}
      >
        Goto home
      </button>
    </div>
  );
}
