import linkgen from './linkgen';
import { Paths } from './types';

describe('linkgen()', () => {
  (Object.keys(Paths) as Array<keyof typeof Paths>).forEach(key => {
    it(`value for '${key}' is '${Paths[key]}'`, () => {
      expect(linkgen(Paths[key])).toBe(Paths[key]);
    });
  });

  it(`should generate URL with 1 query correctly`, () => {
    expect(linkgen(Paths.login, { query: { redirect: Paths.signup } })).toBe(
      `${Paths.login}?redirect=${Paths.signup}`
    );
  });
});
