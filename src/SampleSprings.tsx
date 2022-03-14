import React, { useState } from "react";
import { useSprings, animated, config } from "react-spring";

export default () => {
  const msg = "Sample Springs.";
  const [springs, set] = useSprings(msg.length, (idx) => ({
    config: config.wobbly,
    fontSize: "24pt",
  }));

  return (
    <div style={{ fontSize: "24pt" }}>
      {springs.map((item, idx) => (
        <animated.span
          style={{ verticalAlign: "top", ...item }}
          onMouseEnter={(e) =>
            set((i) => (i === idx ? { fontSize: "48pt" } : {}))
          }
          onMouseLeave={(e) =>
            set((i) => (i === idx ? { fontSize: "24pt" } : {}))
          }
        >
          {msg[idx]}
        </animated.span>
      ))}
    </div>
  );
};
