import { Header, Text } from 'compifyui';
import React from 'react'
import { Navbar } from "../Components";

const Home = () => {
  return (
    <div>
      <Navbar>
        <Header tag="h1" color='danger'>Test Header [h1]</Header>
        <Header tag="h2">Test Header [h2]</Header>
        <Header tag="h3">Test Header [h3]</Header>
        <Header tag="h4">Test Header [h4]</Header>
        <br />
        <br />
        <Text color="primary">Test Text [Primary]</Text>
        <Text color="success">Test Text [Success]</Text>
        <Text color="danger">Test Text [Danger]</Text>
        <Text color="warning">Test Text [Warning]</Text>
        <Text color="info">Test Text [Info]</Text>
      </Navbar>
    </div>
  );
};

export default Home;
