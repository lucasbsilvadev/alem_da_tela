import React from "react";

const Testimonial = () => {
  const ageGroups = [
    { 
      age: "0-2 anos", 
      activities: "Estimulação sensorial, cores e sons",
      icon: "👶",
      color: "#FF6B6B",
      details: ["Móbiles coloridos", "Brinquedos sonoros", "Texturas variadas", "Músicas infantis"]
    },
    { 
      age: "3-5 anos", 
      activities: "Quebra-cabeças, jogos de encaixe",
      icon: "🧩",
      color: "#4ECDC4",
      details: ["Quebra-cabeças simples", "Blocos de montar", "Jogos de memória", "Pintura com dedos"]
    },
    { 
      age: "6-8 anos", 
      activities: "Leitura, jogos educativos online",
      icon: "📚",
      color: "#45B7D1",
      details: ["Livros interativos", "Jogos de tabuleiro", "Atividades manuais", "Apps educativos"]
    },
    { 
      age: "9-12 anos", 
      activities: "Projetos criativos, programação básica",
      icon: "💻",
      color: "#96CEB4",
      details: ["Programação Scratch", "Projetos científicos", "Oficinas criativas", "Desafios lógicos"]
    }
  ];

  return (
    <div className="work-section-wrapper" id="testimonial">
      <div className="work-section-top">
        <p className="primary-subheading">Atividades Educativas</p>
        <h1 className="primary-heading">Sugestões por Faixa Etária</h1>
        <p className="primary-text">
          Atividades educativas selecionadas para estimular o desenvolvimento 
          cognitivo e motor em cada fase do crescimento.
        </p>
      </div>
      <div className="age-activities-grid">
        {ageGroups.map((group, index) => (
          <div 
            key={index} 
            className="age-group-card"
            style={{ borderTop: `4px solid ${group.color}` }}
          >
            <div className="age-card-header">
              <span className="age-icon" style={{ color: group.color }}>
                {group.icon}
              </span>
              <h3>{group.age}</h3>
            </div>
            <p className="age-description">{group.activities}</p>
            <div className="activities-list">
              <h4>Atividades Sugeridas:</h4>
              <ul>
                {group.details.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
            <div className="card-footer">
              <span className="development-tag">
                {index <= 1 ? "🧠 Motor e Sensorial" : "💡 Cognitivo e Criativo"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;