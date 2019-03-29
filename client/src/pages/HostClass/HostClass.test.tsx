import { mount } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { Redirect, StaticRouter } from 'react-router';
import Main from 'src/common/components/Main';
import Paper from 'src/common/components/Paper';
import ViewerContext from 'src/common/components/ViewerContext';
import { Paths } from 'src/common/helpers/pathing';
import ClassContact from './components/ClassContact';
import ClassDetails from './components/ClassDetails';
import ClassSessions from './components/ClassSessions';
import ClassSummary from './components/ClassSummary';
import { defaultFormPart, formOrder } from './constants';
import useHostClassParams from './hooks/useHostClassParams';
import HostClass from './HostClass';
import { HostClassFormPart } from './types';

jest.mock('./hooks/useHostClassParams');
jest.mock('./hooks/useHostClassNav');

const viewerContextValue = {
  viewer: null,
  setViewer: jest.fn(),
  clearViewer: jest.fn()
};

describe('<HostClass />: no viewer', () => {
  it('should redirect to /signup with redirect route back here', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <ViewerContext.Provider value={{ ...viewerContextValue }}>
          <HostClass />
        </ViewerContext.Provider>
      </StaticRouter>
    );

    expect(wrapper.find(Redirect)).toHaveLength(1);
    expect(wrapper.find(Redirect).prop('to')).toBe(
      `${Paths.signup}?redirect=${Paths.hostClass}`
    );
  });
});

describe('<HostClass />: has viewer and no form part', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const testCases = [
    {
      classId: undefined,
      expectedRedirectProp: `${Paths.hostClass}/${defaultFormPart}`
    },
    {
      classId: '100',
      expectedRedirectProp: `${Paths.hostClass}/100/${defaultFormPart}`
    }
  ];

  testCases.forEach(({ classId, expectedRedirectProp }) => {
    it(`should redirect to default form part if classId is ${classId}`, () => {
      (useHostClassParams as jest.Mock).mockReturnValueOnce({
        formPart: undefined,
        classId
      });

      const wrapper = mount(
        <StaticRouter context={{}}>
          <ViewerContext.Provider
            value={{ ...viewerContextValue, viewer: { id: 'viewer1' } }}
          >
            <HostClass />
          </ViewerContext.Provider>
        </StaticRouter>
      );

      expect(wrapper.find(Redirect)).toHaveLength(1);
      expect(wrapper.find(Redirect).prop('to')).toBe(expectedRedirectProp);
    });
  });
});

describe('<HostClass />: has viewer and has form part', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  interface TestCase {
    formPart: HostClassFormPart;
    classId: string | undefined;
  }

  const formPartComponents = {
    details: ClassDetails,
    contact: ClassContact,
    sessions: ClassSessions,
    summary: ClassSummary
  };

  const testCasesWithoutClassId: TestCase[] = formOrder.map(formPart => ({
    formPart,
    classId: undefined
  }));

  const testCasesWithClassId: TestCase[] = formOrder.map(formPart => ({
    formPart,
    classId: '100'
  }));

  const testCases = testCasesWithClassId.concat(testCasesWithoutClassId);

  testCases.forEach(({ formPart, classId }) => {
    it(`should render correctly if formPart is '${formPart}' and classId is ${classId}`, () => {
      (useHostClassParams as jest.Mock).mockReturnValue({
        formPart,
        classId
      });

      const wrapper = mount(
        <MockedProvider>
          <StaticRouter context={{}}>
            <ViewerContext.Provider
              value={{ ...viewerContextValue, viewer: { id: 'viewer1' } }}
            >
              <HostClass />
            </ViewerContext.Provider>
          </StaticRouter>
        </MockedProvider>
      );

      expect(
        wrapper.find('h1').filterWhere(h1 => h1.text() === 'Host a class')
      );
      expect(wrapper.find(Main)).toHaveLength(1);
      expect(wrapper.find(Paper)).toHaveLength(1);
      expect(wrapper.find(formPartComponents[formPart])).toHaveLength(1);
      Object.keys(formPartComponents)
        .filter(key => key !== formPart)
        .forEach((part: string) => {
          // @ts-ignore
          expect(wrapper.find(formPartComponents[part])).toHaveLength(0);
        });
    });
  });
});
