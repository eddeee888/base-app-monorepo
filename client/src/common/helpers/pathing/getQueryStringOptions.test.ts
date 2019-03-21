import getQueryStringOptions from './getQueryStringOptions';
import { QueryStringKeys } from './types';

describe('getQueryStringOptions()', () => {
  it('should return empty object if empty string is given', () => {
    const result = getQueryStringOptions('');
    expect(result).toEqual({});
  });

  Object.keys(QueryStringKeys).forEach(key => {
    it(`should return correct value if ${key} exists`, () => {
      const result = getQueryStringOptions(`?${key}=abc`);
      expect(result).toEqual({
        [key]: 'abc'
      });
    });
  });

  it('should ignore other keys and return only valid key', () => {
    const result = getQueryStringOptions(
      '?invalid_key_1=abc&redirect=/signup&invalid_key_2=def'
    );
    expect(result).toEqual({
      redirect: '/signup'
    });
  });

  it('should return empty object if non of the keys match', () => {
    const result = getQueryStringOptions('?invalid_key_1=/&invalid_key_2=abc');
    expect(result).toEqual({});
  });
});
