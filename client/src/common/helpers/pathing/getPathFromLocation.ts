import { Paths } from './types';

const getPathFromLocation: (location: string) => Paths | null = location => {
  const strippedPath = stripUrlSpecialCharacterIfExists(
    stripUrlSpecialCharacterIfExists(
      stripUrlSpecialCharacterIfExists(location, '&'),
      '?'
    ),
    '#'
  );
  const path = '/' + strippedPath.split('/')[1];

  const resultArray = (Object.keys(Paths) as Array<keyof typeof Paths>).filter(
    key => Paths[key] === path
  );

  if (resultArray.length > 0) {
    return Paths[resultArray[0]];
  }
  return null;
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

export default getPathFromLocation;
