import { FunctionComponent } from "react";
import Main from "~/common/shared-ui/Main";
import MainContent from "~/common/shared-ui/MainContent";
import Paper from "~/common/shared-ui/Paper";
import H1 from "~/common/shared-ui/H1";
import Text from "~/common/shared-ui/Text";
import StandardSpace from "~/common/shared-ui/StandardSpace";
import Footer from "~/common/components/Footer";
import { publicEnv } from "~/env";

const Privacy: FunctionComponent = () => {
  return (
    <>
      <Main>
        <MainContent size="md">
          <Paper>
            <H1>Privacy Policy</H1>
            <Text>
              {`Your privacy is important to us. It is ${publicEnv.appName}'s policy to respect your privacy regarding any
            information we may collect from you across our website, ${publicEnv.appName}, and other sites we own and operate.`}
            </Text>
            <StandardSpace />

            <Text>
              {`We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.`}
            </Text>
            <StandardSpace />

            <Text>
              {`We only retain collected information for as long as necessary to provide you with your requested service. What data we store,
            we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure,
            copying, use or modification.`}
            </Text>
            <StandardSpace />

            <Text>{`We don't share any personally identifying information publicly or with third-parties, except when required to by law.`}</Text>
            <StandardSpace />

            <Text>{`Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.`}</Text>
            <StandardSpace />

            <Text>{`You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.`}</Text>
            <StandardSpace />

            <Text>{`Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.`}</Text>
            <StandardSpace />

            <Text>{`This policy is effective as of 25 May 2020.`}</Text>
          </Paper>
        </MainContent>
      </Main>
      <Footer />
    </>
  );
};

export default Privacy;
