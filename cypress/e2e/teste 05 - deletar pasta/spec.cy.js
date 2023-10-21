describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://accounts.google.com');
      cy.get('input[type="email"]').type('jenkinsleorio@gmail.com');
      cy.contains('Next').click();
      cy.get('input[type="password"]').type('burger2003');
      cy.contains('Next').click();
      cy.wait(3000);
      cy.visit('https://drive.google.com');
      cy.origin('https://drive.google.com', () => {
        cy.get('[aria-label="pasta 001 Google Drive Folder"]').trigger('contextmenu', {which: 3});
        cy.contains('Move to trash').click();
  })
  })
  })