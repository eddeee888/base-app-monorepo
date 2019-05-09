import { spacingPx, spacingRem } from './spacing';

describe('spacing()', () => {
  it('should calculate px', () => {
    const value1 = spacingPx(2);
    expect(value1).toBe(16);

    const value2 = spacingPx(4);
    expect(value2).toBe(32);
  });

  it('should calculate rem', () => {
    const value1 = spacingRem(1);
    expect(value1).toBe(0.5);

    const value2 = spacingRem(3);
    expect(value2).toBe(1.5);
  });
});
