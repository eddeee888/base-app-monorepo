import { Grid } from '@material-ui/core';
import { mount } from 'enzyme';
import React from 'react';
import { StaticRouter } from 'react-router';
import ContactSection from './ContactSection';

const defaultProps = {
    values: {
        unit: '',
        streetAddress: '',
        city: '',
        country: '',
        postcode: '',
        state: '',
        contactNumber: '',
    },
};

describe('<ContactSection />', () => {
    it('should have correct header, link to contact section, address and contact number', () => {
        const wrapper = mount(
            <StaticRouter context={{}}>
                <ContactSection {...defaultProps} />
            </StaticRouter>,
        );

        expect(wrapper.find('h2').text()).toMatch(/Contact details/);
        expect(wrapper.find('a').prop('href')).toBe('/host-a-class/contact');
        expect(
            wrapper.find(Grid).filterWhere(grid => grid.text() === 'Address'),
        ).toHaveLength(1);
        expect(
            wrapper.find(Grid).filterWhere(grid => grid.text() === 'Contact number'),
        ).toHaveLength(1);
        expect(wrapper.text()).toHaveLength(2);
    });
});
