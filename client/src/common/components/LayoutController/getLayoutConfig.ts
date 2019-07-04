interface LayoutConfig {
  header: { display: boolean };
  footer: { display: boolean };
}

type GetLayoutConfigFn = (pathname: string) => LayoutConfig;

const getLayoutConfig: GetLayoutConfigFn = () => {
  let header = { display: true };
  let footer = { display: true };

  return {
    header,
    footer
  };
};

export default getLayoutConfig;
