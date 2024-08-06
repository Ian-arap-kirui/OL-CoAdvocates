import React from "react";
import "./history.css";
import separator from "../../assets/separator.svg";
import office from "../../assets/office.jpg";

const History = () => {
  const history = [
    {
      id: 0,
      title: "2000 – Establishment of the Company!",
      desc: "The origins of lawyers and the first founders of law make their appearance in Ancient Greece and Rome.",
    },
    {
      id: 1,
      title: "2006 – Together we Build",
      desc: "Lawyers in medieval times found themselves struggling to make a living as the legal profession collapsed in the western world.",
    },
    {
      id: 2,
      title: "2008 – Completed 10000 cases",
      desc: "When did lawyers first start practicing in the Republic of Kenya? It’s important to understand that the history of attorneys.",
    },
    {
      id: 3,
      title: "2011 – We are Number One",
      desc: "Eventually, the prejudices against lawyers started to fall away and the legal profession began to gain respect and power.",
    },
  ];

  const caseConversion = [
    {
      id: 0,
      title: "High Court Matters",
      perc: "75%",
    },
    {
      id: 1,
      title: "Property And Construction",
      perc: "80%",
    },
    {
      id: 2,
      title: "Banking And Finance",
      perc: "75%",
    },
  ];

  return (
    <div className="history">
      <div className="historyWrapper">
        <div className="historyLeft">
          <div className="historyHeader">
            <h2>
              We Are Top Lawyers <br />
              And History
            </h2>
            <img src={separator} alt="" />
          </div>
          <div className="historyLeftBody">
            {history.map((item) => (
              <div className="historyYearItem" key={item.id}>
                <h3 className="historyYear">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="historyCenter">
          <img src={office} alt="img" />
        </div>
        <div className="historyRight">
          <div className="historyHeader">
            <h2>
              We Are Specialised <br />
              And Experienced
            </h2>
            <img src={separator} alt="" />
            <p>
              Keep yourself up-to-date on your area of law. Be aware of new
              developments, as laws and rules often change based on the
              situation and new cases are being decided every day.
            </p>
          </div>
          <div className="progressBars">
            {caseConversion.map((item) => (
              <div key={item.id} className="progressBarWrapper">
                <div className="progressBarHeader">
                  <p className="progressTitle">{item.title}</p>
                  <p className="progressPerc">{item.perc}</p>
                </div>
                <div className="progressBar">
                  <div className="progress" style={{ width: item.perc }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="button historyBtn">Free Consultation</div>
        </div>
      </div>
    </div>
  );
};

export default History;
