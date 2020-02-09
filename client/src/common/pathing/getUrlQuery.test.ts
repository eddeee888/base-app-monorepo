import getUrlQuery from './getUrlQuery';
import { UrlQueryKeys } from './types';

describe('getUrlQuery()', () => {
  it('should return empty object if empty string is given', () => {
    const result = getUrlQuery('');
    expect(result).toEqual({});
  });

  Object.keys(UrlQueryKeys).forEach(key => {
    it(`should return correct value if ${key} exists`, () => {
      const result = getUrlQuery(`?${key}=abc`);
      expect(result).toEqual({
        [key]: 'abc'
      });
    });
  });

  it('should ignore other keys and return only valid key', () => {
    const result = getUrlQuery('?invalid_key_1=abc&redirect=/signup&invalid_key_2=def');
    expect(result).toEqual({
      redirect: '/signup'
    });
  });

  it('should return empty object if non of the keys match', () => {
    const result = getUrlQuery('?invalid_key_1=/&invalid_key_2=abc');
    expect(result).toEqual({});
  });
});
