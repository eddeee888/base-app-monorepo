import { mount } from 'enzyme';
import React from 'react';
import { StaticRouter } from 'react-router';
import Text from 'src/common/components/Text';
import SessionsSection, { SessionsSectionProps } from './SessionsSection';

describe('<SessionsSection />', () => {
  it('should show correct header, edit link', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <SessionsSection values={{ sessions: [] }} />
      </StaticRouter>
    );

    expect(wrapper.find('h2').text()).toMatch(/Sessions/);
    expect(wrapper.find('a').prop('href')).toBe('/host-a-class/sessions');
    expect(
      wrapper
        .find(Text)
        .filterWhere(text => text.text() === 'No session created')
    ).toHaveLength(1);
  });

  const testCases: Array<{
    description: string;
    testValue: SessionsSectionProps['values'];
    expected: string[];
  }> = [
    {
      description: 'should show appropriate text when no session created',
      testValue: {
        sessions: []
      },
      expected: ['No session created']
    },
    {
      description: 'should show one session correcly',
      testValue: {
        sessions: [
          { day: 'mon', startTime: '01:00am', endTime: '02:00am', capacity: 1 }
        ]
      },
      expected: ['Every Monday, from 01:00am until 02:00am for 2 learners ']
    },
    {
      description: 'should show multiple sessions correcly',
      testValue: {
        sessions: [
          { day: 'mon', startTime: '01:00am', endTime: '02:00am', capacity: 1 },
          { day: 'tue', startTime: '05:00pm', endTime: '06:00pm', capacity: 2 }
        ]
      },
      expected: [
        'Every Monday, from 01:00am until 02:00am for 1 learners ',
        'Every Tuesday, from 05:00pm until 06:00pm for 2 learners '
      ]
    }
  ];

  testCases.forEach(({ description, testValue, expected }) => {
    it(description, () => {
      const wrapper = mount(
        <StaticRouter context={{}}>
          <SessionsSection values={{ ...testValue }} />
        </StaticRouter>
      );

      expected.forEach(expectedValue => {
        expect(
          wrapper
            .find(Text)
            .filterWhere(element => element.text() === expectedValue)
        );
      });
    });
  });
});
