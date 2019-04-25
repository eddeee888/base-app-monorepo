import { Grid } from '@material-ui/core';
import { mount } from 'enzyme';
import React from 'react';
import { StaticRouter } from 'react-router';
import DetailsSection, { DetailsSectionProps } from './DetailsSection';

describe('<DetailsSection />', () => {
  it('should have correct header, edit link, and main fields', () => {
    const defaultProps: DetailsSectionProps = {
      values: {
        name: '',
        category: '',
        description: ''
      },
      classCategoriesResult: {} as any
    };

    const wrapper = mount(
      <StaticRouter>
        <DetailsSection {...defaultProps} />
      </StaticRouter>
    );

    expect(wrapper.find('h2').text()).toMatch(/Class details/);
    expect(wrapper.find('a').prop('href')).toBe('/host-a-class/details');
    expect(
      wrapper.find(Grid).filterWhere(grid => grid.text() === 'Name')
    ).toHaveLength(1);
    expect(
      wrapper.find(Grid).filterWhere(grid => grid.text() === 'Description')
    ).toHaveLength(1);
    expect(
      wrapper.find(Grid).filterWhere(grid => grid.text() === 'Category')
    ).toHaveLength(1);
    expect(
      wrapper
        .find(Grid)
        .filterWhere(
          container =>
            container.prop('item') && !!container.text().match(/N\/A/)
        )
    ).toHaveLength(3);
  });
});

describe('<DetailsSection /> data values', () => {
  const defaultValues = {
    name: 'Class name',
    category: 'category1',
    description: 'Class description'
  };
  const defaulltClassCategoriesResult = {
    error: false,
    loading: false,
    data: {
      classCategories: [
        { id: 'category1', name: 'Category one' },
        { id: 'category2', name: 'Category two' }
      ]
    }
  } as any;
  const valueTestCases = [
    {
      description: 'should show data correctly',
      testValue: {
        values: { ...defaultValues },
        classCategoriesResult: { ...defaulltClassCategoriesResult }
      },
      expected: ['Class details', 'Category one', 'Class description']
    },
    {
      description: 'should show error state for classCategoriesResult',
      testValue: {
        values: { ...defaultValues },
        classCategoriesResult: {
          ...defaulltClassCategoriesResult,
          error: true
        }
      },
      expected: ['Unable to retrieve categories']
    }
  ];

  valueTestCases.forEach(({ description, testValue, expected }) => {
    it(description, () => {
      const wrapper = mount(
        <StaticRouter>
          <DetailsSection {...testValue} />
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
