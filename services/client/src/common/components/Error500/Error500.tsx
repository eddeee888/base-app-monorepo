import { FunctionComponent, ReactNode } from "react";
import PageError500 from "~/shared/page-messages/PageError500";
import imageSrc from "~/assets/images/500.png";
import Text from "~/shared/ui/Text";
import Anchor from "~/shared/ui/Anchor";
import { generateUrlHome } from "~/routes";

const Error500: FunctionComponent<{ link?: ReactNode }> = ({ link }) => (
  <PageError500
    imageSrc={imageSrc}
    link={
      link ?? (
        <Text align="center">
          {/* Force server-side routing here in the off-chance of homepage can be reached via client-side routing
            In that case, ErrorBoundary's caught error would still be there and we would still see the error page
            Even though the URL is home
          */}
          <Anchor href={generateUrlHome()}>Click here to go back to the homepage</Anchor>
        </Text>
      )
    }
  />
);

export default Error500;
