import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to={`/recoil`}>Recoil Example</Link>
      <Link to={`/msw`}>Mock Service Worker</Link>
    </nav>
  );
};

export default Header;
