// @ts-ignore
import { formOrder } from 'src/pages/CreateClass/constants';
import useCreateClassParams from 'src/pages/CreateClass/hooks/useCreateClassParams';
import useCreateClassNav from './useCreateClassNav';

jest.mock('src/pages/CreateClass/constants', () => ({
  formOrder: ['first', 'part2', 'part3', 'last']
}));
jest.mock('src/pages/CreateClass/hooks/useCreateClassParams');

describe('useCreateClassNav()', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const testCases = [
    {
      formPart: 'first',
      classId: undefined,
      expectedResult: { next: '/create-a-class/part2', previous: undefined }
    },
    {
      formPart: 'part2',
      classId: undefined,
      expectedResult: {
        next: '/create-a-class/part3',
        previous: '/create-a-class/first'
      }
    },
    {
      formPart: 'last',
      classId: undefined,
      expectedResult: {
        next: undefined,
        previous: '/create-a-class/part3'
      }
    },
    {
      formPart: 'first',
      classId: '100',
      expectedResult: { next: '/create-a-class/100/part2', previous: undefined }
    },
    {
      formPart: 'part2',
      classId: '100',
      expectedResult: {
        next: '/create-a-class/100/part3',
        previous: '/create-a-class/100/first'
      }
    },
    {
      formPart: 'last',
      classId: '100',
      expectedResult: {
        next: undefined,
        previous: '/create-a-class/100/part3'
      }
    }
  ];

  testCases.forEach(({ expectedResult, classId, formPart }) => {
    it(`should return correct object if formPart is ${formPart} and classId is ${classId}`, () => {
      (useCreateClassParams as jest.Mock).mockReturnValueOnce({
        classId,
        formPart
      });

      const result = useCreateClassNav();

      expect(result).toEqual(expectedResult);
    });
  });
});
