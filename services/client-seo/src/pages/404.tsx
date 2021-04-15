import { FunctionComponent } from "react";
import Error from "./_error";

const Static404: FunctionComponent = () => {
  return <Error statusCode={404} />;
};

export default Static404;
