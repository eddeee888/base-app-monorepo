import { hostAClassValidation } from '@bit/eddeee888.base-react-app-utils.validations';
import { mount } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { StaticRouter } from 'react-router';
import { ClassSession, HostClassState } from '../../types';
import Navigation from '../Navigation';
import ClassSummary, { ClassSummaryProps } from './ClassSummary';
import ContactSection from './ContactSection';
import DetailsSection from './DetailsSection';
import SessionsSection from './SessionsSection';

const invalidSession: ClassSession = {
  day: '',
  startTime: '12:30am',
  endTime: '01:30am',
  capacity: 5
};
const validSession: ClassSession = {
  day: 'MONDAY',
  startTime: '12:30am',
  endTime: '01:30am',
  capacity: 5
};

const invalidValues: ClassSummaryProps<HostClassState>['values'] = {
  details: {
    name: '',
    category: '',
    description: '',
    price: ''
  },
  contact: {
    streetAddress: '',
    city: '',
    postcode: '',
    country: '',
    contactNumber: '',
    state: '',
    streetUnit: ''
  },
  sessions: {
    sessions: []
  }
};

const validValues: ClassSummaryProps<HostClassState>['values'] = {
  details: {
    name: 'Class name',
    category: 'Class category',
    description: 'Class description',
    price: 10
  },
  contact: {
    streetAddress: '123 street',
    city: 'city',
    postcode: '',
    country: 'Australia',
    contactNumber: '1234567890',
    state: 'VIC',
    streetUnit: ''
  },
  sessions: {
    sessions: [validSession]
  }
};

const defaultProps: ClassSummaryProps<HostClassState> = {
  values: { ...invalidValues },
  goNext: jest.fn(),
  goPrevious: jest.fn(),
  classSaveResult: {
    error: false,
    loading: false
  } as any
};

const detailsErrorRegex = /Class details must be provided to continue/;
const contactErrorRegex = /Contact details must be provided to continue/;
const sessionsErrorRegex = /There must be at least one valid session/;

const mountWithMockedProviders = (props: ClassSummaryProps<HostClassState>) => {
  return mount(
    <StaticRouter context={{}}>
      <MockedProvider>
        <ClassSummary {...props} />
      </MockedProvider>
    </StaticRouter>
  );
};

describe('<ClassSummary /> with default props', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('should have DetailsSection, ContactSection, SessionsSection and failure messages by default ', () => {
    const detailsValidationSpy = jest.spyOn(
      hostAClassValidation.details,
      'isValidSync'
    );
    const contactValidationSpy = jest.spyOn(
      hostAClassValidation.contact,
      'isValidSync'
    );
    const sessionsValidationSpy = jest.spyOn(
      hostAClassValidation.sessions,
      'isValidSync'
    );

    const wrapper = mountWithMockedProviders(defaultProps);

    expect(detailsValidationSpy).toHaveBeenCalledTimes(1);
    expect(contactValidationSpy).toHaveBeenCalledTimes(1);
    expect(sessionsValidationSpy).toHaveBeenCalledTimes(1);

    expect(wrapper.find(DetailsSection)).toHaveLength(1);
    expect(wrapper.text()).toMatch(detailsErrorRegex);

    expect(wrapper.find(ContactSection)).toHaveLength(1);
    expect(wrapper.text()).toMatch(contactErrorRegex);

    expect(wrapper.find(SessionsSection)).toHaveLength(1);
    expect(wrapper.text()).toMatch(sessionsErrorRegex);
  });

  it('should have Navigation and correct previous and submit button if disabled', () => {
    const wrapper = mountWithMockedProviders(defaultProps);

    const previousButton = wrapper
      .find('button')
      .filterWhere(button => button.text() === 'Previous');
    const submitButton = wrapper
      .find('button')
      .filterWhere(
        button =>
          button.text() === 'Confirm' &&
          button.prop('type') === 'submit' &&
          button.prop('disabled') === true
      );

    expect(wrapper.find(Navigation)).toHaveLength(1);
    expect(previousButton).toHaveLength(1);
    expect(submitButton).toHaveLength(1);

    (previousButton.prop('onClick') as any)();
    expect(defaultProps.goPrevious).toHaveBeenCalledTimes(1);

    expect(submitButton.prop('onClick')).toBe(undefined);
  });
});

describe('<ClassSummary /> -> <DetailsSection /> ', () => {
  const validDetails = {
    name: 'Class name!',
    category: 'Class categgory!',
    description: 'Class description',
    price: 10
  };
  const detailsSectionTestCases = [
    {
      values: {
        ...validDetails,
        name: ''
      },
      expected: false,
      description: 'should fail if missing class name'
    },
    {
      values: {
        ...validDetails,
        category: ''
      },
      expected: false,
      description: 'should fail if missing category'
    },
    {
      values: {
        ...validDetails,
        description: ''
      },
      expected: true,
      description: 'should pass if missing description'
    },
    {
      values: {
        ...validDetails,
        price: '' as any
      },
      expected: false,
      description: 'should fail if price is empty string'
    },
    {
      values: {
        ...validDetails,
        price: 0
      },
      expected: true,
      description: 'should pass if price is 0'
    },
    {
      values: validValues.details,
      expected: true,
      description: 'should pass if enough data'
    }
  ];

  detailsSectionTestCases.forEach(({ values, expected, description }) => {
    it(description, () => {
      const wrapper = mountWithMockedProviders({
        ...defaultProps,
        values: {
          ...defaultProps.values,
          details: { ...values }
        }
      });

      expect(wrapper.find(DetailsSection)).toHaveLength(1);
      if (expected) {
        expect(wrapper.text()).not.toMatch(detailsErrorRegex);
      } else {
        expect(wrapper.text()).toMatch(detailsErrorRegex);
      }
    });
  });
});

