import React from "react";
import { Link } from "react-router-dom";

import routes from "../routes";

export default function Home() {
  return (
    <div>
      <h2>this Home page</h2>
      <Link to={routes.UPLOAD}>go to Upload page</Link>
    </div>
  );
}
