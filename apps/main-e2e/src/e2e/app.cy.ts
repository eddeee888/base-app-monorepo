describe('main', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('h1').contains('Welcome!');
    cy.contains('User list:');
  });
});
