import { mount } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { StaticRouter } from 'react-router';
import { validationSchemas } from '../../constants';
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
  day: 'mon',
  startTime: '12:30am',
  endTime: '01:30am',
  capacity: 5
};

const invalidValues: ClassSummaryProps<HostClassState>['values'] = {
  details: {
    name: '',
    category: '',
    description: ''
  },
  contact: {
    streetAddress: '',
    city: '',
    postcode: '',
    country: '',
    contactNumber: '',
    state: '',
    unit: ''
  },
  sessions: {
    sessions: []
  }
};

const validValues: ClassSummaryProps<HostClassState>['values'] = {
  details: {
    name: 'Class name',
    category: 'Class category',
    description: 'Class description'
  },
  contact: {
    streetAddress: '123 street',
    city: 'city',
    postcode: '',
    country: 'Australia',
    contactNumber: '1234567890',
    state: 'VIC',
    unit: ''
  },
  sessions: {
    sessions: [validSession]
  }
};

const defaultProps: ClassSummaryProps<HostClassState> = {
  values: { ...invalidValues },
  goNext: jest.fn(),
  goPrevious: jest.fn()
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
      validationSchemas.details,
      'isValidSync'
    );
    const contactValidationSpy = jest.spyOn(
      validationSchemas.contact,
      'isValidSync'
    );
    const sessionsValidationSpy = jest.spyOn(
      validationSchemas.sessions,
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
  const detailsSectionTestCases = [
    {
      values: {
        name: 'Class name!',
        category: '',
        description: ''
      },
      expected: false,
      description: 'should fail if not enough data'
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
        unit: ''
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
      values: [invalidSession],
      expected: false,
      description: 'should fail if 1 invalid sessions'
    },
    {
      values: [invalidSession, invalidSession],
      expected: false,
      description: 'should fail if multiple invalid sessions'
    },
    {
      values: [invalidSession, validSession],
      expected: false,
      description: 'should fail if mixed valid and invalid sessions'
    },
    {
      values: [validSession],
      expected: true,
      description: 'should fail if 1 invalid session'
    },
    {
      values: [validSession, validSession],
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
      values: invalidValues,
      expected: false,
      description:
        'should have correct previous button and submit button is disabled'
    },
    {
      values: validValues,
      expected: true,
      description:
        'should have correct previous button and submit button is enabled'
    }
  ];

  afterEach(() => {
    jest.resetAllMocks();
  });

  navigationTestCases.forEach(({ values, expected, description }) => {
    it(description, () => {
      const wrapper = mountWithMockedProviders({
        ...defaultProps,
        values: { ...values }
      });

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

      (previousButton.prop('onClick') as any)();
      expect(defaultProps.goPrevious).toHaveBeenCalledTimes(1);

      if (expected) {
        expect(submitButton.prop('disabled')).toBe(false);
        (submitButton.prop('onClick') as any)();
        expect(defaultProps.goNext).toHaveBeenCalledTimes(1);
      } else {
        expect(submitButton.prop('disabled')).toBe(true);
        expect(submitButton.prop('onClick')).toBe(undefined);
      }
    });
  });
});
