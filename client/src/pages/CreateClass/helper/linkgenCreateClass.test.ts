import { Paths } from 'src/common/helpers/pathing';
import linkgenCreateClass from './linkgenCreateClass';

describe('linkgenCreateClass()', () => {
  it(`should generate path when there's form part with class id`, () => {
    const result = linkgenCreateClass('details', '100');
    expect(result).toBe(`${Paths.createClass}/100/details`);
  });

  it(`should generate path when there's form part with NO class id`, () => {
    const result = linkgenCreateClass('details');
    expect(result).toBe(`${Paths.createClass}/details`);
  });

  it(`should return undefined when there's NO form part with class id`, () => {
    const result = linkgenCreateClass(undefined, '100');
    expect(result).toBe(undefined);
  });

  it(`should return undefined when there's NO form part with NO class id`, () => {
    const result = linkgenCreateClass(undefined);
    expect(result).toBe(undefined);
  });
});
