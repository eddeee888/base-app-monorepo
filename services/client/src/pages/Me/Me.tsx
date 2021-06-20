import { FunctionComponent } from "react";
import { useViewer } from "~/common/components/ViewerProvider";
import { generateUrlMe, RedirectLogin } from "~/routes";
import Main from "~/common/shared-ui/Main";
import MainContent from "~/common/shared-ui/MainContent";
import Paper from "~/common/shared-ui/Paper";

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
