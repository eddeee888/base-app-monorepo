import { FunctionComponent } from "react";
import { useViewer } from "@/common";
import { generateUrlMe, RedirectLogin } from "@/routes";
import { Main, MainContent, Paper } from "@/shared/ui";

const Me: FunctionComponent = () => {
  const { viewer } = useViewer();

  if (!viewer) {
    const redirectTo = generateUrlMe({});
    return <RedirectLogin urlParams={{ query: { redirect: redirectTo } }} />;
  }

  return (
    <Main>
      <MainContent size="md">
        <Paper>Welcome, {viewer.displayName}</Paper>
      </MainContent>
    </Main>
  );
};

export default Me;
