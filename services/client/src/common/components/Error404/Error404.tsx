import { FunctionComponent, ReactNode } from "react";
import PageError404 from "~/common/shared-page-messages/PageError404";
import imageSrc from "~/common/assets/images/404.png";

const Error404: FunctionComponent<{ link?: ReactNode }> = ({ link }) => <PageError404 imageSrc={imageSrc} link={link} />;

export default Error404;
