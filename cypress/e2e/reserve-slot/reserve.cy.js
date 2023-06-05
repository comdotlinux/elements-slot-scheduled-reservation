describe('Elemets Gym', () => {
	it('Reserve Slot for tomorrow', () => {
		cy.visit('https://slots.elements.com/', { timeout: 20_000 })
		cy.get('#input_login_email').type(Cypress.env('ELEMENTS_EMAIL'))
		cy.get('#input_login_password').type(Cypress.env('ELEMENTS_PASSWORD'))
        cy.get('input[type=submit]').click()

		cy.get('#select_studio', { timeout: 20_000 }).select('TIMESLOTS Balanstraße')
        
        cy.get('div.course-table', { timeout: 20_000 })
			.find('a.button')
			.contains('Platz reservieren')
			.click()
	})
  })