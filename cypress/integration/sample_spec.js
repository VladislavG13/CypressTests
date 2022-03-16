describe('My first test', function () {
    it('Does not do much', function () {
        cy.visit('https://todomvc.com/examples/vanillajs/')
        cy.viewport(1920, 1080)
        cy.get('input').first().focus()
        cy.focused()
            .should('have.class', 'new-todo')
    })
    it('accepts input', () => {
        cy.visit('https://todomvc.com/examples/vanillajs/')
        cy.get('.new-todo')
            .type('buy some cheese')
            .type('{enter}')
            .type('feed the cat')
            .type('{enter}')
        cy.get('input[type="checkbox"]').eq(1).check({ force: true })
        cy.get('input[type="checkbox"]').eq(2).check({ force: true })
    })
 
})

