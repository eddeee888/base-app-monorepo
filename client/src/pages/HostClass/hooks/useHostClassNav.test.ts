// @ts-ignore
import { formOrder } from 'src/pages/HostClass/constants';
import useHostClassParams from 'src/pages/HostClass/hooks/useHostClassParams';
import useHostClassNav from './useHostClassNav';

jest.mock('src/pages/HostClass/constants', () => ({
  formOrder: ['first', 'part2', 'part3', 'last']
}));
jest.mock('src/pages/HostClass/hooks/useHostClassParams');

describe('useHostClassNav()', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const testCases = [
    {
      formPart: 'first',
      classId: undefined,
      expectedResult: {
        currentFormPart: 'first',
        next: '/host-a-class/part2',
        previous: undefined
      }
    },
    {
      formPart: 'part2',
      classId: undefined,
      expectedResult: {
        currentFormPart: 'part2',
        next: '/host-a-class/part3',
        previous: '/host-a-class/first'
      }
    },
    {
      formPart: 'last',
      classId: undefined,
      expectedResult: {
        currentFormPart: 'last',
        next: undefined,
        previous: '/host-a-class/part3'
      }
    },
    {
      formPart: 'first',
      classId: '100',
      expectedResult: {
        currentFormPart: 'first',
        next: '/host-a-class/100/part2',
        previous: undefined
      }
    },
    {
      formPart: 'part2',
      classId: '100',
      expectedResult: {
        currentFormPart: 'part2',
        next: '/host-a-class/100/part3',
        previous: '/host-a-class/100/first'
      }
    },
    {
      formPart: 'last',
      classId: '100',
      expectedResult: {
        currentFormPart: 'last',
        next: undefined,
        previous: '/host-a-class/100/part3'
      }
    }
  ];

  testCases.forEach(({ expectedResult, classId, formPart }) => {
    it(`should return correct object if formPart is ${formPart} and classId is ${classId}`, () => {
      (useHostClassParams as jest.Mock).mockReturnValueOnce({
        classId,
        formPart
      });

      const result = useHostClassNav();

      expect(result).toEqual(expectedResult);
    });
  });
});
