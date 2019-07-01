import createLinkGenerator from './createLinkGenerator';

describe('createLinkGenerator() -> path', () => {
  it('should return the same patern', () => {
    const link = createLinkGenerator(
      '/users/:classId/:subform(details|contact)'
    );

    expect('/users/:classId/:subform(details|contact)').toBe(link.pattern);
  });
});

describe('createLinkGenerator() -> generate params', () => {
  it('should work without typing', () => {
    const link = createLinkGenerator(
      '/users/:classId/:subform(details|contact)'
    );

    expect(link.generate({ classId: '100', subform: 'details' })).toBe(
      '/users/100/details'
    );
  });

  it('should work with typing correctly', () => {
    const link = createLinkGenerator<{
      classId: string;
      subform: 'details' | 'contact';
    }>('/users/:classId/:subform(details|contact)');

    expect(link.generate({ classId: '100', subform: 'details' })).toBe(
      '/users/100/details'
    );
  });

  it('should not generate optional param if not passed in', () => {
    const link = createLinkGenerator('/users/:userId?');
    expect(link.generate({})).toBe('/users');
  });

  it('should not generate middle optional param if not passed in', () => {
    const link = createLinkGenerator<{ userId?: string; classId: string }>(
      '/users/:userId?/:classId'
    );
    expect(link.generate({ classId: '999' })).toBe('/users/999');
  });
});

describe('createLinkGenerator() -> generate url query', () => {
  it('should generate redirect query correctly without param', () => {
    const link = createLinkGenerator<{ userId?: string }>('/users/:userId?');
    expect(link.generate({}, { redirect: 'abcd' })).toBe(
      '/users?redirect=abcd'
    );
  });

  it('should generate redirect query correctly with param', () => {
    const link = createLinkGenerator<{ userId: string }>('/users/:userId');
    expect(link.generate({ userId: '999' }, { redirect: 'abcd' })).toBe(
      '/users/999?redirect=abcd'
    );
  });
});
