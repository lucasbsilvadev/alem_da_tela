import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/kids.jpg"; // Podemos trocar por uma imagem de crianças aprendendo
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Além da Tela: Educação que Transforma
          </h1>
          <p className="primary-text">
            Conectando crianças a oportunidades educacionais e atividades 
            que desenvolvem habilidades cognitivas e motoras de forma divertida e interativa.
          </p>
          {/* <button className="secondary-button">
            Explorar Conteúdo <FiArrowRight /> 
          </button> */}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Crianças aprendendo" />
        </div>
      </div>
    </div>
  );
};

export default Home;