import {
  AuthenticationError,
  DatabaseError,
  FormValidationError
} from '@bit/eddeee888.learnd-utils.graphql';
import { Request } from 'jest-express/lib/request';
import { Response } from 'jest-express/lib/response';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { prisma } from 'src/web/graphql/generated/prisma-client';
import classSave from './classSave';

const save = async (input: any, ctx: any) =>
  await classSave(
    undefined,
    {
      input
    },
    ctx,
    {} as any
  );

const defaultCtx: any = {
  response: new Response(),
  request: new Request(),
  prisma,
  viewer: null
};

const validInput: MutationResolvers.ClassSaveInput = {
  name: 'Class name',
  category: 'hashed_category_id',
  description: 'Class description',
  price: 10,
  streetAddress: '120 ABC street',
  city: 'City',
  postcode: '3000',
  country: 'Australia',
  contactNumber: '0412345678',
  state: 'VIC',
  streetUnit: '',
  sessions: [
    {
      day: 'MONDAY',
      startTime: '01:00am',
      endTime: '01:30am',
      capacity: 1
    }
  ]
};

const mockedSuccessPrisma = {
  createClass: jest.fn().mockResolvedValue(true),
  class: jest.fn().mockReturnValue({
    categories: jest.fn().mockResolvedValue(['category!']),
    sessions: jest.fn().mockResolvedValue(['session1', 'session2'])
  })
};

const mockedFailedPrisma = {
  createClass: jest.fn().mockRejectedValue(false)
};

describe('classSave() -> not authenticated', () => {
  it('should fail if no viewer', async () => {
    await expect(save({}, { ...defaultCtx })).rejects.toThrowError(
      new AuthenticationError()
    );
  });
});

describe('classSave() -> validating input', () => {
  const testCases = [
    {
      description: 'should pass with valid input & no failing prisma calls',
      value: { ...validInput },
      expected: true
    },
    {
      description: 'should fail if missing class name',
      value: { ...validInput, name: '' },
      expected: false
    },
    {
      description: 'should fail if missing class category',
      value: { ...validInput, category: '' },
      expected: false
    },
    {
      description: 'should pass if missing class description',
      value: { ...validInput, description: '' },
      expected: true
    },
    {
      description: 'should fail if missing streetAddress',
      value: { ...validInput, streetAddress: '' },
      expected: false
    },
    {
      description: 'should fail if missing city',
      value: { ...validInput, city: '' },
      expected: false
    },
    {
      description: 'should pass if missing postcode',
      value: { ...validInput, postcode: '' },
      expected: true
    },
    {
      description: 'should fail if missing country',
      value: { ...validInput, country: '' },
      expected: false
    },
    {
      description: 'should fail if missing contactNumber',
      value: { ...validInput, contactNumber: '' },
      expected: false
    },
    {
      description: 'should fail if missing state',
      value: { ...validInput, state: '' },
      expected: false
    },
    {
      description: 'should pass if missing streetUnit',
      value: { ...validInput, streetUnit: '' },
      expected: true
    },
    {
      description: 'should fail if no sessions',
      value: { ...validInput, sessions: [] },
      expected: false
    },
    {
      description: 'should fail if 1 invalid session and 1 valid',
      value: {
        ...validInput,
        sessions: [
          {
            day: 'MONDAY',
            startTime: '01:00am',
            endTime: '01:30am',
            capacity: 1
          },
          {
            day: 'MONDAY',
            startTime: '01:00am',
            endTime: '',
            capacity: 1
          }
        ]
      },
      expected: false
    },
    {
      description: 'should fail if 1 multiple invalid sessions',
      value: {
        ...validInput,
        sessions: [
          {
            day: '',
            startTime: '01:00am',
            endTime: '01:30am',
            capacity: 1
          },
          {
            day: 'MONDAY',
            startTime: '01:00am',
            endTime: '',
            capacity: 1
          }
        ]
      },
      expected: false
    },
    {
      description: 'should pass if multiple valid sessions',
      value: {
        ...validInput,
        sessions: [
          {
            day: 'MONDAY',
            startTime: '01:00am',
            endTime: '01:30am',
            capacity: 1
          },
          {
            day: 'MONDAY',
            startTime: '01:00am',
            endTime: '05:00am',
            capacity: 1
          }
        ]
      },
      expected: true
    }
  ];

  testCases.forEach(({ description, value, expected }) => {
    it(description, async () => {
      if (expected) {
        const result = await save(
          { ...value },
          {
            ...defaultCtx,
            viewer: { id: '100' },
            prisma: { ...mockedSuccessPrisma }
          }
        );
        expect(result).toBeTruthy();
      } else {
        await expect(
          save(
            { ...value },
            {
              ...defaultCtx,
              viewer: { id: '100' },
              prisma: { ...mockedSuccessPrisma }
            }
          )
        ).rejects.toThrowError(new FormValidationError());
      }
    });
  });
});

describe('classSave() -> createClass()', () => {
  it('should fail if createClass() fails', async () => {
    expect.assertions(1);

    await expect(
      save(
        { ...validInput },
        {
          ...defaultCtx,
          viewer: { id: '100' },
          ctx: { prisma: { ...mockedFailedPrisma } }
        }
      )
    ).rejects.toThrowError(new DatabaseError());
  });
});
