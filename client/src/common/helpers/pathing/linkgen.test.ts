import linkgen from './linkgen';
import Paths from './Paths';

describe('linkgen()', () => {
  Object.keys(Paths).forEach(key => {
    const typedKey = key as keyof typeof Paths;
    it(`value for '${key}' is '${Paths[typedKey]}'`, () => {
      expect(linkgen(Paths[typedKey])).toBe(Paths[typedKey]);
    });
  });

  it.only(`should generate URL with 1 query correctly`, () => {
    expect(linkgen(Paths.login, { query: { redirect: Paths.signup } })).toBe(
      `${Paths.login}?redirect=${Paths.signup}`
    );
  });
});
