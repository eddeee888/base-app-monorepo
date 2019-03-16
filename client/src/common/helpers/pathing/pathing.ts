export enum Paths {
  home = '/',
  login = '/login',
  signup = '/signup',
  logout = '/logout',
  dashboard = '/dashboard',
  createClass = '/create-a-class'
}

interface QueryOptions {
  redirect?: string;
}

interface LinkgenOptions {
  query?: QueryOptions;
}

type LinkgenFn = (path: Paths, options?: LinkgenOptions) => string;

const linkgen: LinkgenFn = (path, options) => {
  let urlParts = '';

  if (options) {
    if (options.query) {
      urlParts += '?';
      (Object.keys(options.query) as Array<keyof QueryOptions>).forEach(
        queryKey => {
          urlParts += `${queryKey}=${options.query![queryKey]}&`;
        }
      );
      urlParts = urlParts.substring(0, urlParts.length - 1);
    }
  }

  return path + urlParts;
};

const stripUrlSpecialCharacterIfExists: (
  path: string,
  characterToStrip: '?' | '#' | '&'
) => string = (path, characterToStrip) => {
  if (path.indexOf(characterToStrip) > -1) {
    return path.substring(0, path.indexOf(characterToStrip));
  }

  return path;
};

const getPathFromLocation: (location: string) => Paths | null = location => {
  const strippedPath = stripUrlSpecialCharacterIfExists(
    stripUrlSpecialCharacterIfExists(
      stripUrlSpecialCharacterIfExists(location, '&'),
      '?'
    ),
    '#'
  );
  const path = '/' + strippedPath.split('/')[1];

  const resultArray = Object.keys(Paths).filter(key => {
    const typedKey = key as keyof typeof Paths;
    return Paths[typedKey] === path;
  });

  if (resultArray.length > 0) {
    const resultIndex = resultArray[0] as keyof typeof Paths;
    return Paths[resultIndex];
  }
  return null;
};

export { linkgen, getPathFromLocation };
