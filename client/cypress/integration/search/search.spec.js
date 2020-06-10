import SELECTORS from '../../support/selectors';

describe('Search functionality', () => {

  before(() => {
    cy.visit('http://localhost:8080');
  })

  it('Should render a result', () => {
    cy.get(SELECTORS.SEARCH_INPUT).clear().type('Pikachu').type('{enter}');
    cy.get(SELECTORS.RESULTS_WRAPPER).should('be.visible');
    cy.get(SELECTORS.NOT_FOUND_WRAPPER).should('not.be.visible');
    cy.contains('At which hour several of these pokémon gather, their electricity couldst buildeth');
  });

  it('Should render a 404', () => {
    cy.get(SELECTORS.SEARCH_INPUT).clear().type('Boris').type('{enter}');
    cy.scrollTo(0, 0);
    cy.get(SELECTORS.NOT_FOUND_WRAPPER).should('be.visible');
    cy.contains('Unfortunately, Boris is not a Pokemon')
  });

});