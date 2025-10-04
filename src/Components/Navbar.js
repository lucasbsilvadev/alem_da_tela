/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import Logo from "../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import GroupWorkIcon from "@mui/icons-material/GroupWork";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      text: "Início",
      icon: <HomeIcon />,
      section: "home"
    },
    {
      text: "Dados",
      icon: <InfoIcon />,
      section: "about"
    },
    {
      text: "ONGs",
      icon: <GroupWorkIcon />,
      section: "work"
    },
    {
      text: "Atividades",
      icon: <CommentRoundedIcon />,
      section: "testimonial"
    },
    {
      text: "Contato",
      icon: <PhoneRoundedIcon />,
      section: "contact"
    },
  ];

  return (
    <nav>
      {/* <div className="nav-logo-container">
        <img src={Logo} alt="Além da Tela" />
      </div> */}
      <div className="navbar-links-container">
        <a href="#home" onClick={() => scrollToSection('home')}>Início</a>
        <a href="#about" onClick={() => scrollToSection('about')}>Dados</a>
        <a href="#work" onClick={() => scrollToSection('work')}>ONGs</a>
        <a href="#testimonial" onClick={() => scrollToSection('testimonial')}>Atividades</a>
        <a href="#contact" onClick={() => scrollToSection('contact')}>Contato</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.section)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;