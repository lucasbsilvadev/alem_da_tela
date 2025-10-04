import React from "react";

const Contact = () => {
  return (
    <div className="contact-section-wrapper" id="contact">
      <div className="work-section-top">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">Impactos da Tecnologia na Vida das Crianças</h1>
        <p className="primary-text">
          Entenda os benefícios e desafios do uso da internet no desenvolvimento infantil
        </p>
      </div>

      <div className="tech-impact-container">
        {/* Card de Malefícios */}
        <div className="impact-card negative-impact">
          <div className="impact-header">
            <div className="impact-icon">⚠️</div>
            <h2>Desafios e Riscos</h2>
          </div>
          <div className="impact-content">
            <p>
              De acordo com a Organização Mundial da Saúde (OMS, 2019), crianças com menos de 2 não devem ter contato direto com telas; já entre 2 e 4 anos, o recomendado é de no máximo 1 hora por dia. O excesso de tempo conectado traz diversos problemas à saúde, como problemas de sono e sedentarismo. Além disso, a American Academy of Pediatrics (AAP) aponta que o uso excessivo de telas pode causar dificuldades com atenção, ansiedade e alterações no comportamento, afetando o emocional das crianças.
            </p>
            <p>
              A pesquisa TIC Kids Online Brasil 2023 mostra que 88% das crianças e adolescentes entre 9 a 17 anos possuem redes sociais, em sua maioria sem supervisão de responsáveis. Esse contexto aumenta os riscos de adultização precoce, cyberbullying e impactos graves na saúde mental.
            </p>
            <p>
              Contudo, o Estatuto da Criança e do Adolescente (Lei nº 8.069/1990 – ECA) garante o direito de brincar e à formação adequada, direitos esses que são ameaçados devido ao uso inadequado da internet e da perda de experiências.
            </p>
          </div>
        </div>

        {/* Card de Benefícios */}
        <div className="impact-card positive-impact">
          <div className="impact-header">
            <div className="impact-icon">💡</div>
            <h2>Oportunidades e Benefícios</h2>
          </div>
          <div className="impact-content">
            <p>
              Quando usada de forma racional e supervisionada, a internet pode ser uma grande aliada na educação infantil. Existem diversos programas e aplicativos que incentivam a leitura, a criatividade e o raciocínio lógico, contribuindo para uma aprendizagem melhor. Plataformas como Duolingo Kids e Khan Academy Kids oferecem atividades interativas que ajudam a reforçar o desenvolvimento cognitivo de maneiras divertidas.
            </p>
            <p>
              Além disso, há possibilidade de acesso a conteúdos culturais, vídeos educativos e experiências que expandem a visão de mundo dos jovens. Bem como a internet pode ser um espaço de aproximação familiar, fortalecendo vínculos.
            </p>
            <p>
              Também é essencial enfatizar o papel de ONGs, que utilizam projetos sociais para ajudar crianças em situações de vulnerabilidade, promovendo e garantindo o direito de uma infância mais digna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;