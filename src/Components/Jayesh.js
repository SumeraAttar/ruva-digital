import React, { useState } from "react";
import "./Jayesh.css";

// Import images
import image1 from "../images/slideimg1 (1).png";
import image2 from "../images/slideimg1 (2).png";
import image3 from "../images/slideimg1 (3).png";
import image4 from "../images/slideimg1 (4).png";
import image5 from "../images/slideimg1 (5).png";

import detailImage1 from "../images/slideimg1 (1).png";
import detailImage2 from "../images/slideimg1 (2).png";
import detailImage3 from "../images/slideimg1 (3).png";
import detailImage4 from "../images/slideimg1 (4).png";
import detailImage5 from "../images/slideimg1 (5).png";

// Define image and detail image details
const containerContents = [
  { src: image1, detailSrc: detailImage1, title: "Image 1", description: "Description of image 1" },
  { src: image2, detailSrc: detailImage2, title: "Image 2", description: "Description of image 2" },
  { src: image3, detailSrc: detailImage3, title: "Image 3", description: "Description of image 3" },
  { src: image4, detailSrc: detailImage4, title: "Image 4", description: "Description of image 4" },
  { src: image5, detailSrc: detailImage5, title: "Image 5", description: "Description of image 5" },
];

const Jayesh = () => {
  const [enlargedIndex, setEnlargedIndex] = useState(-1);

  const toggleEnlarged = (index) => {
    setEnlargedIndex(index === enlargedIndex ? -1 : index);
  };

  return (
    <div className="main">
      <div className="main-container">
        <div className="jayesh-container">
          {[...containerContents, ...containerContents].map((content, index) => (
            <div
              className={`container ${
                index === enlargedIndex ? "enlarged" : ""
              }`}
              key={index}
              onClick={() => toggleEnlarged(index % containerContents.length)}
            >
              <img
                src={content.src}
                alt={`img${index % containerContents.length + 1}`}
                className="container-image"
              />
            </div>
          ))}
        </div>
      </div>
      {enlargedIndex !== -1 && (
        <div className="overlay" onClick={() => setEnlargedIndex(-1)}>
          <div className="details-card">
            <img
              src={containerContents[enlargedIndex].detailSrc}
              alt={`img${enlargedIndex + 1}`}
              className="overlay-image"
            />
            <h2>{containerContents[enlargedIndex].title}</h2>
            <p>{containerContents[enlargedIndex].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jayesh;
