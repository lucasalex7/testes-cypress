describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://accounts.google.com');
    cy.get('input[type="email"]').type('jenkinsleorio@gmail.com');
    cy.contains('Next').click();
    cy.wait(3000);
    cy.get('input[type="password"]').type('burger2003');
    cy.contains('Next').click();
    cy.wait(3000);
    cy.visit('https://drive.google.com');
})
})