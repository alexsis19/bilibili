// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginBilibili', (email, password) => {
    cy.visit('https://www.bilibili.tv/en');
    cy.get("span[class='bstar-header-user__btn']").click(); //signin button
    cy.get('.bstar-checkbox__input').click(); //checkbox check
    cy.contains('Log in with Phone/Email').click(); //login with phone/email 
    cy.xpath("//button[@class='login-tabs__btn' and normalize-space()='Account']").click();
    cy.get("input[placeholder='Email']").type(email);
    cy.get("input[placeholder='Enter Password']").type(password);
    cy.xpath("//button[@type='button' and normalize-space()='Log in']").click();
  });
/// <reference types="cypress-xpath" />