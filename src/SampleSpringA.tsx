import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default () => {
  const [enter, setEnter] = useState(false);
  const spring = useSpring({
    fontSize: enter ? "48pt" : "24pt",
    color: enter ? "red" : "green",
  });

  return (
    <animated.div
      style={spring}
      onMouseEnter={(e) => setEnter(true)}
      onMouseLeave={(e) => setEnter(false)}
    >
      Sample Spring A.
    </animated.div>
  );
};
