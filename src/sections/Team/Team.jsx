import React from "react";
import "./team.css";
import separator1 from "../../assets/separator1.svg";
import dummyProfile from "../../assets/office.jpg";
import TeamCard from "../../components/Cards/TeamCard/TeamCard";
const Team = () => {
  const team = [
    {
      id: 0,
      image: "",
      name: "Onesmus Langat",
      designation: "Advocate, Commissioner of Oaths",
    },
    {
      id: 1,
      image: "",
      name: "Modesta",
      designation: "Secretary",
    },
    {
      id: 2,
      image: "",
      name: "Edwin Langat",
      designation: "Office Clerk",
    },
  ];
  return (
    <div className="team">
      <div className="teamWrapper">
        <div className="teamHeader">
          <h3>
            Our Experienced Team Is Ready <br />
            To answer any questions
          </h3>
          <img src={separator1} alt="" />
        </div>
        <div className="teamList">
          {team.map((item) => {
            return (
              <div className="teamItem" key={item.id}>
                {item.image === "" ? (
                  <img src={dummyProfile} alt="" />
                ) : (
                  <img src={item.image} alt="" />
                )}

                <TeamCard name={item.name} designation={item.designation} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
