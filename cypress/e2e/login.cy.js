import BiliLogin from "../page-object/bilibiliLogin.po";

describe("Login to Bilibili", () => {
  const biliLogin = new BiliLogin();
  const username = Cypress.env("username");
  const password = Cypress.env("password");
    beforeEach(() => {
        cy.visit('/');
    });
  it("should count the number of product items on the page", () => {
    biliLogin.SigninBtn().click();
    biliLogin.SigninCheckbox().click();
    biliLogin.SigninOption().click();
    biliLogin.AccBtn().click();
    biliLogin.email().type(username);
    biliLogin.password().type(password);
    biliLogin.LoginBtn().click();
  });
});
