import {
  getPathFromLocation,
  linkgen,
  Paths
} from 'src/common/helpers/pathing';

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
        display: false
      };
      footer = {
        display: false
      };
      break;
    case linkgen(Paths.login):
      header = {
        display: false
      };
      footer = {
        display: false
      };
    default:
      break;
  }

  return {
    header,
    footer
  };
};

export default getLayoutConfig;
