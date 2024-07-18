import React from 'react';
import './content.css';

const Content = () => {
  return (
    <section className="content">
      <div className="craft-experience">
        <div className="intro-text">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Adipiscing semper felis eros felis. Arcu integer eu nulla a lacus.</p>
        </div>
        <div className="content-section">
          <div className="images">
            <div className="image-row">
              <div className="image image1"></div>
              <div className="image image2"></div>
            </div>
            <div className="image-row">
              <div className="image image3"></div>
              <div className="image image4"></div>
            </div>
          </div>
          <div className="text-content">
            <h2>We Craft Experience For Business To Help Reach Our Customers</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Varius venenatis at sit ipsum. Nec ultrices ultrices diam nibh viverra pellentesque. Egestas scelerisque morbi consequat tellus.</p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>

      <div className="marketing-innovation">
        <div className="text-content">
          <h2>Business Has Only Two Functions – Marketing And Innovations.</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Varius venenatis at sit ipsum. Nec ultrices ultrices diam nibh viverra pellentesque. Egestas scelerisque morbi consequat tellus.</p>
          <button>LEARN MORE</button>
        </div>
        <div className="images">
          <div className="image image1"></div>
        </div>
      </div>
    </section>
  );
};

export default Content;
