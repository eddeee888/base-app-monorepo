import { getPathFromLocation, linkgen, Paths } from 'common/helpers/pathing';

interface LayoutConfig {
  header: { display: boolean };
  footer: { display: boolean };
}

type GetLayoutConfigFn = (pathname: string) => LayoutConfig;

const getLayoutConfig: GetLayoutConfigFn = pathname => {
  const path = getPathFromLocation(pathname);

  let header = { display: true };
  let footer = { display: true };

  switch (path) {
    case linkgen(Paths.signup):
      header = {
        display: true
      };
      footer = {
        display: true
      };
      break;
    case linkgen(Paths.login):
      header = {
        display: true
      };
      footer = {
        display: true
      };
      break;
    default:
      break;
  }

  return {
    header,
    footer
  };
};

export default getLayoutConfig;
