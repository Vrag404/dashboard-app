import { useState } from "react";

import * as Styles from "./styles/navbar.styled";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <Styles.NavbarContainer extendNavbar={extendNavbar}>

      <Styles.NavbarInnerContainer>

        <Styles.LeftContainer>
          <Styles.NavbarLinkContainer>

            <Styles.NavbarLink to="/"> Home </Styles.NavbarLink>

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