import getPathFromLocation from './getPathFromLocation';

describe('getPathFromLocation()', () => {
  it('getPathFromLocation should strip ? &', () => {
    const testString = '/signup?param1=100&param2=200';
    const result = getPathFromLocation(testString);

    expect(result).toBe('/signup');
  });

  it('getPathFromLocation should strip #', () => {
    const testString = '/signup#hashThing';
    const result = getPathFromLocation(testString);

    expect(result).toBe('/signup');
  });

  it('getPathFromLocation should ignore second /', () => {
    const testString = '/signup/asdasdasd';
    const result = getPathFromLocation(testString);

    expect(result).toBe('/signup');
  });

  it('getPathFromLocation should ignore 2nd /', () => {
    const testString = '/signup/adasd';
    const result = getPathFromLocation(testString);

    expect(result).toBe('/signup');
  });

  it('getPathFromLocation should work for homepage', () => {
    const testString = '/';
    const result = getPathFromLocation(testString);

    expect(result).toBe('/');
  });

  it('getPathFromLocation should be null if not valid url', () => {
    const testString = '/asdasaasdjkaskjdajk';
    const result = getPathFromLocation(testString);

    expect(result).toBe(null);
  });
});
