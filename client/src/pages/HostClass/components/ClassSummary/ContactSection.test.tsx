import { Grid } from '@material-ui/core';
import { mount } from 'enzyme';
import React from 'react';
import { StaticRouter } from 'react-router';
import ContactSection, { ContactSectionProps } from './ContactSection';

const defaultProps = {
  values: {
    unit: '',
    streetAddress: '',
    city: '',
    country: '',
    postcode: '',
    state: '',
    contactNumber: ''
  }
};

describe('<ContactSection />', () => {
  it('should have correct header, link to contact section, address and contact number', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <ContactSection {...defaultProps} />
      </StaticRouter>
    );

    expect(wrapper.find('h2').text()).toMatch(/Contact details/);
    expect(wrapper.find('a').prop('href')).toBe('/host-a-class/contact');
    expect(
      wrapper.find(Grid).filterWhere(grid => grid.text() === 'Address')
    ).toHaveLength(1);
    expect(
      wrapper.find(Grid).filterWhere(grid => grid.text() === 'Contact number')
    ).toHaveLength(1);
    expect(
      wrapper
        .find(Grid)
        .filterWhere(
          container =>
            container.prop('item') && !!container.text().match(/N\/A/)
        )
    ).toHaveLength(2);
  });

  const valueTestCases: Array<{
    description: string;
    values: ContactSectionProps['values'];
    expected: string[];
  }> = [
    {
      description: 'should show full values correctly',
      values: {
        unit: '1',
        streetAddress: '120 Street address',
        city: 'City of LA',
        country: 'Australia',
        postcode: '3000',
        state: 'VIC',
        contactNumber: '0420836888'
      },
      expected: [
        '0420836888',
        '1, 120 Street addressCity of LA VIC 3000 Australia'
      ]
    },
    {
      description: 'should show address without unit correctly',
      values: {
        unit: '',
        streetAddress: '120 Street address',
        city: 'City of LA',
        country: 'Australia',
        postcode: '3000',
        state: 'VIC',
        contactNumber: ''
      },
      expected: ['120 Street addressCity of LA VIC 3000 Australia']
    }
  ];

  valueTestCases.forEach(({ description, values, expected }) => {
    it(description, () => {
      const wrapper = mount(
        <StaticRouter context={{}}>
          <ContactSection values={{ ...values }} />
        </StaticRouter>
      );

      expected.forEach(result => {
        expect(
          wrapper.find(Grid).filterWhere(grid => grid.text() === result)
        ).toHaveLength(1);
      });
    });
  });
});
