import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      
      <div className="about-section-text-container">
        <p className="primary-subheading">Dados da Pesquisa</p>
        <h1 className="primary-heading">
          TIC Kids Online Brasil 2023: Realidade Digital das Crianças
        </h1>
        
        {/* Container de Gráficos */}
        <div className="stats-container">
          
          {/* Gráfico 1: Idade do Primeiro Acesso */}
          <div className="chart-item">
            <h3>Idade do Primeiro Acesso à Internet</h3>
            <div className="chart-bar-container">
              <div className="chart-bar">
                <div className="chart-fill" style={{width: '24%', backgroundColor: '#4CAF50'}}>
                  <span className="chart-label">24%</span>
                </div>
              </div>
              <div className="chart-legend">Até 6 anos (2023)</div>
            </div>
            <div className="chart-bar-container">
              <div className="chart-bar">
                <div className="chart-fill" style={{width: '11%', backgroundColor: '#FF9800'}}>
                  <span className="chart-label">11%</span>
                </div>
              </div>
              <div className="chart-legend">Até 6 anos (2015)</div>
            </div>
            <p className="chart-description">
              Crescimento de 118% no acesso na primeira infância em 8 anos
            </p>
          </div>

          {/* Gráfico 2: Dispositivos de Acesso */}
          <div className="chart-item">
            <h3>Dispositivos de Acesso à Internet</h3>
            <div className="devices-grid">
              <div className="device-item">
                <div className="device-chart">
                  <div className="device-fill" style={{height: '97%'}}></div>
                </div>
                <span className="device-percent">97%</span>
                <span className="device-name">Celular</span>
              </div>
              <div className="device-item">
                <div className="device-chart">
                  <div className="device-fill" style={{height: '70%'}}></div>
                </div>
                <span className="device-percent">70%</span>
                <span className="device-name">TV</span>
              </div>
              <div className="device-item">
                <div className="device-chart">
                  <div className="device-fill" style={{height: '38%'}}></div>
                </div>
                <span className="device-percent">38%</span>
                <span className="device-name">Computador</span>
              </div>
              <div className="device-item">
                <div className="device-chart">
                  <div className="device-fill" style={{height: '20%'}}></div>
                </div>
                <span className="device-percent">20%</span>
                <span className="device-name">Apenas Celular</span>
              </div>
            </div>
          </div>

          {/* Gráfico 3: Plataformas Mais Usadas */}
          <div className="chart-item">
            <h3>Plataformas Mais Utilizadas</h3>
            <div className="platforms-list">
              <div className="platform-item">
                <span className="platform-name">Instagram</span>
                <div className="platform-bar">
                  <div className="platform-fill" style={{width: '36%'}}></div>
                </div>
                <span className="platform-percent">36%</span>
              </div>
              <div className="platform-item">
                <span className="platform-name">YouTube</span>
                <div className="platform-bar">
                  <div className="platform-fill" style={{width: '29%'}}></div>
                </div>
                <span className="platform-percent">29%</span>
              </div>
              <div className="platform-item">
                <span className="platform-name">TikTok</span>
                <div className="platform-bar">
                  <div className="platform-fill" style={{width: '27%'}}></div>
                </div>
                <span className="platform-percent">27%</span>
              </div>
              <div className="platform-item">
                <span className="platform-name">Facebook</span>
                <div className="platform-bar">
                  <div className="platform-fill" style={{width: '2%'}}></div>
                </div>
                <span className="platform-percent">2%</span>
              </div>
            </div>
          </div>

          {/* Gráfico 4: Informações de Saúde */}
          <div className="chart-item">
            <h3>Estatísticas de Saúde</h3>
            <div className="health-stats">
              <div className="health-item">
                <div className="health-progress">
                  <div className="health-fill" style={{width: '58%'}}></div>
                </div>
                <div className="health-info">
                  <span className="health-percent">58%</span>
                  <span className="health-text">Alimentação saudável</span>
                </div>
              </div>
              <div className="health-item">
                <div className="health-progress">
                  <div className="health-fill" style={{width: '45%'}}></div>
                </div>
                <div className="health-info">
                  <span className="health-percent">45%</span>
                  <span className="health-text">Exercícios e esportes</span>
                </div>
              </div>
              <div className="health-item">
                <div className="health-progress">
                  <div className="health-fill" style={{width: '34%'}}></div>
                </div>
                <div className="health-info">
                  <span className="health-percent">34%</span>
                  <span className="health-text">Saúde mental</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Destaques Importantes */}
        <div className="highlights-container">
          <div className="highlight-item">
            <h4>📱 Acesso Universal</h4>
            <p>95% das crianças de 9-17 anos são usuárias de Internet</p>
          </div>
          <div className="highlight-item">
            <h4>📺 TV Conectada</h4>
            <p>70% acessam Internet pela TV (43% em 2019)</p>
          </div>
          <div className="highlight-item">
            <h4>🎯 Publicidade</h4>
            <p>50% pediram produtos após ver propaganda online</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;