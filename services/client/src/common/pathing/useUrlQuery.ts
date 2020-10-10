import { useLocation } from "react-router";

const getUrlQuery = (queryString: string): Record<string, string | undefined> => {
  if (queryString === "") {
    return {};
  }

  const result: Record<string, string | undefined> = {};

  const stripped = queryString.replace("?", "");
  const optionsString = stripped.split("&");
  optionsString.forEach((optionPair) => {
    const [key, value] = optionPair.split("=");
    result[key] = value;
  });

  return result;
};

const useUrlQuery = (): Record<string, string | undefined> => {
  const location = useLocation();

  return getUrlQuery(location.search);
};

export default useUrlQuery;
