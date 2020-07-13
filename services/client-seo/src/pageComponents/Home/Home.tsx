import React from "react";
import Main from "common/shared-ui/Main";
import MainBanner from "./MainBanner";
import Footer from "common/components/Footer";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Main fullWidth>
        <MainBanner />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
