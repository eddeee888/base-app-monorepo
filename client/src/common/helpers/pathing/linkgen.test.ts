import linkgen from './linkgen';
import { Paths } from './types';

describe('linkgen()', () => {
  (Object.keys(Paths) as Array<keyof typeof Paths>).forEach(key => {
    it(`value for '${key}' is '${Paths[key]}'`, () => {
      expect(linkgen(Paths[key])).toBe(Paths[key]);
    });
  });

  it('should generate URL with 0 param', () => {
    expect(linkgen(Paths.createClass, { params: [] })).toBe(
      `${Paths.createClass}`
    );
  });

  it('should generate URL with 1 param', () => {
    expect(linkgen(Paths.createClass, { params: ['abcd'] })).toBe(
      `${Paths.createClass}/abcd`
    );
  });

  it('should generate URL with multiple params', () => {
    expect(linkgen(Paths.createClass, { params: ['abcd', 'xyz'] })).toBe(
      `${Paths.createClass}/abcd/xyz`
    );
  });

  it(`should generate URL with 1 query correctly`, () => {
    expect(linkgen(Paths.login, { query: { redirect: Paths.signup } })).toBe(
      `${Paths.login}?redirect=${Paths.signup}`
    );
  });
});
