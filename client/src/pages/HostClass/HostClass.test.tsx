import { mount } from 'enzyme';
import React from 'react';
import { Redirect, StaticRouter } from 'react-router';
import Main from 'src/common/components/Main';
import Paper from 'src/common/components/Paper';
import ViewerContext from 'src/common/components/ViewerContext';
import { Paths } from 'src/common/helpers/pathing';
import { defaultFormPart, formOrder } from './constants';
import useHostClassParams from './hooks/useHostClassParams';
import HostClass from './HostClass';
import HostClassForm from './HostClassForm';
import { HostClassFormPart } from './types';

jest.mock('./hooks/useHostClassParams');

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
        <StaticRouter context={{}}>
          <ViewerContext.Provider
            value={{ ...viewerContextValue, viewer: { id: 'viewer1' } }}
          >
            <HostClass />
          </ViewerContext.Provider>
        </StaticRouter>
      );

      expect(
        wrapper.find('h1').filterWhere(h1 => h1.text() === 'Host a class')
      );
      expect(wrapper.find(Main)).toHaveLength(1);
      expect(wrapper.find(Paper)).toHaveLength(1);
      expect(wrapper.find(HostClassForm)).toHaveLength(1);
    });
  });
});
