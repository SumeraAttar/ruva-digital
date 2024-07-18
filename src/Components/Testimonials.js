import React, { useEffect } from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rutik Paswan",
    date: "May 23, 2024",
    rating: 5,
    text: "Ruva media helped us to reach online. We were running small fast food shop 6 months ago. But thanks to them we have more footfall in this busy area. It was an excellent experience with Ruva Digital.",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/GammaAnd_SIZE.png/970px-GammaAnd_SIZE.png",
  },
  {
    name: "Sachin Patil",
    date: "May 23, 2024",
    rating: 5,
    text: "Since hiring them we heard positive news about our business. Our hotel was running dry a few months ago. No customers. Right now we are filling in. In 3 months we have seen customers coming to our doors.",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/GammaAnd_SIZE.png/970px-GammaAnd_SIZE.png",
  },
  {
    name: "Rajendra Pawar",
    date: "May 23, 2024",
    rating: 5,
    text: "I recently opened my clinic and I wanted the world to know about it. Then I came across Ruva digital media and opted for branding. And right now, everyone in my area knows about my clinic.",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/GammaAnd_SIZE.png/970px-GammaAnd_SIZE.png",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".r1 span, .r2 span");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("fall");
      }, index * 1000); // Adjust the delay as needed (1000ms = 1s)
    });
  }, []);

  useEffect(() => {
    const makeDraggable = (element) => {
      let isDragging = false;
      let startX, startY, initialX, initialY;

      element.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialX = element.offsetLeft;
        initialY = element.offsetTop;
        element.style.zIndex = 1000;
      });

      document.addEventListener("mousemove", (e) => {
        if (isDragging) {
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          element.style.left = `${initialX + dx}px`;
          element.style.top = `${initialY + dy}px`;
        }
      });

      document.addEventListener("mouseup", () => {
        isDragging = false;
      });
    };

    const handleAnimationEnd = (e) => {
      const footer = document.querySelector("footer");
      if (footer) {
        e.target.classList.add("horizontal-move");
        // Ensuring the element stays at the footer level
        const boundingRect = e.target.getBoundingClientRect();
        const footerTop = footer.getBoundingClientRect().top;
        e.target.style.top = `${footerTop - boundingRect.height}px`;

      }
    };

    const elements = document.querySelectorAll(".r1 span, .r2 span");
    elements.forEach((element) => {
      makeDraggable(element);
      element.addEventListener("animationend", handleAnimationEnd);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("animationend", handleAnimationEnd);
      });
    };
  }, []);

  return (
    <div className="testimonials-container">
      <div className="r2">
        <span>U</span>
        <span>R</span>
        <span>A</span>
        <span>V</span>
        <div className="r1" style={{ position: "relative", padding: "90px", width: "400px" }}>
          <span className="rounded-circle p-3"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="testimonials-content">
        <h2 style={{ color: "black", textAlign: "center", marginBottom: "43px" }} className="header-center">
          What Our Clients Say
        </h2>
        <p className="para-center" style={{ fontFamily: "Kumbh Sans", fontSize: "20px", marginBottom: "59px" }}>
          Ruva digital Media has worked with many clients such as Hotels, Shop owners, Local Clinic, hospitals, Dairy
          business, Food courts, Real estate and with many more local businesses. This is what they have to say about us.
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <div className="testimonial-header">
                <img
                  src={testimonial.avatar}
                  className="avatar"
                  alt={testimonial.name}
                />
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.date}</p>
                </div>
                <div className="google-icon">
                  <img src={require("../images/google.png")} alt="Google" />
                </div>
              </div>
              <p>{testimonial.text}</p>
              <div className="rating">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#000",
        marginRight: 15,
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#000",
        marginLeft: 15,
      }}
      onClick={onClick}
    />
  );
};

export default Testimonials;