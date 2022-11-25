import { Outlet } from "react-router-dom";

import Footer from "../components/footer/footer.component";
import Navbar from "../components/navbar/navbar.component";

import { Container } from "./styles/default.styled";

const Default = () => {
  return (
    <>
      <Navbar />

      <Container>
        <Outlet />
      </Container>

      <Footer />
    </>
  )
}

export default Default;