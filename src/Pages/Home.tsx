import { Header, Text } from "compifyui";
import React from "react";
import { Navbar } from "../Components";
import { Row } from "../Components/Grid";
import Link from "../Components/Typography/Links/Link";

const Home = () => {
  return (
    <div>
      <Navbar>
        <Row style={{padding:10}} justifyContent="space-evenly">
          <Header tag="h1">Logo</Header>
          <Row style={{width:"50%"}} justifyContent="space-evenly" alignItems="center">
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
          </Row>
        </Row>
      </Navbar>
    </div>
  );
};

export default Home;
