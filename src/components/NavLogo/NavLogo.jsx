import "./NavLogo.css";
import imgComputer from "../../../public/assets/logo_fondo_transparente_lineas_negras_250x250.png";
import imgTablet from "../../../public/assets/logo_fondo_transparente_lineas_negras_100x100.png";
import imgMobile from "../../../public/assets/logo_fondo_transparente_lineas_negras_60x60.png";

const NavLogo = () => {
  return (
    <>
      <img src={imgComputer} alt="Logo crystal" className="logo" />
    </>
  );
};

export default NavLogo;
