import { FunctionComponent } from "react";
import Main from "@/shared/ui/Main";
import MainBanner from "./MainBanner";
import { Footer } from "@/common";

const Home: FunctionComponent = () => {
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
