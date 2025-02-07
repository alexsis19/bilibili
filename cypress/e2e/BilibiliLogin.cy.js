describe("Count Product Items", () => {
const username = Cypress.env("username");
const password = Cypress.env("password");
    beforeEach(() => {
        cy.loginBilibili(username, password);
    });
    it('Should navigate through sidebar items', () => {
     
  
      cy.get('.bstar-sidebar__list li').each(($li, index) => {
        cy.log(`Navigating to sidebar item ${index + 1}`);
  
        // 1. Get the link within each <li>
        cy.wrap($li).find('a').then(($link) => {
          const href = $link.attr('href'); // Get the href attribute
          const text = $link.text();       // Get the link text
  
          cy.log(`Link: ${text} - ${href}`);
  
          // 2. Assertions (examples)
          cy.wrap($link).should('have.attr', 'href'); // Check if href exists
          cy.wrap($link).should('not.be.empty'); // Check if link text is not empty
  
          // 3. Conditional navigation (example - navigate if it's not the home link)
          if (!href.includes('/')) { // Check if it's not the home link
            cy.request(href).then((response) => { // Check if page loads successfully
              expect(response.status).to.eq(200)
            })
            cy.wrap($link).click({force: true}); // Click the link
            cy.url().should('include', href.replace('https://www.bilibili.tv/en','')); // Assert URL change
            cy.visit('https://www.bilibili.tv/en/'); // Go back to the home page
          }
        });
  
      });
    });
  });

