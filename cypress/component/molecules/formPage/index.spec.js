import React from 'react';
import { mount } from '@cypress/react';
import FormPage from '../../../../pages/components/pages/formPage';

describe('Form page', () => {

  describe('when input is John Hartman', () => {

    describe('when user clicks on search', () => {

      it ('shows a subtitle', () => {
        mount(<FormPage />);
        cy.get('input').type('John Hartman');
        cy.get('button').click();
        cy.contains('Subordinates of John Hartman');
      })

      it('shows John Hartman\'s direct subordinates', () => {
        mount(<FormPage />);
        cy.get('input').type('John Hartman');
        cy.get('button').click();

        cy.contains('Samad Pitt');
        cy.contains('Leanna Hogg');
      });

      xit('shows John Hartman\'s indirect subordinates', () => {
        mount(<FormPage />);
        cy.get('input').type('John Hartman');
        cy.get('button').click();

        // Samad Pitt
        cy.contains('Aila Hodgson');
        cy.contains('Amaya Knight');

        //Leanna Hogg
        cy.contains('Vincent Todd');
        cy.contains('Faye Oneill');
        cy.contains('Lynn Haigh');
        //cy.contains('Aila Hodgson'); // Repeated

        //Lynn Haigh
        cy.contains('Nylah Riddle');
        cy.get('li:contains("Aila Hodgson)').should('length', 1);
      });

    });

  });

});