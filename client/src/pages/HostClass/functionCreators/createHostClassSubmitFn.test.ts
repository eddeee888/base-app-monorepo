import { HostClassState } from '../types';
import createHostClassSubmitFn from './createHostClassSubmitFn';

const saveFn = jest.fn();
const history: any = {
  push: jest.fn()
};

const validValues: HostClassState = {
  details: {
    name: '',
    category: '',
    description: ''
  },
  contact: {
    streetUnit: '306',
    streetAddress: '120 ABC street',
    city: 'MELBOURNE',
    postcode: '3000',
    country: 'AUSTRALIA',
    contactNumber: '0429123456',
    state: 'VIC'
  },
  sessions: {
    sessions: [
      {
        day: 'MONDAY',
        startTime: '01:00am',
        endTime: '02:00am',
        capacity: 10
      }
    ]
  }
};

describe('createHostClassSubmitFn() -> call with correct param', () => {
  beforeAll(() => {
    console.warn = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should be called with correct variables', () => {
    saveFn.mockResolvedValue(true);

    const submitFn = createHostClassSubmitFn(
      saveFn,
      { ...validValues },
      history
    );

    submitFn();

    expect(saveFn).toHaveBeenCalledTimes(1);
    expect(saveFn).toHaveBeenCalledWith({
      variables: {
        input: {
          ...validValues.contact,
          ...validValues.details,
          sessions: [...validValues.sessions.sessions]
        }
      }
    });
  });

  it('should skip over sessions without date', () => {
    saveFn.mockResolvedValue(true);

    const submitFn = createHostClassSubmitFn(
      saveFn,
      {
        ...validValues,
        sessions: {
          sessions: [
            ...validValues.sessions.sessions,
            { day: '', startTime: '02:00pm', endTime: '03:00pm', capacity: 100 }
          ]
        }
      },
      history
    );

    submitFn();

    expect(saveFn).toHaveBeenCalledTimes(1);
    expect(saveFn).toHaveBeenCalledWith({
      variables: {
        input: {
          ...validValues.contact,
          ...validValues.details,
          sessions: [...validValues.sessions.sessions]
        }
      }
    });
  });
});

describe('createHostClassSubmitFn() -> handle return', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call history.push() and redirect user to correct URL', async () => {
    expect.assertions(2);

    saveFn.mockResolvedValue({
      data: {
        classSave: {
          class: {
            id: 'abcthisishashedid'
          }
        }
      }
    });

    const submitFn = createHostClassSubmitFn(
      saveFn,
      { ...validValues },
      history
    );

    await submitFn();

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith(
      '/host-a-class-success/abcthisishashedid'
    );
  });
});
