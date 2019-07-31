import React from "react";
import { Link } from "gatsby";
import { Layout, Header, Main, Container, Footer } from "theme-ui";

const Index = () => {
  return (
    <Layout>
      <Header>
        <Container>
          <h1>Location Mapper</h1>
        </Container>
      </Header>
      <Main>
        <Container>
          <h1>Home</h1>
          <p>View our different <Link to="/locations/all">store locations</Link>!</p>
        </Container>
      </Main>
      <Footer>
        <Container>
          <p>Location Mapper</p>
        </Container>
      </Footer>
    </Layout>
  )

};

export default Index
