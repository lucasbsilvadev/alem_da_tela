import React from "react";
import DoeLogo from "../Assets/doeLogo.png"; 

const Work = () => {
  const doePrograms = [
    {
      image: DoeLogo,
      title: "DOE | Ficar de Bem",
      text: "A ONG Ficar de Bem tem como objetivo promover a proteção a crianças e adolescentes em situações de vulnerabilidade. Dessa forma, Lutando por uma sociedade mais justa na qual os mais jovens sejam prioridade.",
      features: [
        "Acolhimento de vítimas de violência",
        "Apadrinhamento afetivo (Projeto Fênix)",
        "Prevenção e proteção social",
        "Central de doações"
      ],
      impact: "Mais de 2.000 crianças impactadas em 2023",
      website: "https://doe.ficardebem.org.br/?utm_source=Google_ADG&utm_medium=%7Badgroupid%7D&utm_campaign=%7Bcampaignid%7D&utm_content=%7Bkeyword%7D&gad_source=1&gad_campaignid=18208111590&gbraid=0AAAAADLJ6VWFG7FsYLacY3rvmG-QWvdy5&gclid=CjwKCAjwisnGBhAXEiwA0zEOR-obWiRj8juS29Vzc2ar1RVjoq9LsjEC-tytaKB35nXedNbKgEK4khoCfuMQAvD_BwE"
    }
  ];

  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <h1 className="primary-heading">ONG's</h1>
      </div>
      <div className="work-section-bottom">
        {doePrograms.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            
            <div className="program-features">
              <h4>Principais Ações:</h4>
              <ul>
                {data.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="impact-stats">
              <div className="impact-badge">
                <span className="impact-number">2.000+</span>
                <span className="impact-text">crianças impactadas</span>
              </div>
            </div>
            
            <div className="program-actions">
              <button 
                className="secondary-button" 
                onClick={() => handleRedirect(data.website)}
              >
                Quero conhecer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;