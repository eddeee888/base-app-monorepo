import { useEffect, FunctionComponent } from "react";
import { useRouter } from "next/router";
import { Main, MainContent, Paper, H1, H2, StandardSpace, Spinner } from "@/shared/ui";
import { useViewer } from "@/common";
import { generateUrlMe } from "@/routes";
import { useMediaQuery } from "@material-ui/core";
import SignupForm from "./SignupForm";
import breakpoints from "@/shared/styles/breakpoints";
import Head from "next/head";
import { publicEnv } from "@/env";

const Signup: FunctionComponent = () => {
  const viewer = useViewer();
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const { query } = useRouter();
  const redirectDestination = query.redirect as string;
  const redirect = (): void => window.location.assign(redirectDestination ? decodeURIComponent(redirectDestination) : generateUrlMe());

  useEffect(() => {
    if (viewer) {
      redirect();
    }
  }, [viewer]);

  if (viewer) {
    return <Spinner size="fullPage" />;
  }

  return (
    <>
      <Head>
        <title>{publicEnv.appName} | Sign up</title>
        <meta name="description" content={`Sign up for ${publicEnv.appName}`} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content={`${publicEnv.appName}`} />
        <meta property="og:description" content={`Sign up for ${publicEnv.appName}`} />
      </Head>
      <Main fullViewPortHeight={!isMobile}>
        <MainContent size="xs">
          <Paper>
            <H1 align="center" variant="h2">
              Sign up
            </H1>
            {redirectDestination && <H2 align="center">to continue</H2>}

            <StandardSpace />

            <SignupForm redirectDestination={redirectDestination} onCompleted={redirect} />
          </Paper>
        </MainContent>
      </Main>
    </>
  );
};

export default Signup;
