import { useState } from "react";

import * as Styles from "./styles/navbar.styled";

import { HiOutlineLogout } from "react-icons/hi"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth-token")
    return navigate("/");
  }

  return (
    <Styles.NavbarContainer extendNavbar={extendNavbar}>

      <Styles.NavbarInnerContainer>

        <Styles.LeftContainer>
          <Styles.NavbarLinkContainer>

            <Styles.NavbarLink to="/home">Contacts</Styles.NavbarLink>

            <Styles.OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </Styles.OpenLinksButton>

          </Styles.NavbarLinkContainer>
        </Styles.LeftContainer>

        <Styles.RightContainer>

          <Styles.IconsWrapper>
            <HiOutlineLogout size={20} onClick={handleLogout} /> 
          </Styles.IconsWrapper>

        </Styles.RightContainer>

      </Styles.NavbarInnerContainer>

      {extendNavbar && (
        <Styles.NavbarExtendedContainer>

          <Styles.NavbarLinkExtended to="/home"> 
            Home
          </Styles.NavbarLinkExtended>

        </Styles.NavbarExtendedContainer>
      )}

    </Styles.NavbarContainer>
  );
}

export default Navbar;