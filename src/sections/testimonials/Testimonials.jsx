import React from "react";
import "./testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import quote from "../../assets/quote.svg";
import separator1 from "../../assets/separator1.svg";
const Testimonials = () => {
  const testimonials = [
    {
      id: 0,
      profile: faUser,
      name: "Natasha",
      designation: "Private Employee",
      testimonial:
        "Could you please thank Wakili personally for me, the stars are for his forehead. The perfect way of handling the case based on the situation.",
    },
    {
      id: 1,
      profile: faUser,
      name: "Philip Arnold",
      designation: "Business Sector",
      testimonial:
        "Thank you for the way in which your team handling the matter on a perfect way. They give me a big relief in this case with more confident.",
    },
    {
      id: 2,
      profile: faUser,
      name: "Natasha",
      designation: "Private Employee",
      testimonial:
        "Could you please thank Wakili personally for me, the stars are for his forehead. The perfect way of handling the case based on the situation.",
    },
    {
      id: 3,
      profile: faUser,
      name: "John Bow",
      designation: "Private Engineer",
      testimonial:
        "I frequently check the Best Lawyers list to select an attorney in areas too familiar with at the end they came and lead to achive the justice.",
    },
  ];
  return (
    <div className="testimonials">
      <div className="testimonialsWrapper">
        <div className="testimonialsHeader">
          <h2>Client Opinions & Reviews</h2>
          <img src={separator1} alt="" />
        </div>
        <div className="testimonialsItems">
          {testimonials.map((item) => {
            return (
              <div className="testimonialItem" key={item.id}>
                <div className="testimonialProfile">
                  <FontAwesomeIcon icon={item.profile} />
                  <div className="testimonialProfileText">
                    <h3>{item.name}</h3>
                    <p>{item.designation}</p>
                  </div>
                </div>
                <div className="testimonialTextBox">
                  <p>{item.testimonial}</p>
                  <img src={quote} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
