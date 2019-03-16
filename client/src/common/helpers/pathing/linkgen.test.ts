import linkgen from './linkgen';
import Paths from './Paths';

describe('linkgen()', () => {
  it('linkgen should generate a path', () => {
    expect(linkgen(Paths.login)).not.toBeFalsy();
  });
});
