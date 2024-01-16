import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const navStyled = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

const Header = () => {
  return (
    <nav css={navStyled}>
      <Link to={`/recoil`}>Recoil</Link>
      <Link to={`/msw`}>MSW</Link>
      <Link to={`/rq`}>React Query</Link>
      <Link to={`/dialog`}>Dialog</Link>
      <Link to={`/test`}>TestPage</Link>
    </nav>
  );
};

export default Header;
