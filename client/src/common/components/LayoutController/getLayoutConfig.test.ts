import { Paths } from 'common/helpers/pathing';
import getLayoutConfig from './getLayoutConfig';

describe('getLayoutConfig()', () => {
  (Object as any).values(Paths).forEach((path: string) => {
    it(`should match snapshot for '${path}' path`, () => {
      const config = getLayoutConfig(path);
      expect(config).toMatchSnapshot();
    });
  });

  it('should match snapshot if invalid path', () => {
    const config = getLayoutConfig('/Thisishighlyinvalidpath');
    expect(config).toMatchSnapshot();
  });
});