describe('<ClassSummary /> -> <ContactSection /> ', () => {
  const contactSectionTestCases = [
    {
      values: {
        streetAddress: '123 street',
        city: 'city',
        postcode: '',
        country: 'Australia',
        contactNumber: '',
        state: '',
        streetUnit: ''
      },
      expected: false,
      description: 'should fail if not enough data'
    },
    {
      values: validValues.contact,
      expected: true,
      description: 'should pass if enough data'
    }
  ];

  contactSectionTestCases.forEach(({ values, expected, description }) => {
    it(description, () => {
      const wrapper = mountWithMockedProviders({
        ...defaultProps,
        values: {
          ...defaultProps.values,
          contact: { ...values }
        }
      });

      expect(wrapper.find(ContactSection)).toHaveLength(1);
      if (expected) {
        expect(wrapper.text()).not.toMatch(contactErrorRegex);
      } else {
        expect(wrapper.text()).toMatch(contactErrorRegex);
      }
    });
  });
});

describe('<ClassSummary /> -> <SessionsSection /> ', () => {
  const sessionsSectionTestCases: Array<{
    values: ClassSession[];
    expected: boolean;
    description: string;
  }> = [
    {
      values: [],
      expected: false,
      description: 'should fail if no sessions'
    },
    {
      values: [{ ...invalidSession }],
      expected: false,
      description: 'should fail if 1 invalid sessions'
    },
    {
      values: [{ ...invalidSession }, { ...invalidSession }],
      expected: false,
      description: 'should fail if multiple invalid sessions'
    },
    {
      values: [{ ...invalidSession }, { ...validSession }],
      expected: false,
      description: 'should fail if mixed valid and invalid sessions'
    },
    {
      values: [{ ...validSession }],
      expected: true,
      description: 'should fail if 1 invalid session'
    },
    {
      values: [{ ...validSession }, { ...validSession }],
      expected: true,
      description: 'should fail if multiple valid sessions'
    }
  ];

  sessionsSectionTestCases.forEach(({ values, expected, description }) => {
    it(description, () => {
      const wrapper = mountWithMockedProviders({
        ...defaultProps,
        values: {
          ...defaultProps.values,
          sessions: {
            sessions: values
          }
        }
      });

      expect(wrapper.find(SessionsSection)).toHaveLength(1);
      if (expected) {
        expect(wrapper.text()).not.toMatch(sessionsErrorRegex);
      } else {
        expect(wrapper.text()).toMatch(sessionsErrorRegex);
      }
    });
  });
});

describe('<ClassSummary /> -> <Navigation /> ', () => {
  const navigationTestCases = [
    {
      description:
        'should have correct previous button and submit button is disabled',
      props: { ...defaultProps, values: { ...invalidValues } },
      expected: { submittable: false, isLoading: false }
    },
    {
      description:
        'should have correct previous button and submit button is enabled',
      props: { ...defaultProps, values: { ...validValues } },
      expected: { submittable: true, isLoading: false }
    },
    {
      description: 'should pass loading to Navigation',
      props: {
        ...defaultProps,
        values: { ...validValues },
        classSaveResult: { loading: true } as any
      },
      expected: { submittable: false, isLoading: true }
    }
  ];

  afterEach(() => {
    jest.resetAllMocks();
  });

  navigationTestCases.forEach(
    ({ props, expected: { submittable, isLoading }, description }) => {
      it(description, () => {
        const wrapper = mountWithMockedProviders({ ...props });

        const previousButton = wrapper
          .find('button')
          .filterWhere(button => button.text() === 'Previous');
        const submitButton = wrapper
          .find('button')
          .filterWhere(
            button =>
              button.text() === 'Confirm' && button.prop('type') === 'submit'
          );

        expect(wrapper.find(Navigation)).toHaveLength(1);
        expect(wrapper.find(Navigation).prop('goNextIsLoading')).toBe(
          isLoading
        );

        (previousButton.prop('onClick') as any)();
        expect(defaultProps.goPrevious).toHaveBeenCalledTimes(1);

        if (submittable) {
          expect(submitButton.prop('disabled')).toBe(false);
          (submitButton.prop('onClick') as any)();
          expect(defaultProps.goNext).toHaveBeenCalledTimes(1);
        } else {
          expect(submitButton.prop('disabled')).toBe(true);
          expect(submitButton.prop('onClick')).toBe(undefined);
        }
      });
    }
  );
});

describe('<ClassSummary /> -> ClassSaveMutation states', () => {
  const props = {
    values: { ...validValues },
    goPrevious: jest.fn(),
    goNext: jest.fn(),
    classSaveResult: { loading: false, error: undefined } as any
  };

  it('should handle loading state', () => {
    const wrapper = mountWithMockedProviders({
      ...props,
      classSaveResult: { ...props.classSaveResult, loading: true }
    });

    expect(wrapper.find(Navigation).prop('goNextIsLoading')).toBe(true);
  });

  it('should handle error state', () => {
    const wrapper = mountWithMockedProviders({
      ...props,
      classSaveResult: {
        ...props.classSaveResult,
        loading: false,
        error: Error('This should be ApolloError')
      }
    });

    expect(wrapper.text()).toMatch(
      /Something went wrong! Check your details and try again./
    );
  });
});
