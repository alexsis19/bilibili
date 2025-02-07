class BiliLogin {
    SigninBtn() {
        return cy.get("span[class='bstar-header-user__btn']").should('be.visible');
    }
    SigninCheckbox() {
        return cy.get('.bstar-checkbox__input').should('be.visible');
    }
    SigninOption() {
        return cy.get("div.dialog.login[data-v-a9eea325]").should('exist');
    }
    AccBtn() {
        return cy.xpath("//button[@class='login-tabs__btn' and normalize-space()='Account']").should('be.visible');
    }
    email() {
        return cy.get("input[placeholder='Email']").should('be.visible');
    }
    password() {
        return cy.get("input[placeholder='Enter Password']").should('be.visible');
    }
    LoginBtn() {
        return cy.xpath("//button[@type='button' and normalize-space()='Log in']").should('be.visible');
    }
}

export default BiliLogin;