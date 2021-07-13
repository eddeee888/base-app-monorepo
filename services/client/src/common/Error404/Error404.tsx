import { FunctionComponent, ReactNode } from "react";
import PageError404 from "@/shared/page-messages/PageError404";
import imageSrc from "@/assets/images/404.png";

export const Error404: FunctionComponent<{ link?: ReactNode }> = ({ link }) => <PageError404 imageSrc={imageSrc} link={link} />;
