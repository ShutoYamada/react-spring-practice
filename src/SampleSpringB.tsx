import React from "react";
import { useSpring, animated } from "react-spring";

export default () => {
  const [spring, set] = useSpring(() => ({
    fontSize: "24pt",
    color: "pink",
  }));

  return (
    <animated.div
      style={spring}
      onMouseEnter={(e) => set({ fontSize: "48pt", color: "blue" })}
      onMouseLeave={(e) => set({ fontSize: "24pt", color: "pink" })}
    >
      Sample Spring B.
    </animated.div>
  );
};
