import SELECTORS from '../../support/selectors';

describe('Favourites functionality', () => {

  before(() => {
    cy.visit('http://localhost:8080');
  })

  it('Should add a favourite', () => {
    cy.get(SELECTORS.SEARCH_INPUT).clear().type('Pikachu').type('{enter}');
    cy.get(SELECTORS.RESULTS_WRAPPER).should('be.visible');
    cy.get(SELECTORS.FAVOURITE_ITEM_WRAPPER).should('have.length', 0)
    cy.get(SELECTORS.TOGGLE_FAVOURITE).click();
    cy.get(SELECTORS.FAVOURITE_ITEM_WRAPPER).should('have.length', 1)
  });

  it('Should toggle a favourite', () => {
    cy.get(SELECTORS.SEARCH_INPUT).clear().type('Pikachu').type('{enter}');
    cy.get(SELECTORS.RESULTS_WRAPPER).should('be.visible');
    cy.get(SELECTORS.FAVOURITE_ITEM_WRAPPER).should('have.length', 1)
    cy.get(SELECTORS.TOGGLE_FAVOURITE).click();
    cy.get(SELECTORS.FAVOURITE_ITEM_WRAPPER).should('have.length', 0)
  });

  it('Should remove a favourite', () => {
    cy.get(SELECTORS.SEARCH_INPUT).clear().type('Pikachu').type('{enter}');
    cy.get(SELECTORS.RESULTS_WRAPPER).should('be.visible');
    cy.get(SELECTORS.FAVOURITE_ITEM_WRAPPER).should('have.length', 0)
    cy.get(SELECTORS.TOGGLE_FAVOURITE).click();
    cy.get(SELECTORS.FAVOURITE_ITEM_WRAPPER).should('have.length', 1)
    cy.get(SELECTORS.REMOVE_FAVOURITE).click();
    cy.get(SELECTORS.FAVOURITE_ITEM_WRAPPER).should('have.length', 0)
  });

});