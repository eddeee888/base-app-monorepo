import compare from './compare';
import hash from './hash';

describe('password: hash() and compare()', () => {
  const password = 'passwordisoverrated';

  it('should hash password successfully', async () => {
    const hashed = await hash(password);

    const success = await compare(password, hashed);

    expect(success).toBe(true);
  });
});
