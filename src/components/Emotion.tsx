import React from "react";
import { css } from "@emotion/react";

const Emotion = () => {
  return (
    <div>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
        `}
      >
        TailWind Test
      </div>
    </div>
  );
};

export default Emotion;
