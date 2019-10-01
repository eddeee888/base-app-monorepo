import validateSignupInput from './validateSignupInput';
import { SignupInput } from 'graphql/resolvers/types';

describe('validateSignupInput()', () => {
  const validInput: SignupInput = {
    email: 'chicken.nugget@gmail.com',
    firstName: `Dr. Chi'ckęn`,
    lastName: 'Nügget',
    password: 'ch#ck3n!'
  };

  it('should validate valid input', async () => {
    const errors = await validateSignupInput(validInput);

    expect(errors).toBeUndefined();
  });

  it('should return error if invalid email', async () => {
    const errors = await validateSignupInput({
      ...validInput,
      email: 'invalidemail'
    });

    expect(errors).toEqual({ email: ['Email must be valid'] });
  });

  it('should return error if fields are empty strings', async () => {
    const errors = await validateSignupInput({
      email: '',
      firstName: '',
      lastName: '',
      password: ''
    });

    expect(errors).toEqual({
      email: ['Email is required'],
      firstName: ['First name is required'],
      lastName: ['Last name is required'],
      password: [
        'Password must be at least 8 english upper/lowercase characters, ' +
          'any number, no spaces and any of the following: _#?!@$%^&*-.'
      ]
    });
  });

  it('should return error if first name or last name have invalid characters', async () => {
    const errors = await validateSignupInput({
      ...validInput,
      firstName: 'I~nvalid firstname',
      lastName: 'Invl!id'
    });

    expect(errors).toEqual({
      firstName: ['First name cannot have invalid character'],
      lastName: ['Last name cannot have invalid character']
    });
  });

  it('should return error if password is too short', async () => {
    const errors = await validateSignupInput({
      ...validInput,
      password: 'short'
    });

    expect(errors).toEqual({
      password: [
        'Password must be at least 8 english upper/lowercase characters, ' +
          'any number, no spaces and any of the following: _#?!@$%^&*-.'
      ]
    });
  });
});
