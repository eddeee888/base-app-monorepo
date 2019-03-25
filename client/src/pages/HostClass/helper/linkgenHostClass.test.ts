import { Paths } from 'src/common/helpers/pathing';
import linkgenHostClass from './linkgenHostClass';

describe('linkgenHostClass()', () => {
  it(`should generate path when there's form part with class id`, () => {
    const result = linkgenHostClass('details', '100');
    expect(result).toBe(`${Paths.hostClass}/100/details`);
  });

  it(`should generate path when there's form part with NO class id`, () => {
    const result = linkgenHostClass('details');
    expect(result).toBe(`${Paths.hostClass}/details`);
  });

  it(`should return undefined when there's NO form part with class id`, () => {
    const result = linkgenHostClass(undefined, '100');
    expect(result).toBe(undefined);
  });

  it(`should return undefined when there's NO form part with NO class id`, () => {
    const result = linkgenHostClass(undefined);
    expect(result).toBe(undefined);
  });
});
