import React from "react";

const ReactAnimate = ({ className, style, ...props }) => {
  return (
    <div style={style} className={className}>
      {props.children}
    </div>
  );
};

export default ReactAnimate;
