describe('Login Scenario - PSE', () => {
  beforeEach('Vist Web on Each Test', () => {
    cy.visit(Cypress.env("url_test"))
    cy.get('.header-nav > .account-item > .nav-top-link').click()
  } )
  it('Positive Case - Login Manual - Credential Benar', () => {
    cy.get('#username').type(Cypress.env('correct_user'))
    cy.get('#password').type(Cypress.env('correct_pass'))
    cy.get(':nth-child(3) > .woocommerce-button').click()
    cy.get('.header-nav > .account-item > .account-link').click()
    cy.contains('Hello ' + Cypress.env('correct_user')).should('be.visible')
  })
  it('Negative Case - Login Manual - Username Salah', () => {
    cy.get('#username').type(Cypress.env('wrong_user'))
    cy.get('#password').type(Cypress.env('correct_pass'))
    cy.get(':nth-child(3) > .woocommerce-button').click()
    cy.contains('Error: The username gokewe9665 is not registered on this site. If you are unsure of your username, try your email address instead.').should('be.visible')
  })
  it('Negative Case - Login Manual - Username Kosong', () => {
    cy.get('#password').type(Cypress.env('correct_pass'))
    cy.get(':nth-child(3) > .woocommerce-button').click()
    cy.contains('Error: Username is required.').should('be.visible')
  })
  it('Negative Case - Login Manual - Password Salah', () => {
    cy.get('#username').type(Cypress.env('correct_user'))
    cy.get('#password').type(Cypress.env('wrong_pass'))
    cy.get(':nth-child(3) > .woocommerce-button').click()
    cy.contains('Error: The password you entered for the username gokewe9664 is incorrect.').should('be.visible')
  })
  it('Negative Case - Login Manual - Password Kosong', () => {
    cy.get('#username').type(Cypress.env('correct_user'))
    cy.get(':nth-child(3) > .woocommerce-button').click()
    cy.contains('Error: The password field is empty.').should('be.visible')
  })
  it('Negative Case - Login Manual - Semua Input Salah', () => {
    cy.get('#username').type(Cypress.env('wrong_user'))
    cy.get('#password').type(Cypress.env('wrong_pass'))
    cy.get(':nth-child(3) > .woocommerce-button').click()
    cy.contains('Error: The username gokewe9665 is not registered on this site. If you are unsure of your username, try your email address instead.').should('be.visible')
  })
  it('Negative Case - Login Manual - Semua Input Kosong', () => {
    cy.get(':nth-child(3) > .woocommerce-button').click()
    cy.contains('Error: Username is required.').should('be.visible')
  })
  it('Positive Case - Login Google - Credential Benar', () => {
    cy.get('.google-plus').click()
    cy.socialLogin(Cypress.env('correct_google_user'), Cypress.env('correct_google_pass'))
    cy.visit(Cypress.env("url_test"))
    cy.get('.header-nav > .account-item > .account-link').click()
    cy.contains('Hello ' + Cypress.env('correct_google_name')).should('be.visible')
  })
  it('Negative Case - Login Google - Username Google Salah', () => {
    cy.get('.google-plus').click()
    cy.socialLoginErrorUser(Cypress.env('wrong_google_user'))
  })
  it('Negative Case - Login Google - Password Google Salah', () => {
    cy.get('.google-plus').click()
    cy.socialLoginErrorPass(Cypress.env('correct_google_user'),Cypress.env('wrong_google_pass'))
  })
  it('Positive Case - Lupa Password - User Ada', () => {
    cy.get('.woocommerce-LostPassword > a').click()
    cy.get('#user_login').type(Cypress.env('correct_user'))
    cy.get('.woocommerce-Button').click()
    cy.contains('Password reset email has been sent.').should('be.visible')
  })
  it('Negative Case - Lupa Password - User Tidak Ada', () => {
    cy.get('.woocommerce-LostPassword > a').click()
    cy.get('#user_login').type(Cypress.env('wrong_user'))
    cy.get('.woocommerce-Button').click()
    cy.contains('Invalid username or email.').should('be.visible')
  })
})