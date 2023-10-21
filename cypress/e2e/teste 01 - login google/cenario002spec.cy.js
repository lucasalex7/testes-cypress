describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://accounts.google.com');
      cy.get('input[type="email"]').type('ggenkinsleorio@gmail.com');
      cy.contains('Next').click();
  })
  })