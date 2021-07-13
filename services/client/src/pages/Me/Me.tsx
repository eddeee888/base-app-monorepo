import { FunctionComponent } from "react";
import { useViewer } from "@/common/ViewerProvider";
import { generateUrlMe, RedirectLogin } from "@/routes";
import Main from "@/shared/ui/Main";
import MainContent from "@/shared/ui/MainContent";
import Paper from "@/shared/ui/Paper";

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
