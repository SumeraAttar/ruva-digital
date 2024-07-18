import React, { useEffect, useRef } from "react";
import "../Components/Arrow2.css";

const Arrow2 = () => {
  const pathRef = useRef(null);
  const dashRef = useRef(null);

  useEffect(() => {
    const pathLength = pathRef.current.getTotalLength();
    dashRef.current.style.strokeDashoffset = pathLength;
  }, []);

  return (
    <div className="arrow-containerTwo">
      <svg
        width="800px"
        height="320px"
        viewBox="0 0 150 850"
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
            d="M0,620
               C0,620 177,620 195,336
               C214,130 350,1005 0,-320"
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
            d="M0,620
               C0,620 177,620 195,336
               C214,130 350,1005 0,-320"
            ref={dashRef}
            style={{
              strokeDasharray: "17, 15",
              animation: "dash 3s linear forwards",
              animationIterationCount: "1",
              animationDelay: "1s",
            }}
          />
          <polygon
            className="arrow-head"
            points="0,0 30,7 0,25"
            style={{
              transform: "translateX(13px)",
              transform: "translateY(-11px)",
              offsetPath:
                "path('M0,620 C0,620 177,620 195,336 C214,130 350,1005 0,-320')",
            }}
            fill="black"
          />
        </g>
      </svg>
    </div>
  );
};

export default Arrow2;
