import React from 'react';
import { mount } from '@cypress/react';
import SearchForm from '../../../../pages/components/molecules/searchForm';

describe('Search Form', () => {

  describe('Page elements', () => {

    it('has an input box', () => {
      mount(<SearchForm />);
      cy.get('input');
    });

    it('has a search button', () => {
      mount(<SearchForm />);
      cy.get('button');
    });

  });

});