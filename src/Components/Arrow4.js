import React, { useEffect, useRef } from "react";
import "../Components/Arrow4.css";

const Arrow4 = () => {
  const pathRef = useRef(null);
  const dashRef = useRef(null);

  useEffect(() => {
    const pathLength = pathRef.current.getTotalLength();
    dashRef.current.style.strokeDashoffset = pathLength;
  }, []);

  return (
    <div className="arrow-container">
      <svg
        width="1000px"
        height="200px"
        viewBox="0 0 200 350"
        version="1.1"
        style={{ overflow: "visible" }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="20"
            markerHeight="14"
            refX="10"
            refY="7"
            orient="auto"
          >
            <polygon points="0 0, 20 7, 0 14" fill="black" />
          </marker>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            className="path"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M620,0

               C500,0 620,177 336,195
               C130,214 1005,350 -320,0"
            ref={pathRef}
            style={{
              strokeDasharray: "1400",
              strokeDashoffset: "1400",
              animation: "dash 3s linear forwards",
              animationIterationCount: "1",
              animationDelay: "1s",
            }}
          />
          <path
            className="dashed"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M620,0
               C500,0 620,177 336,195
               C130,214 1005,350 -320,0"
            ref={dashRef}
            style={{
              strokeDasharray: "6, 12",
              animation: "dash 3s linear forwards",
              animationIterationCount: "1",
              animationDelay: "1s",
            }}
          />
          <polygon
            className="arrow-head"
            points="0,0 20,7 0,14"
            style={{
              offsetPath:
                "path('M620,0 C620,0 620,177 336,195 C130,214 1005,350 -320,7')",
            }}
            fill="black"
          />
        </g>
      </svg>
    </div>
  );
};

export default Arrow4;
