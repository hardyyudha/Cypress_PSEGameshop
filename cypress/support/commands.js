Cypress.Commands.add('socialLogin', (username, password) => {
    cy.origin(
        'https://accounts.google.com',
        {
            args: {
                username,
                password,
            },
        },
        ({ username, password }) => {
            Cypress.on(
                'uncaught:exception',
                (err) =>
                    !err.message.includes('ResizeObserver loop') &&
                    !err.message.includes('Error in protected function')
            )

            cy.get('input[type="email"]').type(username, {
                log: false,
            })
            // NOTE: The element exists on the original form but is hidden and gets rerendered, which leads to intermittent detached DOM issues
            cy.get('[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]').click().wait(4000)
            cy.get('[type="password"]').type(password, {
                log: false,
            })
            cy.get('[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]').click().wait(4000)
            // Script di bawah di comment karena sudah melakukan aktivasi. Jika menggunakan user baru dengan google sign in pertama kali, nyalakan script dibawah
            // cy.contains('Continue').click().wait(4000)

        }
    )
})
Cypress.Commands.add('socialLoginErrorUser', (username) => {
    cy.origin(
        'https://accounts.google.com',
        {
            args: {
                username,
            },
        },
        ({ username, password }) => {
            Cypress.on(
                'uncaught:exception',
                (err) =>
                    !err.message.includes('ResizeObserver loop') &&
                    !err.message.includes('Error in protected function')
            )

            cy.get('input[type="email"]').type(username, {
                log: false,
            })
            // NOTE: The element exists on the original form but is hidden and gets rerendered, which leads to intermittent detached DOM issues
            cy.get('[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]').click().wait(4000)
            cy.contains('Couldn\’t find your Google Account').should('be.visible')

        }
    )
})
Cypress.Commands.add('socialLoginErrorPass', (username, password) => {
    cy.origin(
        'https://accounts.google.com',
        {
            args: {
                username,
                password,
            },
        },
        ({ username, password }) => {
            Cypress.on(
                'uncaught:exception',
                (err) =>
                    !err.message.includes('ResizeObserver loop') &&
                    !err.message.includes('Error in protected function')
            )

            cy.get('input[type="email"]').type(username, {
                log: false,
            })
            // NOTE: The element exists on the original form but is hidden and gets rerendered, which leads to intermittent detached DOM issues
            cy.get('[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]').click().wait(4000)
            cy.get('[type="password"]').type(password, {
                log: false,
            })
            cy.get('[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]').click().wait(4000)
            cy.contains('Wrong password. Try again or click Forgot password to reset it.').should('be.visible')

        }
    )
})
// Script dibawah berfungsi untuk tetap menjalankan test walaupun Cypress menemukan error terkait Uncaught Exception
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})