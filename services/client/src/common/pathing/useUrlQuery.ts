import { useLocation } from "react-router";

const getUrlQuery = (queryString: string): Record<string, string> => {
  if (queryString === "") {
    return {};
  }

  const result: Record<string, string> = {};

  const stripped = queryString.replace("?", "");
  const optionsString = stripped.split("&");
  optionsString.forEach((optionPair) => {
    const [key, value] = optionPair.split("=");
    result[key] = value;
  });

  return result;
};

const useUrlQuery = (): Record<string, string> => {
  const location = useLocation();

  return getUrlQuery(location.search);
};

export default useUrlQuery;
