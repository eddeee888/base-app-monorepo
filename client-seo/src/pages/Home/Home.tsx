import React from "react";
import withApollo from "src/common/apollo/withApollo";
import Main from "src/common/shared-ui/Main";
import MainBanner from "src/pages/Home/MainBanner";
import AppHeader from "src/common/components/AppHeader";
import Footer from "src/common/components/Footer";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <AppHeader />
      <Main fullWidth>
        <MainBanner />
      </Main>
      <Footer />
    </>
  );
};

export default withApollo(Home);
