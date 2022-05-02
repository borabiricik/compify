import { Header, Text } from "compifyui";
import React from "react";
import { Navbar } from "../Components";
import { Row } from "../Components/Grid";
import Link from "../Components/Typography/Links/Link";

const Home = () => {
  return (
    <div>
      <Navbar type="default">
        <Row bgColor="primary" justifyContent="space-evenly" className="p-3">
          <Header color="warning" tag="h1">
            LOGO
          </Header>
          <Row w="50"  justifyContent="space-around" alignItems="center">
            <Link color="warning" to="home">
              Home
            </Link>
            <Link color="warning" to="about">
              About
            </Link>
            <Link color="warning" to="contact">
              Contact
            </Link>
          </Row>
        </Row>
      </Navbar>

      <div>
        <Header>Page Content</Header>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          enim impedit harum asperiores vero sed voluptate sequi quas, animi
          provident, quis illo tenetur eius aut perferendis, consequatur minima
          explicabo hic a autem assumenda! Tempore illo, totam consequatur
          consectetur veniam veritatis. Excepturi, facere. Consequatur, facilis
          harum? Dolores accusamus placeat aliquid fugiat!
        </Text>
      </div>
    </div>
  );
};

export default Home;
